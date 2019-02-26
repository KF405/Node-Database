const {objectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/users');

var id = '5c6da253ebb303510890c50e';

User.findById(id).then((users) => {
    if (!users) {
        return console.log('ID not found');
    }
    console.log('Users by Id', users);
}).catch((e) => console.log(e));




/*
var id = '5c7406e049edee46c8b7fe87';

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
}

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('ID not found');
    }
    console.log('Todo by Id', todo);
}).catch((e) => console.log(e));
*/