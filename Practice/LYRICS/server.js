const express = require("express");
const fetch = require("node-fetch");
const { response } = require("express");

const app = express();

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/lyricResults", (req, res) => {
    // console.log(req.query.artist)
    let artist = req.query.artist;
    let title = req.query.title;
    let url = `https://api.lyrics.ovh/v1/${artist}/${title}`;

    fetch(url)
        .then(response => {
            if (!response) {
                throw Error("no response");
            }
            return response.json();
        })
        .then(data => {
            let lyrics = data.lyrics;
            res.render("lyricResults.ejs", { lyrics: lyrics });
        })
        .watch();

    res.render("lyricResults.ejs");
});

PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
