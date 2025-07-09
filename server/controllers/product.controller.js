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
    const { search, category, sort } = req.query;
    
    let filter = {};
    if (search) {
      switch (req.lang) {
        case 'en':
          filter.$or = [{ en_name: { $regex: search, $options: 'i' } }, { en_description: { $regex: search, $options: 'i' } }];
          break;
        case 'ar':
          filter.$or = [{ ar_name: { $regex: search, $options: 'i' } }, { ar_description: { $regex: search, $options: 'i' } }];
          break;
        default:
          filter.$or = [
            { en_name: { $regex: search, $options: 'i' } },
            { en_description: { $regex: search, $options: 'i' } },
            { ar_name: { $regex: search, $options: 'i' } },
            { ar_description: { $regex: search, $options: 'i' } }
          ];
      }
    }

    if (category) {
      filter.en_category = { $regex: category, $options: 'i' };
    }

    let sortOptions = {};
    switch (sort) {
      case 'alphabetically':
        sortOptions = req.lang === 'en' ? { en_name: 1 } : { ar_name: 1 };
        break;
      case 'price-low-high':
        sortOptions = { price: 1 };
        break;
      case 'price-high-low':
        sortOptions = { price: -1 };
        break;
      default:
        sortOptions = {};
    }

    const products = await Product.find(filter).sort(sortOptions).select('_id en_name ar_name en_category ar_category price image stock');
    return res.status(200).json(products);
  }

  static async details(req, res) {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.sendStatus(404);
      }
      return res.status(200).json(product);
    } catch (error) {
      return res.sendStatus(500);
    }
  }

  static async related(req, res) {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.sendStatus(404);
      }
      const relatedProducts = await Product.find({
        _id: { $ne: product._id },
        en_category: product.en_category
      })
        .limit(4)
        .select('_id en_name ar_name en_category ar_category price image stock');

      return res.status(200).json(relatedProducts);
    } catch (error) {
      return res.sendStatus(500);
    }
  }
}

export default ProductController;
