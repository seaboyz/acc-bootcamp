const express = require("express");
const request = require("request");
const fetch = require("node-fetch");
const app = express();

app.get("/", (req, res) => {
	res.render("home.ejs");
});

app.get("/results", (req, res) => {
	let location = req.query.cityName;

	let endpoint = "https://www.metaweather.com/api/location/search/";

	let url = `${endpoint}?query=${location}`;
	// use fetch api to get woeid of the input city name
	fetch(url)
		.then(response => {
			if (!response) throw Error("No Response From metaweather!");
			return response.json();
		})
		.then(data => {
			let woeid = data[0].woeid;
			let endpoint = "https://www.metaweather.com/api/location/";
			let url = `${endpoint}${woeid}`;
			// use request module do a second request to get the weather data of the woeid
			request(url, function (error, response, body) {
				if (!error && response.statusCode == 200) {
					let data = JSON.parse(body);
					res.render("results.ejs", { data: data, location: location });
				}
			});
		})
		.catch(err => console.log(err));
});

const PORT = process.env.POST || 3000;

app.listen(PORT, () => {
	console.log(`App is listening on PORT ${PORT}.`);
});
