import React from 'react'
import './Landing.scss'
import Tasks from '../Tasks';
import Robots from '../Robots'

const Landing  = () => {
    return(
        <div className="landing--container">
            <Tasks />
            <Robots />
        </div>
    )
}

export default Landing