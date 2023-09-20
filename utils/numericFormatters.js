export const currencyFormat = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
};

export const formatPercentage = (discount) => {
  if (typeof discount !== 'number') {
    // Handle invalid input (non-numeric values)
    return null;
  }

  return `${discount}% off`;
}