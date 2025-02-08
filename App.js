import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    // Fetch tasks from the server
    useEffect(() => {
        axios.get('http://localhost:5000/tasks')
            .then(res => setTasks(res.data))
            .catch(err => console.error(err));
    }, []);

    // Handle task addition
    const handleAddTask = () => {
        if (!newTask) return;

        const task = { id: Date.now().toString(), name: newTask };

        axios.post('http://localhost:5000/tasks', task)
            .then(res => {
                setTasks([...tasks, res.data]);
                setNewTask('');
            })
            .catch(err => console.error(err));
    };

    // Handle task deletion
    const handleDeleteTask = (id) => {
        axios.delete(`http://localhost:5000/tasks/${id}`)
            .then(() => {
                setTasks(tasks.filter(task => task.id !== id));
            })
            .catch(err => console.error(err));
    };

    return (
        <div className="App">
            <h1>Task Manager</h1>
            <div className="task-input">
                <input 
                    type="text" 
                    value={newTask} 
                    onChange={(e) => setNewTask(e.target.value)} 
                    placeholder="Add a new task"
                />
                <button onClick={handleAddTask}>Add Task</button>
            </div>
            <ul className="task-list">
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.name}
                        <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
