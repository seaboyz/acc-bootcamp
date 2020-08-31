const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
	.connect("mongodb://localhost:27017/app_users", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Mongo db is running."));

let userSchema = new mongoose.Schema({
	name: String,
	age: Number,
	favorite_pizza: String,
	created: { type: Date, default:Date.now },
	member: { type: Boolean, required: true },
});

let UserModel = mongoose.model("User", userSchema);

// UserModel.create(
// 	{
// 		name: "Nancy",
// 		age: 22,
// 		favorite_pizza: "pepperroni",
// 	},
// 	(error, result) => {
// 		error
// 			? console.log("Error:", error)
//             : console.log("Here is your new user: ", result);
//         mongoose.disconnect()
// 	}
// );

UserModel.create(
	{
		name: "Tommy",
		favorite_pizza: "veggie pizzas",
		member: true,
	},
	(error, result) => {
		error
			? console.log("Error:", error)
			: console.log("Here is your new user:", result);
		mongoose.disconnect();
	}
);
