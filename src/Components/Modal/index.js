import React from 'react'
import './Modal.scss'
import RobotModal from '../RobotModal/'

const Modal = ({showModal = false, setShowModal = () => {}, isRobotModal}) => {
    if(!showModal){
        return false;
    }
    return(
        <div onClick={() => {setShowModal(false)}}className="overlay">
            <div onClick={(e) => {e.stopPropagation()}}className="modal--container">
                {isRobotModal ? <RobotModal />: <RobotModal />}
            </div>
        </div>
    )
}

export default Modal