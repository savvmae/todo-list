const express = require('express');
const mustache = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');


const application = express();

application.engine('mustache', mustache());
application.set('views', './views');
application.set('view engine', 'mustache');



application.use(bodyParser.urlencoded());
application.use(expressValidator());


application.use(express.static(__dirname + '/public'));

var todoList = {
incomplete : ["task"],
completed : []
};



application.get('/', (request, response) => {
    response.render('todo-list', todoList);
});

application.post('/', (request, response) => {
    todoList.incomplete.push(request.body.listItemAdd);
    response.render('todo-list', todoList); 
});

application.post('/:item', (request, response) => {
    var item = todoList.incomplete.find(item => {return todoList.incomplete});
    var itemIndex = todoList.incomplete.find(itemIndex => {return todoList.incomplete.indexOf(itemIndex)});
    todoList.incomplete.splice(item, 1);
    todoList.completed.push(item);
    //find item
    //make changes
    

    //response - redirect

    response.render('todo-list', todoList);
})
application.listen(3000);