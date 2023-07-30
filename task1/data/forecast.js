const request = require("request");

const forecast = (latitude, longtitude, callback) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=f68d41bee1ab4f2fa92150207232007&q=${latitude},${longtitude}`;
  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect weather service", undefined);
    } else if (response.body.error) {
      callback(response.body.error.message, undefined);
    } else {
      callback(
        undefined,
        "Current Weather: " +
          response.body.current.condition.text +
          " , Temperture Is: " +
          response.body.current.temp_c
      );
    }
  });
};

module.exports = forecast;
