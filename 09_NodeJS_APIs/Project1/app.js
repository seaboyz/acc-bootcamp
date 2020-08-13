const express = require("express");

const fetch = require("node-fetch");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/getPrice", (req, res) => {
    // fetch from coindesk
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then(response => {
            if(!response){
                throw Error("no response")
            }
            return response.json()
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
