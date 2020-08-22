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
		isComplete: "false",
	},
	{
		id: 2,
		description: "Buy groceries",
		isComplete: "false",
	},
	{
		id: 3,
		description: "Go to movies",
		isComplete: "false",
	},
];
let count = 4;

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
		isComplete: "false",
	};
	toDoArray.push(newTodo);
	res.status(201).json(newTodo);
});
// DELETE

app.delete("/todos/:todoid", (req, res) => {
	let id = parseInt(req.params.todoid);
	toDoArray = toDoArray.filter((todo) => todo.id !== id);
	res.status(201).json(toDoArray);
});

app.put("/todos/:todoid", (req, res) => {
	let idRequested = parseInt(req.params.todoid);
	toDoArray.forEach((todo) => {
		if (todo.id === idRequested) {
			todo.isComplete = !todo.isComplete;
		}
	});

	res.status(201).json(toDoArray);
});

app.delete("/todos/:id", (req, res) => {
	let id = req.params.id;
	console.log(id);
	let index = toDoArray.indexOf(newTodo);
	toDoArray.splice(index, 1);
	res.status(201).json(toDoArray);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`App is listening on PORT ${PORT}.`);
});
