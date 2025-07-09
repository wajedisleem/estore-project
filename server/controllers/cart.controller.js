class CartController {
  static get(req, res) {
    return res.status(200).json({ status: 'get' });
  }

  static add(req, res) {
    return res.status(200).json({ status: 'add' });
  }

  static update(req, res) {
    return res.status(200).json({ status: 'update' });
  }

  static remove(req, res) {
    return res.status(200).json({ status: 'remove' });
  }
}

export default CartController;
