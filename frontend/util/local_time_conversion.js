export const toLocalTime = (utc) => {
  const date = new Date(Date.parse(utc));
  const timeString = date.toLocaleTimeString();
  return timeString.slice(0, -6).concat(timeString.slice(-3));
};
