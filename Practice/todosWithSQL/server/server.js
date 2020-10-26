// THIS CODE RUNS ON THE SERVER VIA NODEJS
var express = require('express')
var app = express()
var debug = require('debug')('apiserver:server')

var cors = require('cors')
app.use(cors())

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// this loads the index.html from ../client folder
// and exposes everything within the folder to any browser
// app.use(express.static('../client'))
app.use(express.static('client'))

var port = process.env.PORT || 3000

const { Client } = require('pg');

let connectionObject = {
    host : "pgdb.accsoftwarebootcamp.com",
    database : "accsoftwarebootcamp",
    port : 5432,
    user : "acc",
    password : "accrocks"
 }

 const client = new Client(connectionObject);

 client.connect()
   .then(function() {
       console.log(`PG Connected to ${client.database} dB`);
   })
   .catch(function(err) {
       console.log('PG Connection error', err.stack)
   });

// READ - GET
app.get('/todos', (req, res) => {
    let query =`SELECT id as _id,
                        description,
                        iscomplete AS "isComplete"
                FROM todos.todos
                ORDER BY todos.id;`
    client.query(query, function(err, todos) {
        if(err) {
            console.log('Error: ', err);
            res.status(400).send({code: 1234, message: 'Error: ' + err});
        };
        // console.log(todos.rows);
        res.send(todos.rows);
    })
});


// READ - GET
app.get('/v1/contacts/:id', (req, res) => {
    let contact_id = req.params.id;
    
    let query =`SELECT * 
                FROM hmap.contacts
                WHERE contact_id = ${contact_id};`

    client.query(query, function(err, todos) {
        if(err) {
            console.log('Error: ', err);
            res.status(400).send({code: 1234, message: 'Error: ' + err});
        };
        // console.log(todos.rows);
        res.send(todos.rows);
    })
});

// READ - GET
app.get('/v1/contacts', (req, res) => {    // curl localhost:3000/v1/contacts?zipcode=78717&state=TX&country=US
    let query =`SELECT id as _id,
                        description,
                        iscomplete AS "isComplete"
                FROM todos.todos
                ORDER BY todos.id;`
    let zipcode = req.query.zipcode;
    client.query(query, function(err, todos) {
        if(err) {
            console.log('Error: ', err);
            res.status(400).send({code: 1234, message: 'Error: ' + err});
        };
        // console.log(todos.rows);
        res.send(todos.rows);
    })
});

// CREATE - POST
app.post('/todos', function(req, res){
    let newDescription = req.body.description;
    // the empty todo test should be done on the
    // client.  however the following makes sure
    // just in case the client is not doing it.
    if(!newDescription) {
        res.status(411).send({code: 123455, message: 'Empty todo received'})
     };
    let query = `INSERT INTO todos.todos
                        (description, iscomplete, user_id)
                VALUES ('${newDescription}', false, 2)
                RETURNING id AS _id, description, iscomplete`;
    // in the following callback function, todo represents
    // what was sent back by executing the above query 
    // It is what the RETURNING clause sends back
    client.query(query, function(err, todo){
        if(err) {
            console.log('Error: ', err);
            res.status(400).send({code: 1239, message: 'Insert Error: ' + err});
        };
        debug('Returned todo: ', todo.rows[0]);
        // there should be only one row returned
        // however it would come as an array, so need
        // to pick out the array member from the single member array
        // using [0]
        res.send(todo.rows[0]);
    })
})

// UPDATE - PUT
app.put('/todos/:id', function(req, res) {
    let query = `UPDATE todos.todos
                    SET iscomplete =  NOT iscomplete
                WHERE id = ${req.params.id} RETURNING *`;
    client.query(query, function(err, result) {
        if (err) {
            console.error(err.stack)
            res.end();
        } else {
            debug('Updated iscomplete for', result);
            res.send(result.rows);
        }
    });
 });
 
// DELETE -- NEEDS REFACTORING FOR MONGOOSE

app.delete('/todos/:todoid', function(req, res){
    query = `DELETE FROM todos.todos
                WHERE todos.id = ${req.params.todoid}`;
    client.query(query, function(err, result) {
        if(err) {
            console.log(err.stack);
            res.end();
        }
        debug('Item has been deleted from dB');
        res.send();
    });   
 })
 
app.listen(port, function(){
    console.log(`Started ToDo API on port ${port}`)
})
