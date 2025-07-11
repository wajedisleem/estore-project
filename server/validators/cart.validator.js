import mongoose from 'mongoose';
import Product from '../database/schemas/product.schema.js';

const validateCartAdd = (req, res, next) => {
  const { productId, quantity = 1 } = req.body;

  if(!productId){
    return res.status(400).json({ success: false, message: 'Product ID is required' });
  }

  if (quantity <= 0) {
    return res.status(400).json({ success: false, message: 'Quantity must be greater than zero' });
  }

  if (typeof quantity !== 'number') {
    return res.status(400).json({ success: false, message: 'Quantity must be a number greater than zero' });
  }

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).json({
      success: false,
      message: Translations[req.lang].cart.invalidProductId
    });
  }
  next();
};

const validateCartUpdate = async (req, res, next) => {
  const { productId } = req.params;
  const { quantity } = req.body;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).json({ success: false, message: 'Invalid product ID' });
  }

  if (!quantity) {
    return res.status(400).json({ success: false, message: 'Quantity is required' });
  }

  if (quantity <= 0) {
    return res.status(400).json({ success: false, message: 'Quantity must be greater than zero' });
  }

  if (typeof quantity !== 'number') {
    return res.status(400).json({ success: false, message: 'Quantity must be a number greater than zero' });
  }

  let product = await Product.findById(productId);
  if (!product) {
    return res.status(404).json({ success: false, message: 'Product not found' });
  }

  if (quantity > product.stock) {
    return res.status(400).json({ success: false, message: 'Quantity exceeds available stock' });
  }

  next();
};

const validateCartRemove = (req, res, next) => {
  const { productId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).json({ success: false, message: 'Invalid product ID' });
  }

  next();
};

export { validateCartAdd, validateCartUpdate, validateCartRemove };
