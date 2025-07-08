const generateOrderId = () => {
  return Math.floor(1000000000 + Math.random() * 9000000000);
};

const getOrderDate = () => {
  return new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const getDeliveryDate = () => {
  const today = new Date();
  const futureDate = new Date();
  futureDate.setDate(today.getDate() + 7);

  return futureDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export { generateOrderId, getOrderDate, getDeliveryDate };
