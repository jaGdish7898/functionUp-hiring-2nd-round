// import Header from "./components/Header"
// import Tasks from "./components/Tasks"
// import { useState } from "react"

// function App() {

//   const [tasks, setTasks] = useState([
//     {
//       id: 1,
//       text: "Doctors Appointment",
//       day: "Dec 26 at 4:40 pm",
//       reminder: true
//     },
//     {
//       id: 2,
//       text: "Attend Blood Donation Camp",
//       day: "Dec 28 at 10:00 am",
//       reminder: true
//     },
//     {
//       id: 3,
//       text: "imp company meeting",
//       day: "Dec 30 at 01:00 am",
//       reminder: true
//     },
//   ])

//   //pasing this func as props so that it should help onClick event in icon to delete the tasks.
//   const deleteTask = (id) => {

//     setTasks(tasks.filter((task) => task.id !== id))
//   }
//   //Toggle Remainder

//   const toggleReminder = (id) => {
//     setTasks(tasks.map((task) => task.id === id ? { ...tasks, reminder: !task.reminder } : task))
//   }

//   return (
//     <div className="container">
//       <Header />
//       {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ("No Tasks Present")}
//     </div>
//   )
// }

// export default App;

import { useState } from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"


function App() {

    const [showAddTask, setShowAddTask]=useState(false)

    const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Dec 26 at 4:40 pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Attend Blood Donation Camp",
      day: "Dec 28 at 10:00 am",
      reminder: true,
    },
    {
      id: 3,
      text: "imp company meeting",
      day: "Dec 30 at 01:00 am",
      reminder: true,
    },
  ])

  //add new task
  const addTask=(task) => {
    const id=Math.floor(Math.random()*10000)+1

    const newTask={id,...task}
    setTasks([...tasks,newTask])
  }

  //Delete Task
  const deleteTask=(id)=>{
    setTasks(tasks.filter((task)=>task.id !==id))
  }

  // Toggle Reminder
  const toggleReminder =(id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? {...task, reminder:
          !task.reminder } :task 
      )
    )
  }

  return (
    <div className='container'>
      <Header onAdd ={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      
      {showAddTask  && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks  tasks={tasks} onDelete=
      {deleteTask} onToggle={toggleReminder} />
      ):(
        'No Tasks ToShow'
      )}
    </div>
  )
}

export default App





