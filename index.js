const env = require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

const PORT = process.env.PORT || 5000


// middlewares

app.use(cors());


app.use(express.json());


// Routes

// Create todo

app.post("/todos", async(req, res) => {
    try {
        const { description } =  req.body;

        const newTodo = await  pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *",
             [description]);

        res.json(newTodo);
    } catch (err) {
        console.log(err.message);
    }
});

//Get all todos

app.get("/todos", async(req, res) => {
    try{
        const todos = await pool.query("SELECT * FROM todo")

        res.json(todos.rows)
    } catch (err) {
        console.log(err.message);
    }
})

// Get a single todo

app.get("/todos/:id", async(req, res) => {

    try{
        const { id } = req.params
        const todos = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id])

        res.json(todos.rows)
    } catch (err) {
        console.log(err.message);
    }
})

// Update a todo


app.put("/todos/:id", async(req, res) => {

    try{
        const { id } = req.params
        const { description } = req.body;
        const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING * ", [description, id])

        res.json(updateTodo.rows)
    } catch (err) {
        console.log(err.message);
    }
})

// Delete a todo


app.delete("/todos/:id", async(req, res) => {

    try{
        const { id } = req.params

        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1 ", [id])

        res.json({"Status":"Delete Successful."})
    } catch (err) {
        console.log(err.message);
    }
})







app.listen(PORT,() => {
    console.log(`running on port : ${PORT} `);
});