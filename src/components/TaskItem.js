import React from 'react'

function TaskItem({ task, setTaskStatus, removeTask }) {
    return (
        <li key={task.id} className={task.status ? "input-group done" : "input-group"}>
            <div className="content">{task.title}</div>
            <div className="action">
                <input type="checkbox" className="btn btn-done" checked={Boolean(task.status)} onChange={(e) => setTaskStatus(task.id, e.target.checked)} />
                <button className="btn btn-delete" onClick={() => removeTask(task.id)}>✖</button>
            </div>
        </li>
    )
}

export default TaskItem