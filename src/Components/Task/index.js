import React from 'react'
import './Task.scss'

const Task = (props) => {
    const {eta = 1000, description = "default description", status="unassigned"} = props;
    const statusToColorMap = {
        "unassigned": "red",
        "queued": "orange",
        "active": "yellow",
        "completed" : "green"
    }
    console.log(statusToColorMap[status])
    return (
        <div className="task">
            <div className="left-wrapper">
                <div style={{backgroundColor:statusToColorMap[status]}} className="status"></div>
                <p>{description}</p>
            </div>
            
            <p>{Math.floor(eta/1000)}s</p>
        </div>
    )
}

export default Task
