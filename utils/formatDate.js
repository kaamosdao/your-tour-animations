const formatDate = (date) => {
  if (!date) {
    return null;
  }
  const formattedDate = date.split('.').reverse().join('-');

  return new Date(formattedDate);
};

export default formatDate;
