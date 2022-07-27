// 1 altere a função getPosition utilizando a property shorthand.
const getPositionOld = (latitude, longitude) => ({
  latitude: latitude,
  longitude: longitude});

console.log(getPosition(-19.8157, -43.9542));

// Com Shorthand
const getPositionNew = (latitude, longitude) => ({
  latitude,
  longitude,});

console.log(getPosition(-19.8157, -43.9542));