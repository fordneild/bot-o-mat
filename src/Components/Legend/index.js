import React from "react";
import "./Legend.scss";

const Legend = () => {
  const statusToColorMap = {
    unassigned: "red",
    queued: "orange",
    active: "yellow",
    completed: "green"
  };
  return (
    <div className="legend--container">
      <h3>Legend</h3>
      <ul className="legend">
        {Object.entries(statusToColorMap).map((key, index) => {
          const [status, color] = key;
          return (
            <li className="key">
              <div
                className="key-color"
                style={{ backgroundColor: color }}
              ></div>
              <p>{status}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Legend;
