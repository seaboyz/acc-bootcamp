const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");

const app = express();

app.use(logger("dev"));

app.use(express.static("../client"))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());


// geting started with pg
const { Client } = require("pg");
const client = new Client({
	user: "acc",
	password: "accrocks",
	host: "pgdb.accsoftwarebootcamp.com", //host instead of hostname
	database: "accsoftwarebootcamp",
	port: 5432,
});

client
	.connect()
	.then(() =>
		console.log(`Connected to ${client.database} on port ${client.port}`)
	)
	.catch(err => console.log(`Error connecting: ${err.stack}`));

// Use home route to load the index.html
app.get("/", (req, res) => {
	// res.send(`This is the Todos API running on PORT ${PORT}.`);
	res.render("index.html");
});

// CRUD
// CREATE
// recieve data from cliet using post request
app.post("/todos", (req, res) => {
	// create a document using the input as the the description field value
	let description = req.body.description;
	let query = `
			INSERT INTO todos.todos 
				(description, iscomplete, user_id)
			VALUES
				('${description}', false, 8)
			RETURNING id as _id, *;
		`;
	client
		.query(query)
		.then(function (data) {
			res.json(data.rows[0]);
		})
		.catch(function (err) {
			res.json({ code: 400, message: err.stack, err });
		});
});

// READ
// when there is get request from client's ajax
app.get("/todos", (req, res) => {
	// request data from database
	let query = `
			SELECT id as _id, * 
			FROM todos.todos
			WHERE user_id = 8;
		`;

	client.query(query, (err, data) => {
		if (err) {
			res.status(400).send({ status: 400, error: err });
		}
		res.status(200).send(data.rows);
	});
});

// // Update
// // recieve put request from client
app.put("/todos/:todoid", (req, res) => {
	// recieve id from url
	let id = parseInt(req.params.todoid);
	// use id to find the row
	let query = `
			UPDATE todos.todos
			SET iscomplete = NOT iscomplete
			WHERE id = ${id}
			RETURNING id as _id, *;
		`;
	client.query(query, (err, data) => {
		if (err) {
			res.status(400).send({ status: 400, error: err });
		}
		res.status(200).send(data.rows[0]);
	});
});

// DELETE
// when recieve delete request from client
app.delete("/todos/:todoid", (req, res) => {
	let id = parseInt(req.params.todoid);
	let query = `
			DELETE FROM todos.todos
			WHERE id = ${id}
			RETURNING id as _id, *;
		`;
	client
		.query(query)
		.then(function (data) {
			res.send(data.rows[0]);
		})
		.catch(function (err) {
			res.json({ code: 400, message: err.stack, err });
		});
});
//

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`App is listening on PORT ${PORT}.`);
});
