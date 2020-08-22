const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");

const app = express();

app.use(logger("dev"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

let toDoArray = [
	{
		id: 1,
		description: "Call mom",
		isComplete: false,
	},
	{
		id: 2,
		description: "Buy groceries",
		isComplete: false,
	},
	{
		id: 3,
		description: "Go to movies",
		isComplete: false,
	},
];
// new todo starter number
let count = 4;
// HOME ROUTE
app.get("/", (req, res) => {
	res.send("<h1>Home</h1>");
});

// READ
app.get("/todos", (req, res) => {
	res.json(toDoArray);
});

// CREATE
app.post("/todos", (req, res) => {
	let newTodo = {
		id: count++,
		description: req.body.description,
		isComplete: false,
	};
	toDoArray.push(newTodo);
	res.status(201).json(newTodo);
});

// PUT
app.put("/todos/:todoid", (req, res) => {
	let requestedToDoId = parseInt(req.params.todoid);
	let requestedToDo = toDoArray.find((todo) => {
		return (todo.id = requestedToDoId);
	});
	// toggle the completion status
	requestedToDo.isComplete = !requestedToDo.isComplete;
	res.status(201).json(requestedToDo);
});

// DELETE
app.delete("/todos/:todoid", (req, res) => {
	let requestedToDoId = parseInt(req.params.todoid);
	let requestedToDo = toDoArray.find((todo) => {
		return (todo.id = requestedToDoId);
	});
	let indexOfRequestedToDo = toDoArray.indexOf(requestedToDo)
	// delete the requestedTodo from todoArray
	toDoArray.splice(indexOfRequestedToDo,1)
	res.status(201).json(requestedToDo);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`App is listening on PORT ${PORT}.`);
});
