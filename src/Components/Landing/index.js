import React from 'react'
import './Landing.scss'
import RobotTaskController from '../RobotTaskController'
import Legend from '../Legend'

const Landing  = () => {
    
    return(
        <div className="landing--container">
            <RobotTaskController />
            <Legend />
        </div>
    )
}

export default Landing