const express = require("express");

const fetch = require("node-fetch");

const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
	res.render("index.ejs");
});

// use get method
app.get("/getPrice", (req, res) => {
	// fetch from coindesk
	fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
		.then(response => {
			if (!response) {
				throw Error("no response");
			}
			return response.json();
		})
		.then(data => {
			let currency = req.query.currency.toUpperCase();
			let unit = data.bpi[currency].symbol;
			let price = data.bpi[currency].rate_float.toFixed(2);
			res.render("price.ejs", {
				price: price,
				unit: unit,
			});
		});
});

// use post method for the same result
app.post("/getPrice", (req, res) => {
	// fetch from coindesk
	fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
		.then(response => {
			if (!response) {
				throw Error("no response");
			}
			return response.json();
		})
		.then(data => {
			let currency = req.body.currency.toUpperCase();
			let unit = data.bpi[currency].symbol;
			let price = data.bpi[currency].rate_float.toFixed(2);
			res.render("price.ejs", {
				price: price,
				unit: unit,
			});
		});
});
