const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logger = require("morgan");
const cors = require("cors");

const app = express();

app.use(logger("dev"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

// Connection
const db = "todo_list";
const url = `mongodb://localhost:27017/${db}`;

mongoose
	.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then(() => console.log(`Connected to ${db} database`))
	.catch(() => console.log(`Error connecting to ${db} database `, error));

// BluePrints
let todoSchema = new mongoose.Schema({
	description: {
		type: String,
		required: [true, "Must have a description"],
	},
	isComplete: {
		type: Boolean,
		default: false,
	},
});

let TodoModel = mongoose.model("todos", todoSchema);

// HOME ROUTE
app.get("/", (req, res) => {
	res.send("<h1>Home</h1>");
});

// CREATE
// recieve data from cliet using post request
app.post("/todos", (req, res) => {
	let newTodo = new TodoModel({
		description: req.body.description,
	});
	// save data to database
	newTodo.save((error, results) => {
		if (error) {
			console.log("There was an error saving to db");
		} else {
			console.log("Data is suceessfully saved:", results);
			// if save data to database, then
			// send data to client
			res.status(201).json(newTodo);
		}
	});
});

// READ
// when there is get request from client
app.get("/todos", (req, res) => {
	// request data from database
	TodoModel.find({}, (error, results) => {
		// if can not receive data from database
		if (error) {
			console.log("Error finding documents from database: ", error);
			// receive data from database
		} else {
			// send data to client
			res.json(results);
		}
	});
});

// Update
// recieve put request from client
app.put("/todos/:todoid", (req, res) => {
	// recieve id from url
	let requestedToDoId = req.params.todoid;
	TodoModel.findById(requestedToDoId, (error, result) => {
		if (error) {
			console.log("Error finding documents from database: ", error);
			// receive data from database
		} else {
			// toggole isComplete field
			result.isComplete = !result.isComplete;
			// save result to server
			result.save((error, result) => {
				if (error) {
					console.log("There was an error saving to db");
				} else {
					console.log("Data is suceessfully saved:", result);
					// if save data to database, then
					// send data to client
					res.status(201).json(result);
				}
			});
		}
	});
});

// DELETE
app.delete("/todos/:todoid", (req, res) => {
	let requestedToDoId = req.params.todoid;
	// send delete request to database
	TodoModel.findByIdAndDelete(requestedToDoId, (error, result) => {
		if (error) {
			console.log("Error finding documents from database: ", error);
			// receive data from database
		} else {
			// send result to client
			res.status(201).json(result);
		}
	});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`App is listening on PORT ${PORT}.`);
});
