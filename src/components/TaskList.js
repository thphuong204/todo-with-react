import React from 'react'
import TaskItem from './TaskItem'

function TaskList({ tasks, showIncomplete, setTaskStatus, removeTask, setShowIncomplete }) {
    return (
        <>
            <ul id="items">
                {tasks.filter(task => showIncomplete ? task.status !== 1 : true).map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        setTaskStatus={setTaskStatus}
                        removeTask={removeTask} />

                ))}
            </ul>
            <div className="incompleted-filter">
                <label htmlFor="filter">Show incompleted tasks only</label>
                <input id="filter" type="checkbox" className="btn" checked={showIncomplete} onChange={(e) => setShowIncomplete(e.target.checked)} />
            </div>
        </>
    )
}

export default TaskList