const express = require("express");
const app = express();

const mongoose = require("mongoose");

const casual = require("casual");

const PORT = process.env.PORT || 3000;

const url = "mongodb://localhost:27017/clients";

mongoose
	.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(function () {
		console.log("Connected to database");
	})
	.catch(function (err) {
		console.log(err);
		mongoose.disconnect();
	});

const customerSchema = new mongoose.Schema({
	fName: String,
	lName: String,
	phone: String,
});

const customerModel = mongoose.model("customers", customerSchema);

app.get("/", function (req, res) {
	res.render("index.ejs");
});

app.get("/createPage", function (req, res) {
	res.render("createPage.ejs");
});

app.get("/createData", function (req, res) {
	customerModel.create(
		{
			fName: casual.first_name,
			lName: casual.last_name,
			phone: casual.phone,
		},
		function (err, customer) {
			console.log(customer);
            err 
            ? console.log(err) 
            : res.render("results.ejs", { data: customer });
		}
	);
});

app.get("/readPage", function (req, res) {
	customerModel.find({}, function (err, customers) {
		err ? console.log(err) : res.render("readPage.ejs", { data: customers });
	});
});

app.listen(PORT, function () {
	console.log(`App is listening to PORT ${PORT}`);
});
