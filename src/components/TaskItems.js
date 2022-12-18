
import React from 'react';

const TaskItems = ({text, task, tasks, setTasks}) => {

    const handleDelete = () => {
        setTasks(tasks.filter((value) => value.id !== task.id));
        // console.log(task);
    };

    const handleComplete = () => {
        setTasks(tasks.map((value) => {
            if(value.id === task.id) {
                return {
                    ...value,
                    completed: !value.completed,
                }
            }else
                return value;
        }))
    };

    return(
        <div className='tasks'>
            <li className={`task-item ${task.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={handleComplete} className='add-btn'>+</button>
            <button onClick={handleDelete} className='remove-btn'>-</button>
        </div>
    );
}

export default TaskItems;