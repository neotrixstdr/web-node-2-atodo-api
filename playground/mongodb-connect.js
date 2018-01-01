// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'Jose', age: 42};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, database) => {
	if( err) {
	return	console.log('No se ha podido conectar a MongoDB');
	}
	const myAwesomeDB = database.db('TodoApp');
	console.log('Conexion correcta');


	// myAwesomeDB.collection('Todos').insertOne( {
	// 	text: 'Algo que insertamos',
	// 	completed: false
	// }, (err,result) => {
	// 	if(err) {
	// 	  return console.log('Unable to insert todo', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined,2));
	// });

// 	myAwesomeDB.collection('Users').insertOne( {
// 		name: 'Juan',
// 		age: 43,
// 		location: 'Castro'
// 	}, (err,result) => {
// 		if(err) {
// 			return console.log('Unable to insert todo', err);
// 		}
// 		console.log(JSON.stringify(result.ops, undefined,2));
// 		console.log(result.ops[0]._id.getTimestamp());
// 	});
//
 	database.close();

 });