import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
//component import
import Form from './components/Form';
import TaskList from './components/TaskList';

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [filteredTasks, setFilteredTasks] = useState([]);

  const handleFilteredTasks = () => {
    switch(filter) {
      case 'completed': setFilteredTasks(tasks.filter((task) => task.completed))
      break;
      case 'not completed': setFilteredTasks(tasks.filter((task) => !task.completed))
      break;
      default:
        setFilteredTasks(tasks);
        break;
    }
  }

  useEffect(() => {
    handleFilteredTasks();
  }, [filter, tasks]);

  return (
    <div className="App">
      <header>
      <h1 className='title'>To Do List</h1>
      </header>
      
      <Form  filter={filter} setFilter={setFilter} input={input} tasks={tasks} setTasks={setTasks} setInput={setInput}/>
      <TaskList filteredTasks={filteredTasks} tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
