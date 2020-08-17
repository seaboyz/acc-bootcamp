// api-key="8BT8k-FYrDshPKS83vxnYh97A4nXl1xG7BHfvY01mFY-UNYVY-qsKTqTjhu0dZg7VJtPw85JqWoak759-tIC7FyuXAEraAY0VDoC2OYvuH36HDGGi1nYrxN-y9M5X3Yx"
const express = require("express");
const app = express();
const yelp = require("yelp-fusion");
const client = yelp.client(
    "8BT8k-FYrDshPKS83vxnYh97A4nXl1xG7BHfvY01mFY-UNYVY-qsKTqTjhu0dZg7VJtPw85JqWoak759-tIC7FyuXAEraAY0VDoC2OYvuH36HDGGi1nYrxN-y9M5X3Yx"
);

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home.ejs");
});
app.get("/searchresults", (req, res) => {
    location = req.query.location;
    client
        .search({
            location: location,
        })
        .then(response => {
            data = response.jsonBody.businesses;
            res.render("searchresults.ejs", {
                data: data,
            });
        })
        .catch(e => {
            console.log(e);
        });
});

const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log(`App is listening on PORT ${PORT}.`);
});
