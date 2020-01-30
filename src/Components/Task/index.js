import React from 'react'
import './Task.scss'

const Task = (props) => {
    const {eta = 1000, description = "default description"} = props;
    return (
        <div className="task">
            <p>{description}</p>
            <p>{eta}</p>
        </div>
    )
}

export default Task
