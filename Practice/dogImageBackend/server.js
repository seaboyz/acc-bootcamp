const express = require("express");
const fetch = require("node-fetch");

const app = express();

app.use(express.static("public"))

let defaultImage = "https://images.dog.ceo/breeds/pyrenees/n02111500_7655.jpg";
let url = "https://dog.ceo/api/breeds/image/random";

app.get("/", (req, res) => {
    res.render("index.ejs", { image: defaultImage });
});

app.get("/getImage", (req, res) => {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw Error("NOT WORKING");
            }
            return response.json();
        })
        .then(data => {
            let image = data.message;
            res.render("index.ejs", { image: image });
        })
        .catch(err => {
            console.error("Error connecting: ", err);
            res.end();
        });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
