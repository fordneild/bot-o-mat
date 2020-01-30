import React from "react";
import './PlusButton.scss'

const PlusButton = ({height = 16, width = 16, onClick = () => {}}) => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 477.867 477.867"
      style={{enableBackground: "new 0 0 477.867 477.867"}}
      height={height}
      width={width}
      className="plus-button"
      onClick={onClick}
    >
      <g>
        <g>
          <path
            d="M392.533,0h-307.2C38.228,0.056,0.056,38.228,0,85.333v307.2c0.056,47.105,38.228,85.277,85.333,85.333h307.2
			c47.105-0.056,85.277-38.228,85.333-85.333v-307.2C477.81,38.228,439.638,0.056,392.533,0z M324.267,256H256v68.267
			c0,9.426-7.641,17.067-17.067,17.067s-17.067-7.641-17.067-17.067V256H153.6c-9.426,0-17.067-7.641-17.067-17.067
			s7.641-17.067,17.067-17.067h68.267V153.6c0-9.426,7.641-17.067,17.067-17.067S256,144.174,256,153.6v68.267h68.267
			c9.426,0,17.067,7.641,17.067,17.067S333.692,256,324.267,256z"
          />
        </g>
      </g>
    </svg>
  );
};

export default PlusButton
