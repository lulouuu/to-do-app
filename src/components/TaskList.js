import React from 'react';
import TaskItems from './TaskItems';

const TaskList = ({tasks,setTasks, filteredTasks}) => {
    return(
        <div className='task-container'>
            <ul className='task-list'>
                {filteredTasks.map((task) => (
                    <TaskItems filteredTasks={filteredTasks} tasks={tasks} setTasks={setTasks} text={task.text} task={task} key={task.id}/>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;