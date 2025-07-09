import Product from '../database/schemas/product.schema.js';

class ProductController {
  static async offer(req, res) {
    const products = await Product.find({ offer: true });
    return res.status(200).json(products);
  }

  static async new(req, res) {
    const products = await Product.find({ new: true });
    return res.status(200).json(products);
  }

  static async featured(req, res) {
    const products = await Product.find({ featured: true });
    return res.status(200).json(products);
  }

  static async search(req, res) {
    const products = await Product.find({});
    return res.status(200).json(products);
  }

  static async details(req, res) {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.sendStatus(404);
    }
    return res.status(200).json(product);
  }
}

export default ProductController;
