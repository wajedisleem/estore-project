const validateLogin = (req, res, next) => {
    let { token } = req.body;
    if (!token) {
      return res.status(400).json({ error: 'Token is required' });
    }
  next();
};

export { validateLogin };
