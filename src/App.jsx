import React, { useState } from 'react'
import './App.css'
function App() {
  const [task,setTask]=useState('')
  const [tasks,setTasks]=useState([])
function onAddTask(){
if(task.trim()==='')return
setTasks([...tasks,task])
setTask('')
}
function onDeleteTodo(index){
  setTasks(prevState=>prevState.filter((task,i)=> i != index))
}

  return (
    <div className='todo-outer-conainer'>
      <h1 className='todo-list-head'>Todo List</h1>
      <input type="text" name="task" id="task" className='input-box' value={task} onChange={(e)=>setTask(e.target.value)} placeholder='Enter a task' onKeyDown={(e)=>e.key==='Enter'&& onAddTask()}/>
      <button className='task-btn' onClick={onAddTask}>Add Task</button>
      <div className='task-container'>
        {tasks.length === 0 ? <h1 className='task-pening-head'>No Tasks Added!</h1> : ''}
{tasks.map((each,index)=> (
  <div className='task-item-container'  key={index}>
    <h1 className='task-item'>{each}</h1>
    <div className='del-cont'>
      <input type="checkbox" name="completed" id="completed" className='check' />
    <button className='delete-btn' onClick={()=>onDeleteTodo(index)}>Delete</button>
    </div>
    </div>
 
))}
      </div>
    </div>
  )
}

export default App