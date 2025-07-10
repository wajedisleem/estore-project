import mongoose from 'mongoose';
import Product from '../database/schemas/product.schema.js';
import Order from '../database/schemas/order.schema.js';

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

      let sub_total = orderProducts.reduce((sum, item) => sum + item.price * item.quantity, 0);
      let shipping = sub_total === 0 || sub_total >= 100 ? 0 : 9.99;
      let tax = parseFloat(((sub_total + shipping) * 0.05).toFixed(2));
      let total_amount = parseFloat((sub_total + shipping + tax).toFixed(2));

      const order = new Order({
        sub_total: sub_total,
        shipping: shipping,
        tax: tax,
        total_amount: total_amount,
        products: orderProducts
      });
      await order.save();

      res.clearCookie('cartId');

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
