import { useState } from 'react'

const AddTask = ({onAdd}) => {

    const [text,setText]=useState('')
    const [day,setDay]=useState('')
    const [reminder,setReminder]=useState(false)

    const onSubmit =(e)=>{
        e.preventDefault()

        if(! text){
            alert("add text to set a new task")
            return

        }
        onAdd({text,day,reminder})
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>

          <div className='form-control'>
            
            <label>Task</label>
            <input type='text' placeholder='add new task here' value={text} onChange={(e)=>setText(e.target.value)}/>
            
        </div>

        <div className='form-control'>
            
            <label>Day and Time</label>
            <input type='text' placeholder='add exact (date and time) here' value={day} onChange={(e)=>setDay(e.target.value)} />
            
        </div>

        <div className='form-control form-control-Check'>
            
            <label>add Reminder</label>
            <input type='checkbox' 
            checked={reminder}
            value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)} />
            
        </div>

        <input className ="btn btn-block"type="submit" vale="save this new Task"/>

        </form>
       
    )
}

export default AddTask
