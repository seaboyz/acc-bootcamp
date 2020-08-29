const express = require("express");
const mongoose = require("mongoose");

const app = express();

//  Connection
mongoose
	.connect("mongodb://localhost:27017/qiang", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Mongo db is runing."));

// BluePrints
// Schema and model
let userSchema = new mongoose.Schema({
	name: String,
	age: Number,
	email: String,
});

let UserModel = mongoose.model("User", userSchema);

// // var User = new UserModel({
// // 	name: "Kramer",
// // 	age: 47,
// // 	email: "jerryseinfeld@gmail.com",
// // });

// var User = new UserModel({
//     name:"Kramer",
//     age:47,
//     emial:"cosmoKramer@gmial.com"
// })

// // Write a queries
// User.save(function (error, result) {
// 	if (error) {
// 		console.log("There was an error saving to db");
// 	}else {
//         console.log("Data suceessfully save:", result);
//     }
// });

UserModel.create(
	{
		name: "Elaine",
		age: 39,
		email: "ElaineBenes@gmail.com",
	},
	(error, result) => {
		error
			? console.log("Error;", error)
			: console.log("Here is your new user: ", result);
	}
);

app.get("/", (req, res) => {
	res.send("hello world.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`App is listening on port ${PORT}`);
});
