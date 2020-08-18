const express = require("express");
const request = require("request");
const app = express();

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/results", (req, res) => {
    let location = "san francisco";
    let endpoint = "https://www.metaweather.com/api/location/search/";
    let url = `${endpoint}?query=${location}`;

    request(url, function (error, response, body) {
        let woeid = JSON.parse(body)[0].woeid
        // let woeid = response.woeid;
        /* let url = `https://www.metaweather.com/api/location/${woeid}/`;
        request(url, function (error, response, body) {
            console.log(response);
        }); */
        // console.log(woeid);
        res.render("results.ejs");
    });
});

const PORT = process.env.POST || 3000;

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}.`);
});
