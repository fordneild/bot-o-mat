import React, { useState } from 'react'
import './Tasks.scss'
import defaultTasks from './TaskData'
import Task from '../Task/'
import PlusButton from "../../Assets/icons/PlusButton";

const Tasks = (props) => {
    const [tasks, setTasks] = useState(defaultTasks)

    return (
        <div className="tasks--container">
            <div className="header--container">
                <h2>Tasks</h2>
            </div>
            <ul className="tasks">
                {tasks && tasks.length>0 ? tasks.map((taskData, index) => {
                    return (
                        <li key={index} className="task--container">
                            <Task {...taskData}/>
                        </li>
                    )
                }): null}
            </ul>
        </div>
    ) 
}

export default Tasks