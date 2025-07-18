import Translations from "../i18n/translations.js";

const validateOrderPlace = (req, res, next) => {
  const { products } = req.body;

  if (!req.user) {
    return res.sendStatus(401);
  }
  
  if (!products || !Array.isArray(products) || products.length === 0) {
    return res.status(400).json({
      success: false,
      message: Translations[req.lang].order.invalidOrderData
    });
  }

  next();
};

export { validateOrderPlace };
