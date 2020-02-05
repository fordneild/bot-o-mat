import React, { useEffect, useState } from "react";
import "./Robot.scss";

const Robot = ({
  name = "no name",
  type = "Unipedal",
  tasks = [],
  updateTaskStatus
}) => {

  const incrementActiveTask = () => {
      //if there is something to do
    if (tasks.length > 0) {
        let activeTask = tasks.shift()
        updateTaskStatus(activeTask.id,"active")
        window.setTimeout(() => {
            updateTaskStatus(activeTask.id,"completed")
            incrementActiveTask()
        },activeTask.eta)
    }
  };
  
  //on robot render
  useEffect(() => {
    incrementActiveTask();
  }, []);

  return (
    <div className="robot">
      <p>{name}</p>
      <p>{type}</p>
    </div>
  );
};

export default Robot;
