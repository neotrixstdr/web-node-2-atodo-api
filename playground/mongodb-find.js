const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, database) => {
	if( err) {
		return	console.log('No se ha podido conectar a MongoDB');
	}
	const miBasedeDatos = database.db('TodoApp');
	console.log('Conexion correcta');

	// miBasedeDatos.collection('Users').find( {
	// 	_id:  new ObjectID('5a43baa800c3332b784f82c6')
	// 	}).toArray().then((docs) => {
	// 	console.log('Users');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('No se puede encontrar', err);
	// });

	miBasedeDatos.collection('Users').find( {
		location: 'Castro'
	}).count().then((count) => {
		console.log(`Numero Usuarios ${count}`);
	}, (err) => {
		console.log('No se puede encontrar', err);
	});

	//database.close();

});