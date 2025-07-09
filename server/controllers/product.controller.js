import Product from "../database/schemas/product.schema.js";

class ProductController {
  static async list(req, res) {
    const products = await Product.find({});
    return res.status(200).json(products);
  }
}

export default ProductController;
