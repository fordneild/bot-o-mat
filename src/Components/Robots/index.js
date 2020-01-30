import React, { useState } from "react";
import "./Robots.scss";
import Robot from "../Robot/";
import PlusButton from "../../Assets/icons/PlusButton";
import Modal from "../Modal";

const Robots = props => {
  const [robots, setRobots] = useState([]);
  const [showModal, setShowModal] = useState(false)

  const addRobot = (name, type, tasks) => {
    const robotData = {
      name: name,
      type: type,
      tasks: tasks
    };

    setRobots(prevRobots => {
      prevRobots.push(robotData);
    });
  };

  const handleClick = () => {
      console.log("CLICK!")
      setShowModal(true)
  }

  return (
    <div className="robots--container">
        <Modal showModal={showModal} setShowModal={setShowModal}/>
      <div className="header--container">
        <h2>Robots</h2>
        <PlusButton onClick={handleClick}/>
      </div>
      <ul className="robots">
        {robots && robots.length > 0
          ? robots.map((robotData, index) => {
              return (
                <li key={index} className="robot--container">
                  <Robot {...robotData} />
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default Robots;
