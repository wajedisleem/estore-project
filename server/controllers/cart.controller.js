import mongoose from 'mongoose';
import crypto from 'crypto';
import Cart from '../database/schemas/cart.schema.js';
import Product from '../database/schemas/product.schema.js';
import Translations from '../i18n/translations.js';

class CartController {
  static async get(req, res) {
    try {
      let cartId = req.cookies.cartId;
      let userId = req.user.id;

      let filter = {};
      if (cartId && mongoose.Types.ObjectId.isValid(cartId)) {
        filter.cart = cartId;
      }
      if (userId && mongoose.Types.ObjectId.isValid(userId)) {
        filter.user = userId;
      }

      const products = await Cart.find(filter).populate('product', 'en_name ar_name en_category ar_category price image');
      let items = products.map((item) => {
        return {
          product_id: item.product._id,
          en_name: item.product.en_name,
          ar_name: item.product.ar_name,
          en_category: item.product.en_category,
          ar_category: item.product.ar_category,
          price: item.product.price,
          image: item.product.image,
          quantity: item.quantity
        };
      });

      return res.status(200).json(items);
    } catch (error) {
      return res.sendStatus(500);
    }
  }

  static async add(req, res) {
    try {
      let cartId = req.cookies.cartId;
      let userId = req.user?.id;

      const { productId, quantity = 1 } = req.body;

      if (!mongoose.Types.ObjectId.isValid(productId)) {
        return res.status(400).json({
          success: false,
          message: Translations[req.lang].cart.invalidProductId
        });
      }

      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({
          success: false,
          message: Translations[req.lang].cart.productNotFound
        });
      }

      if (quantity > product.stock) {
        return res.status(400).json({
          success: false,
          message: Translations[req.lang].cart.quantityExceedsStock
        });
      }

      if (cartId) {
        const cart = await Cart.findOne({ cartId });
        if (!cart) {
          cartId = null;
        }
      }

      if (!cartId) {
        cartId = crypto.randomUUID();

        res.cookie('cartId', cartId, {
          httpOnly: true,
          sameSite: 'None',
          secure: true,
          maxAge: 7776000000
        });
      }

      let cart = await Cart.findOne({ cartId, product: productId });
      if (cart) {
        cart.quantity = quantity;
      } else {
        cart = new Cart({ cartId, user: userId, product: productId, quantity });
      }
      await cart.save();

      let item = {
        product_id: productId,
        en_name: product.en_name,
        ar_name: product.ar_name,
        en_category: product.en_category,
        ar_category: product.ar_category,
        price: product.price,
        image: product.image,
        quantity
      };

      return res.status(200).json({
        success: true,
        message: Translations[req.lang].cart.productAddedToCart,
        product: item
      });
    } catch (error) {
      console.error('Error adding product to cart:', error);
      return res.sendStatus(500);
    }
  }

  static async update(req, res) {
    try {
      let cartId = req.cookies.cartId;
      let userId = req.user?.id;

      const { productId } = req.params;
      const { quantity } = req.body;

      let cart = await Cart.findOne({ cartId, product: productId });
      if (!cart) {
        cart = await Cart.findOne({ user: userId, product: productId });
      }

      if (!cart) {
        return res.status(404).json({
          success: false,
          message: Translations[req.lang].cart.itemNotFound
        });
      }

      cart.quantity = quantity;
      await cart.save();

      return res.status(200).json({
        success: true,
        message: Translations[req.lang].cart.productUpdated,
        productId,
        quantity
      });
    } catch (error) {
      return res.sendStatus(500);
    }
  }

  static async remove(req, res) {
    try {
      let cartId = req.cookies.cartId;
      let userId = req.user?.id;

      const { productId } = req.params;

      let cart = await Cart.findOne({ cartId, product: productId });
      if (!cart) {
        cart = await Cart.findOne({ user: userId, product: productId });
      }

      if (!cart) {
        return res.status(404).json({
          success: false,
          message: Translations[req.lang].cart.itemNotFound
        });
      }

      await Cart.deleteOne({ _id: cart._id });

      return res.status(200).json({
        success: true,
        message: Translations[req.lang].cart.productRemovedFromCart,
        productId
      });
    } catch (error) {
      return res.sendStatus(500);
    }
  }
}

export default CartController;
