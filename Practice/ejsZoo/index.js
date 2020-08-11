const express = require("express");
const zoo = require("./zoo");

const app = express();

app.get("/", (req, res) => {
    res.send("I am the Root route");
});

app.get("/home", (req, res) => {
    // res.send("I am the home page")
    res.render("home.ejs", {
        zoo: zoo,
    });
});

app.get("/about", (req, res) => {
    res.render("about.ejs", {
        zoo: zoo,
    });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`app listening at port ${PORT}`);
});
