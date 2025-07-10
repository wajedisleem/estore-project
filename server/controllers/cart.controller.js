import mongoose from 'mongoose';
import Cart from '../database/schemas/cart.schema.js';
import CartProduct from '../database/schemas/cart-product.schema.js';
import Product from '../database/schemas/product.schema.js';

class CartController {
  static async get(req, res) {
    try {
      let cartId = req.cookies.cartId;
      if (cartId && mongoose.Types.ObjectId.isValid(cartId)) {
        const cart = await Cart.findById(cartId);
        if (cart) {
          const products = await CartProduct.find({ cart: cartId }).populate('product', 'en_name ar_name en_category ar_category price image');

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
        }
      }
      return res.status(200).json([]);
    } catch (error) {
      return res.sendStatus(500);
    }
  }

  static async add(req, res) {
    try {
      let { cartId } = req.cookies;
      const { productId, quantity = 1 } = req.body;

      if (!mongoose.Types.ObjectId.isValid(productId)) {
        return res.status(400).json({ success: false, message: 'Invalid product ID' });
      }

      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ success: false, message: 'Product not found' });
      }

      if (quantity > product.stock) {
        return res.status(400).json({ success: false, message: 'Quantity exceeds available stock' });
      }

      if (cartId && !mongoose.Types.ObjectId.isValid(cartId)) {
        cartId = null;
      }

      if (cartId) {
        const cart = await Cart.findById(cartId);
        if (!cart) {
          cartId = null;
        }
      }

      if (!cartId) {
        const cart = new Cart();
        await cart.save();
        cartId = cart.id;

        res.cookie('cartId', cartId, {
          httpOnly: true,
          sameSite: 'None',
          secure: true,
          maxAge: 7776000000
        });
      }

      const cartProduct = new CartProduct({
        cart: cartId,
        product: productId,
        quantity
      });

      await cartProduct.save();

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

      return res.status(200).json({ success: true, message: 'Product added to cart', product: item });
    } catch (error) {
      return res.sendStatus(500);
    }
  }

  static async update(req, res) {
    try {
      const { cartId } = req.cookies;
      const { productId } = req.params;
      const { quantity } = req.body;

      if (!cartId) {
        return res.status(400).json({ error: 'Cart not found' });
      }

      if (!mongoose.Types.ObjectId.isValid(productId)) {
        return res.status(400).json({ success: false, message: 'Invalid product ID' });
      }

      if (!mongoose.Types.ObjectId.isValid(cartId)) {
        return res.status(400).json({ success: false, message: 'Invalid cart ID' });
      }

      const cartProduct =  await CartProduct.findOneAndUpdate({ cart: cartId, product: productId }, { quantity }, { new: true });
      if (!cartProduct) {
        return res.status(404).json({ success: false, message: 'Product not found in cart' });
      }

      return res.status(200).json({ success: true, message: 'Product quantity updated', productId, quantity });
    } catch (error) {
      return res.sendStatus(500);
    }
  }

  static async remove(req, res) {
    try {
      const { cartId } = req.cookies;
      const { productId } = req.params;

      if (!cartId) {
        return res.status(400).json({ error: 'Cart not found' });
      }

      if (!mongoose.Types.ObjectId.isValid(productId)) {
        return res.status(400).json({ success: false, message: 'Invalid product ID' });
      }

      if (!mongoose.Types.ObjectId.isValid(cartId)) {
        return res.status(400).json({ success: false, message: 'Invalid cart ID' });
      }

      const cartProduct = await CartProduct.findOneAndDelete({ cart: cartId, product: productId });
      if (!cartProduct) {
        return res.status(404).json({ success: false, message: 'Product not found in cart' });
      }

      return res.status(200).json({ success: true, message: 'Product removed from cart', productId });
    } catch (error) {
      return res.sendStatus(500);
    }
  }
}

export default CartController;
