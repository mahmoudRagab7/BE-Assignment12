// const request = require("request");

// var countryName = process.argv[2];
// const url = `https://api.weatherapi.com/v1/current.json?key=f68d41bee1ab4f2fa92150207232007&q=${countryName}`;

// request({ url, json: true }, (error, response) => {
//   if (error) {
//     console.log("ERROR HAS OCCURED");
//   } else if (response.body.error) {
//     console.log(response.body.error.message);
//   } else {
//     // console.log(`Country Name Is: ${response.body.location.name}`);
//     // console.log(`Country Name Is: ${response.body.location.region}`);
//     console.log(`Latitude Is: ${response.body.location.lat}`);
//     console.log(`Longitude Is: ${response.body.location.lon}`);
//     console.log(`Temperture Is: ${response.body.current.temp_c}`);
//     console.log(`Weather Status Is: ${response.body.current.condition.text}`);
//   }
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const request = require("request");
const forecast = require("./data/forecast");
const geocode = require("./data/geocode");

const country = process.argv[2];

geocode(country, (error, data) => {
  console.log("ERROR : ", error);
  console.log("DATA  : ", data);

  if (data) {
    forecast(data.latitude, data.longtitude, (error, data) => {
      console.log("ERROR : ", error);
      console.log("DATA  : ", data);
    });
  } else {
    console.log("Data Entered have An Error");
  }
});
