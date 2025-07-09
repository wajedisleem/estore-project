const language = (req, res, next) => {
  const language = req.headers['accept-language'];
  req.lang = ['ar', 'en'].includes(language) ? language : 'ar';
  next();
};

export default language;
