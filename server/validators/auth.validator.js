import Translations from '../i18n/translations.js';

const validateLogin = (req, res, next) => {
  let { token } = req.body;
  if (!token) {
    return res.status(400).json({
      success: false,
      message: Translations[req.lang].auth.tokenRequired
    });
  }
  next();
};

export { validateLogin };
