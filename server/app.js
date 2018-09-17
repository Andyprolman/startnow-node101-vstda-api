const express = require('express');
const morgan = require('morgan');


const app = express();
app.use(express.json());

// add your code here

var mockData = [
    {
        todoItemId: 0,
        name: 'an item',
        priority: 3,
        completed: false
    },
    {
        todoItemId: 1,
        name: 'another item',
        priority: 2,
        completed: false
    },
    {
        todoItemId: 2,
        name: 'a done item',
        priority: 1,
        completed: true
    }
];

app.get('/', (req, res) => {
    // write your code to respond "ok" here
    res.status(200);
    res.send(
        {
            'status': 'ok'
        }
    )
        
    
});

app.get('/api/TodoItems', (req, res) =>{
    res.status(200,);
    res.send(mockData);
    
})

app.get('/api/TodoItems/:number', (req, res) =>{
    res.status(200);
    var id = req.url.replace('/api/TodoItems/', '');
    //console.log('ID: ', id);
    res.send(mockData[id]);
})

app.post('/api/TodoItems/', (req, res) => {
    res.status(201);
    //console.log('request: ', req.body);
    var id = req.body.todoItemId;
    //console.log('ID: ', id);
    var name = req.body.name;
    var priority = req.body.priority;
    var completed = req.body.completed;
    var item = {
        'todoItemId': id,
        'name': name,
        'priority': priority,
        'completed':completed
    }
    console.log('hello');
    for(let i=0;i<mockData.length;i++){
        console.log('mock data: ', mockData[i].todoItemId)
        if(id !== mockData[i].todoItemId){
            mockData.push(item);
            
        }
       
    }
    res.send(item);
    
})

app.delete('/api/TodoItems/:number', (req, res) => {
    res.status(200);
    var id = req.url.replace('/api/TodoItems/', '');
    //console.log('ID: ', id);
    mockData.pop(mockData[id]);
    res.send(mockData[id]);

})

module.exports = app;
