# MongoDB related questions. 

For testing these questions you may use your local mongo instance (remember to run it with the command `mongod`),
or use the class server. 

To access the class server, you may run the command

`mongo pgdb.accsoftwarebootcamp.com:27017/INSERT_YOUR_FIRST_NAME_AS_DB_NAME_HERE`

Or access the database using your Robo3T client using the following settings (all other settings are default):

<img src="images/mongodb_connect.png" width="50%">

## Question A:

Suppose you run the following code on a MongoDB database

    use INSERT_YOUR_FIRST_NAME_AS_DB_NAME_HERE
    db.animals.insert( { type : ['dog', 'cat'] } );
    db.animals.insert( { type :  ['cat'] } );
    db.animals.insert( { type : ['cow'] } );
    db.animals.insert( { egg: ['duck', 'hen', 'ostrich']  } );

On the data written above, write a mongo query that would return unique 
values of each of the keys
	- type, 
    - egg, 
    - hello // non existent


## Question B:

In the above database, how would you count the number of mongo documents which contain a type "cat".

