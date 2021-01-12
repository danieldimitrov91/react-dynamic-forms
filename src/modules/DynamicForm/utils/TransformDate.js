const transformToInputDateFormat = (date) => (date.slice(0, 10));
const transformToISODateFormat = (date) => (new Date(date).toISOString());

export {transformToInputDateFormat, transformToISODateFormat};
