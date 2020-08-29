const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3000;

// Connection
mongoose
	.connect("mongodb://localhost:27017/qg_cookie_shop", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Mongodb is running");
	});

let cookieSchema = new mongoose.Schema({
	type: String,
	price: Number,
	tasty: Boolean,
});

let CookieModel = mongoose.model("cookie", cookieSchema);

CookieModel.create(
	{
		name: "Chocolate chip",
		price: 1.99,
		tasty: true,
	},
	(error, result) => {
		error
			? console.log("Error: ", error)
			: console.log("Here is your new user:", result);
	}
);
CookieModel.create(
	{
		name: "Raisin",
		price: 2.49,
		tasty: false,
	},
	(error, result) => {
		error
			? console.log("Error: ", error)
			: console.log("Here is your new user:", result);
	}
);

app.listen(() => {
	`App is listning on port ${PORT}`;
});

var Cookie = new CookieModel({
	name: "Sugar",
	price: 1.99,
	tasty: "d",
});

Cookie.save((error, result) => {
	error
		? console.log("Error:", error)
		: console.log("Here is your new user: ", result);
});
