const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    isCompleted: Boolean
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
