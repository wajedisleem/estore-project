const loading = async (req, res, next) => {
  console.log('Loading middleware triggered');
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log('Loading complete');
  next();
};

export default loading;
