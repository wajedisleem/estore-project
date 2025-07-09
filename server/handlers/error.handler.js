const errorHandler = (err, req, res, next) => {
  let result = {
    success: false,
    message: err.message
  };
  if (process.env.NODE_ENV === 'development' && err.status !== 404) {
    result.error = err;
  }
  return res.status(err.status || 500).json(result);
};

export default errorHandler;
