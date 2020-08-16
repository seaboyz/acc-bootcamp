// Build the server

const express = require("express");
const fetch = require("node-fetch");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/movies", (req, res) => {
    let apiKey = "63d5f79a61420a0b42c8ff17e773e009";
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;
    fetch(url)
        .then(response => {
            if (!response) {
                throw Error("no response");
            }
            return response.json();
        })
        .then(data => {
            let results = data.results;
            console.log(results);
            res.render("movies.ejs", {results: results});
        })
        .then(error=>{
            console.error("Error form network: ", error);
            res.render("error.ejs")
        });
});
// api www.themoviedb.org/

// route listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}.`);
});
