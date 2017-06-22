const express = require('express');
const mustache = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const todoList = require('./public/todoList.json');
const fs = require('file-system');

const application = express();
const filePath = './public/todoList.json';

application.engine('mustache', mustache());
application.set('views', './views');
application.set('view engine', 'mustache');

application.use(bodyParser.urlencoded());
application.use(expressValidator());

application.use(express.static(__dirname + '/public'));

application.get('/', (request, response) => {
    response.render('todo-list', todoList);
});

application.post('/', (request, response) => {
    todoList.incomplete.push(request.body.listItemAdd);
    response.render('todo-list', todoList); 
    var todoJSON = JSON.stringify(todoList);
    fs.writeFile(filePath, todoJSON, function(err) {});
});

application.post('/:item', (request, response) => {
    var item = todoList.incomplete.find(item => {return todoList.incomplete});
    todoList.incomplete.splice(item, 1);
    todoList.completed.push(item);
    
    var todoJSON = JSON.stringify(todoList);
    fs.writeFile(filePath, todoJSON, function(err) {});
    response.render('todo-list', todoList);
})
application.listen(3000);