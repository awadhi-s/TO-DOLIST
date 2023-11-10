import React, { useState } from 'react';
import './App.css';

function ToDoApp(){
  const [task, setTask] = useState([]);
  const [newTask, setNewTask ]= useState('');

  const handleTaskChange = (event) =>{
    setNewTask(event.target.value);

  };
  const handleAddTask = () =>{
    if(newTask.trim()!== ''){
      setTask([...task,newTask]);
      setNewTask('');

    }
  };
  const handleDeleteTask = (index) =>{
    const updateTask = [...task];
    updateTask.splice(index, 1);
    setTask(updateTask);
  };
    

  return(
    <div className="todoapp">
      <h1>
        Todo list
      </h1>
      <br />
      <div>
        <input type="text" value={newTask} onChange={handleTaskChange} placeholder='New task'/>
        <button onClick={handleAddTask} >Add</button>
      

      </div>
      <ul>
        {task.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() =>handleDeleteTask(index)}>Delete</button>
            
          </li>

        ))}
      </ul>
    </div>
 





  );




}
export default ToDoApp;