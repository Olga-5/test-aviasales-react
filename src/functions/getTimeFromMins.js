export default (mins) => {
  const hours = Math.trunc(mins / 60);
  const minutes = mins % 60;
  const result = { hours, minutes };
  return result;
};
