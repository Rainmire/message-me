export const toLocalTime = (utc) => {
  const date = new Date(Date.parse(utc));
  return date.toLocaleTimeString().slice(0, -6);
};
