import React from 'react'
import './Tasks.scss'
import Task from '../Task/'
import PlusButton from '../../Assets/icons/PlusButton'

const Tasks = ({tasks = [], handleClick}) => {
    return (
        <div className="tasks--container">
            <div className="header--container">
                <h2>Tasks</h2>
                <PlusButton handleClick={handleClick}/>
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