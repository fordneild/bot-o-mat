import React, { useState } from "react";
import Robots from "../Robots";
import "./RobotTaskController.scss";
import Tasks from "../Tasks";
import defaultTasks from "../../Assets/data/TaskData.js";
import Modal from "../Modal";
import RobotTypes from "../../Assets/data/robotTypes";

const RobotTaskController = () => {
  //used to keep generate ids for tasks and robots
  const uniqueId = () => {
    return (
      "id-" +
      Math.random()
        .toString(36)
        .substr(2, 16)
    );
  };

  //convert given task array into a task map
  const getDefaultTasksMap = () => {
    const defaultTasksMap = {};
    for (let i = 0; i < defaultTasks.length; i++) {
      let id = uniqueId();
      defaultTasksMap[id] = { ...defaultTasks[i] };
    }
    return defaultTasksMap;
  };

  //fields needed to create a robot
  const ROBOT_FIELDS = [
    { value: "name", label: "Robot name:" },
    { value: "type", label: "Robot type:", options: RobotTypes },
    { label: "Number of tasks", value: "numTasks", options: [1, 2, 3, 4, 5] }
  ];
  //fields needed to create a task
  const TASK_FIELDS = [
    { value: "description" },
    { label: "time (seconds)", value: "eta", number: true }
  ];

  //robot map in state
  const [robots, setRobots] = useState({});
  //task map also tracked
  const [tasks, setTasks] = useState(getDefaultTasksMap());
  //show the modal? is tracked
  const [showModal, setShowModal] = useState(false);
  //which modal show (create task or create robot)
  const [modalType, setModalType] = useState("robot");

  //-------------------TASKS-------------------
  const addTask = (name, seconds) => {
    const taskData = {
      description: name,
      eta: filterETA(seconds)
    };
    setTasks(prevTasks => {
      prevTasks[uniqueId()] = { ...taskData };
      return prevTasks;
    });
  };

  const updateTaskStatus = (taskId, status) => {
    const newTasks = { ...tasks };
    const task = newTasks[taskId];
    if (task) {
      task.status = status;
      setTasks(newTasks);
    }
  };

  //returns a list of tasks that the robot should start working on
  const assignTasks = numTasks => {
    const arrOfTasks = Object.entries(tasks);
    const assigned = [];
    //loop over the tasks looking for ones that we can do
    for (let i = 0; i < arrOfTasks.length; i++) {
      let [taskId, task] = arrOfTasks[i];
      if (!task.status || task.status === "unassigned") {
        assigned.push({ ...task, id: taskId });
        //since the task has been sent to the robot, it is queued
        updateTaskStatus(taskId, "queued");
      }
      if (assigned.length >= numTasks) {
        return assigned;
      }
    }
    return assigned;
  };

  //used to safely get number of seconds from create task form
  const filterETA = seconds => {
    try {
      const val = Number.parseInt(seconds) * 1000;
      if (val > 0) {
        return val;
      } else {
        return 0;
      }
    } catch (e) {
      return 0;
    }
  };
  //-------------------END TASKS-------------------


  //-------------------ROBOTS-------------------

  const addRobot = (name, type, numTasks) => {
    const tasks = assignTasks(numTasks);
    const robotData = {
      name: name,
      type: type,
      tasks: tasks
    };

    setRobots(prevRobots => {
      prevRobots[uniqueId()] = { ...robotData };
      return prevRobots;
    });
  };
  //-------------------END ROBOTS-------------------

  const handleModalSubmit = modalData => {
    setShowModal(false);
    if (modalType === "robot") {
      //it was a create robot modal
      addRobot(
        modalData.name,
        modalData.type || RobotTypes[0],
        modalData.numTasks || 1
      );
    } else {
      //it was a create task modal
      addTask(modalData.description, modalData.eta);
    }
  };

  return (
    <div className="robots-tasks--container">
      {showModal && (
        <Modal
          fields={modalType === "robot" ? ROBOT_FIELDS : TASK_FIELDS}
          handleSubmit={handleModalSubmit}
          setShowModal={setShowModal}
        />
      )}
      <Tasks
        handleClick={() => {
          setShowModal(true);
          setModalType("task");
        }}
        tasks={Object.values(tasks)}
      />
      <Robots
        handleClick={() => {
          setShowModal(true);
          setModalType("robot");
        }}
        updateTaskStatus={updateTaskStatus}
        robots={Object.values(robots)}
      />
    </div>
  );
};

export default RobotTaskController;
