import React, {useState} from 'react'
import './RobotModal.scss'

const RobotModal = () => {
    const [robotName, setRobotName] = useState("")
    const [robotType, setRobotType] = useState("")
    
    return(
        <div className="robot-modal">
            <form>
            <label>
                Name:
                <input type="text" value={robotName} onChange={e => setRobotName(e.target.value)} />
            </label>
            <label>
                Name:
                <input type="text" value={robotName} onChange={e => setRobotName(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default RobotModal