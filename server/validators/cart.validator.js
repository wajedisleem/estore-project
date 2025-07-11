import mongoose from 'mongoose';
import Product from '../database/schemas/product.schema.js';
import Translations from '../i18n/translations.js';

const validateCartAdd = (req, res, next) => {
  const { productId, quantity = 1 } = req.body;

  if(!productId){
    return res.status(400).json({
      success: false,
      message: Translations[req.lang].cart.invalidProductId
    });
  }

  if (quantity <= 0) {
    return res.status(400).json({
      success: false,
      message: Translations[req.lang].cart.quantityExceedsStock
    });
  }

  if (typeof quantity !== 'number') {
    return res.status(400).json({
      success: false,
      message: Translations[req.lang].cart.quantityMustBeNumber
    });
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
    return res.status(400).json({
      success: false,
      message: Translations[req.lang].cart.invalidProductId
    });
  }

  if (!quantity) {
    return res.status(400).json({
      success: false,
      message: Translations[req.lang].cart.quantityRequired
    });
  }

  if (quantity <= 0) {
    return res.status(400).json({
      success: false,
      message: Translations[req.lang].cart.quantityMustBeGreaterThanZero
    });
  }

  if (typeof quantity !== 'number') {
    return res.status(400).json({
      success: false,
      message: Translations[req.lang].cart.quantityMustBeNumber
    });
  }

  let product = await Product.findById(productId);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: Translations[req.lang].cart.productNotFound
    });
  }

  if (quantity > product.stock) {
    return res.status(400).json({
      success: false,
      message: Translations[req.lang].cart.quantityExceedsStock
    });
  }

  next();
};

const validateCartRemove = (req, res, next) => {
  const { productId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).json({
      success: false,
      message: Translations[req.lang].cart.invalidProductId
    });
  }

  next();
};

export { validateCartAdd, validateCartUpdate, validateCartRemove };
