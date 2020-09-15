const pgdb = require("pgdb");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");

const app = express();

app.use(logger("dev"));

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

// CALL BACK

// client
// 	.connect()
// 	.then(() => console.log("Connected successfully"))
// 	.then(() => client.query("SELECT * FROM users"))
// 	.then(results => console.table(results.rows))
// 	.catch(err => console.log(err))
// 	.finally(() => client.end());

// // ASYNC AWAIT

// (async () => {
// 	try {
// 		await client.connect();
// 		console.log("Conneted successfully.");
// 		// destructuring
// 		const {rows} = await client.query("SELECT * FROM users");
// 		// const results = await client.query("SELECT * FROM users");
// 		console.table(rows);
// 		// console.table(results.rows);

// 	} catch (err) {
// 		console.log("Somthing wrong happend", err);
// 	} finally {
// 		await client.end();
// 		console.log("Client discunnected successfully.");
// 	}
// })();

// TRANSACTION

(async () => {
	try {
		await client.connect();
		await client.query("BEGIN");
		await client.query("INSERT INTO exployees");
		console.log("Inserted a new row");
		await client.query("COMMIT");
	} catch (err) {
		console.log("Failed to execute someth,", err);
		await client.query("ROLLBACK");
	} finally {
		await client.end();
		console.log("Cleaned");
	}
})();

// // database url
// // "todo_list" is the name of the database
// const db = "todo_list";
// const url = `mongodb://localhost:27017/${db}`;

// // connection
// // when conntect url succeffuly, mongodb create a database call "todo_list"
// mongoose
// 	// connect to url
// 	.connect(url, {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 		useFindAndModify: false,
// 	})

// 	// if connection to database is successfull
// 	.then(() => console.log(`Connected to ${db} database`))

// 	// if connection to database is wrong
// 	.catch(() => console.log(`Error connecting to ${db} database `, error));

// // defining schema
// let Schema = mongoose.Schema;

// let todoSchema = new Schema({
// 	description: {
// 		type: String, // "String" is the shorthand of "type: String"
// 		// validation set description field must have a string value
// 		required: [true, "Must have a description"],
// 	},
// 	isComplete: {
// 		type: Boolean,
// 		// setup the default value for isComplete field
// 		default: false,
// 	},
// 	createdAt: {
// 		type: Date,
// 		default: Date.now,
// 	},
// });
// // create model
// // when create a mongoose model, mongo creates a collection called todos
// // let TodoModel = mongoose.model("todos", todoSchema);
// // a altertive way create a model, the mongoose will convert "Todo" to "todos" as collection name

// let TodoModel = mongoose.model("Todo", todoSchema);

// // HOME ROUTE
// app.get("/", (req, res) => {
// 	res.send("<h1>Home</h1>");
// });

// // CRUD
// // CREATE
// // recieve data from cliet using post request
// app.post("/todos", (req, res) => {
// 	// create a document using the input as the the description field value
// 	let newTodo = new TodoModel({
// 		description: req.body.description,
// 	});
// 	// save data to database
// 	newTodo.save((error, results) => {
// 		if (error) {
// 			console.log("There was an error saving to db");
// 		} else {
// 			console.log("Data is suceessfully saved:", results);
// 			// if save data to database, then
// 			// send data to client
// 			res.status(201).json(newTodo);
// 		}
// 	});
// });

// // READ
// // when there is get request from client's ajax
// app.get("/todos", (req, res) => {
// 	// request data from database
// 	TodoModel.find({}, (error, results) => {
// 		// if can not receive data from database
// 		if (error) {
// 			console.log("Error finding documents from database: ", error);
// 			// receive data from database
// 		} else {
// 			// send data to client ajax
// 			console.log(results);
// 			console.table(results);
// 			res.json(results);
// 		}
// 	});
// });

// // Update
// // recieve put request from client
// app.put("/todos/:todoid", (req, res) => {
// 	// recieve id from url
// 	let id = req.params.todoid;
// 	// use id to find the document
// 	TodoModel.findById(id, (error, result) => {
// 		if (error) {
// 			console.log("Error finding documents from database: ", error);
// 			// receive data from database
// 		} else {
// 			// toggole isComplete field's boolean value
// 			result.isComplete = !result.isComplete;
// 			// save result to server
// 			result.save((error, resultAfterSave) => {
// 				if (error) {
// 					console.log("There was an error saving to db");
// 				} else {
// 					console.log("Data is suceessfully saved:", result);
// 					// if save data to database, then
// 					// get the result from the sever and send it to client
// 					// ?? is the
// 					res.status(201).json(resultAfterSave);
// 				}
// 			});
// 		}
// 	});
// });

// // DELETE
// // when recieve delete request from client
// app.delete("/todos/:todoid", (req, res) => {
// 	let id = req.params.todoid;
// 	// send delete request to database with id
// 	TodoModel.findByIdAndDelete(id, (error, result) => {
// 		if (error) {
// 			console.log("Error finding documents from database: ", error);
// 			// receive data from database
// 		} else {
// 			// send result to client
// 			// ??? could we just send the key instead of sending the whole information about the user ???
// 			console.log(result);
// 			res.status(201).json(result);
// 		}
// 	});
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
// 	console.log(`App is listening on PORT ${PORT}.`);
// });
