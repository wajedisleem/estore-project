import mongoose from 'mongoose';
import Product from '../database/schemas/product.schema.js';
import Cart from '../database/schemas/cart.schema.js';
import Order from '../database/schemas/order.schema.js';
import User from '../database/schemas/user.schema.js';
import EmailService from '../services/email.service.js';

class OrderController {
  static async place(req, res) {
    try {
      const { products } = req.body;

      const orderProducts = [];

      for (const cartProduct of products) {
        if (mongoose.Types.ObjectId.isValid(cartProduct.product_id)) {
          const product = await Product.findById(cartProduct.product_id);
          if (product && product.stock >= cartProduct.quantity) {
            orderProducts.push({
              product: cartProduct.product_id,
              quantity: cartProduct.quantity,
              price: product.price
            });
          }
        }
      }

      if (orderProducts.length === 0) {
        return res.status(400).json({ success: false, message: 'No valid products found in the order' });
      }

      let sub_total = orderProducts.reduce((sum, item) => sum + item.price * item.quantity, 0);
      let shipping = sub_total === 0 || sub_total >= 100 ? 0 : 9.99;
      let tax = parseFloat(((sub_total + shipping) * 0.05).toFixed(2));
      let total_amount = parseFloat((sub_total + shipping + tax).toFixed(2));

      const order = new Order({
        user: req.user.id,
        sub_total: sub_total,
        shipping: shipping,
        tax: tax,
        total_amount: total_amount,
        products: orderProducts
      });
      await order.save();

      for (const item of orderProducts) {
        const product = await Product.findById(item.product);
        if (product) {
          product.stock -= item.quantity;
          await product.save();
        }
      }

      await Cart.deleteMany({ $or: [{ cartId: req.cookies.cartId }, { user: req.user.id }] });
      res.clearCookie('cartId');

      const user = await User.findById(req.user.id);
      EmailService.sendOrderConfirmation(user.name, user.email, {order_id: order._id, name: user.name, sub_total, shipping, tax, total_amount});

      return res.status(200).json({
        success: true,
        message: 'Order placed successfully',
        order_id: order._id,
        total_amount: total_amount
      });
    } catch (error) {
      console.error('Error placing order:', error);
      return res.sendStatus(500);
    }
  }
}

export default OrderController;
