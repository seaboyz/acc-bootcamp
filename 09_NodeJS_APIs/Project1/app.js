const express = require("express");

const bodyParser = require("body-parser");

const fetch = require("node-fetch");

const app = express();

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/", (req, res) => {
    let currency = req.body.currency.toUpperCase();
    // fetch from coindesk
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((res) => res.json())
        .then((data) => {
            let unit = data.bpi[currency].symbol;
            let price = data.bpi[currency].rate_float.toFixed(2);
            res.render("price.ejs", {
                price: price,
                unit: unit,
            });
        });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
