const Todo = require('../models/todoModel');

// Get all todos
exports.getTodos = async (req, res) => {
    try {
        let t1 = performance.now()
        const todos = await Todo.find().sort({ createdAt: -1, });
        let t2 = performance.now()
        let totalTime = t2 - t1
        res.json({ todos, totalTime });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get one todo
exports.getTodo = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) return res.status(404).json({ message: 'Todo not found' });
        res.json(todo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new todo
exports.createTodo = async (req, res) => {
    console.log(req.body)



    const todo = new Todo({
        title: req.body.title,
        description: req.body.description,
    });

    try {
        await todo.save();
        res.status(201).json({ success: true, message: "todo added successfully" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a todo
exports.updateTodo = async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTodo) return res.status(404).json({ message: 'Todo not found' });
        res.json({ message: "updated successfully", success: true, updatedTodo });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a todo
exports.deleteTodo = async (req, res) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
        if (!deletedTodo) return res.status(404).json({ message: 'Todo not found' });
        res.json({ message: 'Todo deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
