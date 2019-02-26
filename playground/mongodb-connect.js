//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    /*db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to intser todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    

    db.collection('Users').insertOne({
        name: 'Keith',
        age: 20,
        location: 'room1'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to intser user', err);
        }

        console.log(JSON.stringify(result.ops[0]._id.getTimestapm()));
    });
*/

    client.close();
});