import React from 'react'

function AddTaskForm({ handleSubmit, newTask, handleInputChange }) {
    return (
        <form onSubmit={handleSubmit} action="#">
            <label>Add to the todo list</label>
            <div className="addTodo">
                <input id="new-item" type="text" value={newTask} onChange={handleInputChange} />
                <button type="summit">ADD ITEM</button>
            </div>
        </form>
    )
}

export default AddTaskForm