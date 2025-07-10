import jwt from 'jsonwebtoken';

const authentication = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
      req.user = decoded;
    });
  }
  next();
};

export default authentication;
