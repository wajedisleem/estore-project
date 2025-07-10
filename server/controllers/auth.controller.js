class AuthController {
  static async login(req, res) {
    const token = jwt.sign({ id: 1, fullname: 'Wajed Isleem' }, process.env.JWT_SECRET_KEY, { expiresIn: '120d' });
    return res.status(200).json({ token, user: { id: 1, fullname: 'Wajed Isleem' } });
  }

  static async verify(req, res) {
    if (!req.user) {
      return res.sendStatus(401);
    }
    return res.status(200).json(req.user);
  }
}

export default AuthController;
