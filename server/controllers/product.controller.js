import Product from "../database/schemas/product.schema.js";

class ProductController {
  static async list(req, res) {
    const products = await Product.find({});
    return res.status(200).json(products);
  }

  static async details(req, res) {
    const product = await Product.findById(req.params.id);
    return res.status(200).json(product);
  }
}

export default ProductController;
