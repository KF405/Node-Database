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

    //delete Many
    /*
    db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
        console.log(result);
    });
    */

    //delete One
    /*
    db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
        console.log(result);
    });
    */

    //find one and delete
    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    });

   // client.close();
});