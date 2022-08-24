import React, { useState } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import "./App.css";


function App() {

    const [tasks, setTasks] = useState([
        { id: "task_1", title: "Learn JS", status: 0 },
        { id: "task_2", title: "Code a todo list", status: 0 },
    ]);
    const [showIncomplete, setShowIncomplete] = useState(false);
    const [newTask, setNewTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTask) {
            const task = {
                id: Date.now(),
                title: newTask,
                status: 0,
            }
            setTasks([...tasks, task]);
            setNewTask("");
        }
    }

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    }

    const setTaskStatus = (taskId, status) => {
        setTasks(tasks.map(task => {
            if (task.id === taskId) {
                return {
                    ...task, status: status ? 1 : 0
                }
            }
            return task;
        }))
    }

    const removeTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    }

    return (
        <div className="container">
            <div id="title">Project Todo List</div>
            <div id="toDoList">
                <Header title="Todo List" subtitle="Get things done, one item at a time" />
                <TaskList
                    tasks={tasks}
                    showIncomplete={showIncomplete}
                    setTaskStatus={setTaskStatus}
                    removeTask={removeTask}
                    setShowIncomplete={setShowIncomplete}
                />

                <AddTaskForm handleSubmit={handleSubmit} newTask={newTask} handleInputChange={handleInputChange} />
            </div>
        </div>
    )
}


export default App;