const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

const path = require("path");
const publicDirectory = path.join(__dirname, "../public");
app.use(express.static(publicDirectory));

app.set("view engine", "hbs");

const viewsDirectory = path.join(__dirname, "../templete/views");
app.set("views", viewsDirectory);

//////////////////////////////////////////////////////////////////

var hbs = require("hbs");

const partialsPath = path.join(__dirname, "../templete/partials");

hbs.registerPartials(partialsPath);

///////////////////////////////////////////////////////////////////

app.get("/", (req, res) => {
  res.render("index", {
    title: "Home",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const request = require("request");

const url = `https://api.weatherapi.com/v1/current.json?key=f68d41bee1ab4f2fa92150207232007&q=egypt`;

request({ url, json: true }, (error, response) => {
  if (error) {
    console.log("ERROR HAS OCCURED");
  } else if (response.body.error) {
    console.log(response.body.error.message);
  } else {
    app.get("/weather", (req, res) => {
      res.render("weather", {
        name: response.body.location.name,
        lat: response.body.location.lat,
        lon: response.body.location.lon,
        current: response.body.current.condition.text,
        temp: response.body.current.temp_c,
      });
    });
  }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
