import React, { useState } from "react";
import "./Robots.scss";
import Robot from "../Robot/";
import PlusButton from "../../Assets/icons/PlusButton";
import Modal from "../Modal";

const Robots = ({robots = [],handleClick, updateTaskStatus}) => {

  return (
    <div className="robots--container">
      <div className="header--container">
        <h2>Robots</h2>
      <PlusButton handleClick={handleClick}/>
      </div>
      <ul className="robots">
        {robots && robots.length > 0
          ? robots.map((robotData, index) => {
              return (
                <li key={index} className="robot--container">
                  <Robot updateTaskStatus={updateTaskStatus} {...robotData} />
                </li>
              );
            })
          : <h1 className="no-robots">Please make a robot</h1>}
      </ul>
    </div>
  );
};

export default Robots;
