// FEEDBACK - Definitely could have used more comments such as 
// what is happening in each of the .then() and why.
// Links do not work on your results.ejs -once a user makes a choice
// they are stuck on results page. How do they get back to make another selection?
// lastly, you are handling the error BUT what happens when there is an error?
// You are rendering the error page BUT this actually fails becuase it is 
// expecting a value called message which you are not using so your app will break.

// SCORE - 28pts

// require needed modules
const express = require("express");
const fetch = require("node-fetch");

const PORT = process.env.PORT || 3000;

const app = express();

// render home page
app.get("/", function (req, res) {
	res.render("home.ejs");
});

// render results
app.get("/results", function (req, res) {
	// fill out the code here which calls the Star Wars api end point

	// gets the data and then renders the results.ejs page.

	// also remember to handle the errors if any

	// you may have to use request or axios or any of the http modules
	// to make the call to the sw api.
	let endpoint = "https://swapi.dev/api/people/";
	let number = req.query.number;
	let url = `${endpoint}${number}`;

	// use fetch api to get the the starwar character information
	fetch(url)
		.then(response => {
			if (!response) throw Error("No response from SWAPI API");
			return response.json();
		})
		.then(data => {
			res.render("results.ejs", { data: data });
		})
		.catch(err => {
			res.render("error.ejs");
			console.log(err);
		});
});

app.listen(PORT, function () {
	console.log(`Star Wars backend running on port ${PORT}.`);
});
