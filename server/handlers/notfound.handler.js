const notFoundHandler = (req, res, next) => {
  res.sendStatus(404);
};

export default notFoundHandler;
