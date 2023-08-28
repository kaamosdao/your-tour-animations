const getLoopedNumber = (number, arrLength) => {
  const lastNumber = arrLength - 1;
  if (number < 0) {
    return lastNumber;
  }
  if (number > lastNumber) {
    return 0;
  }
  return number;
}

export default getLoopedNumber;
