class OrderController {
  static async place(req, res) {
    try {
      return res.status(200).json({ success: true, message: 'Order placed successfully' });
    } catch (error) {
      return res.sendStatus(500);
    }
  }
}

export default OrderController;
