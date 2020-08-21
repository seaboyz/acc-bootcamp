const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

let newTodo = {
	id: 4,
	description: "Buy more stuff",
	isComplete: "false",
};

app.get("/", (req, res) => {
	res.send("<h1>Home</h1>");
});
app.get("/todos", (req, res) => {
	res.json(toDoArray);
});

app.post("/todos", (req, res) => {
	toDoArray.push(newTodo);
	res.status(201).json(newTodo);
});

app.delete("/todos/:todoid", (req, res) => {
	let id = parseInt(req.params.todoid);
	toDoArray = toDoArray.filter((todo) => todo.id !== id);
	res.status(201).json(toDoArray);
});

app.put("/todos/:todoid", (req, res) => {
	let idRequested = parseInt(req.params.todoid);
	toDoArray.forEach((todo) => {
		if (todo.id===idRequested) {
			todo.isComplete = !todo.isComplete;
		}
	});

	res.status(201).json(toDoArray);
});

// app.delete("/todos/:id", (req, res) => {
// 	let id = req.params.id
// 	console.log(id)
// 	// let index = toDoArray.indexOf(newTodo);
// 	// 	toDoArray.splice(index, 1);
// 	// res.redirect("/");
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`App is listening on PORT ${PORT}.`);
});
