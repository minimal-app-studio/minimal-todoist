const express = require('express');
const server = express();
const cors = require('cors');

server.get('/healthcheck', (req,res) => {
    res.status(200).send("app is up and running")
})


server.use(cors());

const todos = [];

server.post('/todos', (req,res) => {
    const todoItem = req.query.todo;
    todos.push(todoItem);
    res.status(200).json({
        status: "success"
    })
});


server.get("/todos", (req,res) => {
    res.status(200).json({
        status: "success",
        todos: todos
    })
})


server.listen(3000, () => {
    console.log('server running on port 3000');
})
