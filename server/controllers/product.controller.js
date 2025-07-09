import Product from '../database/schemas/product.schema.js';

class ProductController {
  static async offer(req, res) {
    const products = await Product.find({ offer: true }).select('_id en_name ar_name en_description ar_description en_category ar_category price image');
    return res.status(200).json(products);
  }

  static async new(req, res) {
    const products = await Product.find({ new: true }).select('_id en_name ar_name en_category ar_category price image stock');
    return res.status(200).json(products);
  }

  static async featured(req, res) {
    const products = await Product.find({ featured: true }).select('_id en_name ar_name en_category ar_category price image stock');
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
