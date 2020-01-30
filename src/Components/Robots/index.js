import React, { useState } from "react";
import "./Robots.scss";
import Robot from "../Robot/";
import PlusButton from "../../Assets/icons/PlusButton";

const Robots = props => {
  const [robots, setRobots] = useState([]);

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

  return (
    <div className="robots--container">
      <div className="header--container">
        <h2>Robots</h2>
        <PlusButton />
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
