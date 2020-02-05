import React, { useState } from "react";
import "./Modal.scss";

const Modal = ({
  setShowModal = () => {},
  handleSubmit,
  fields = [],
}) => {
  const [fieldState, setFieldState] = useState({});

  const handleChange = (e, name) => {
    setFieldState(prevState => {
      prevState[name] = e.target.value;
      return prevState;
    });
  };

  return (
    <div
      onClick={() => {
        setShowModal(false);
      }}
      className="overlay"
    >
      <div
        onClick={e => {
          e.stopPropagation();
        }}
        className="modal--container"
      >
        <div className="modal">
          {fields.length && (
            <form onSubmit={(e) => {e.preventDefault(); handleSubmit({...fieldState})}}>
              {fields.map((fieldData, index) => {
                const { value, label, options = [] } = fieldData;
                let field;
                if (options.length > 0) {
                  field = (
                    <select
                      value={fieldState[value]}
                      onChange={e => handleChange(e, value)}
                    >
                      {Object.values(options).map((option, index) => {
                        return (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        );
                      })}
                    </select>
                  );
                } else {
                  field = (
                    <input
                      type="text"
                      value={fieldState[value]}
                      onChange={e => handleChange(e, value)}
                    />
                  );
                }
                return (
                  <label key={index}>
                    {label || value}
                    {field}
                  </label>
                );
              })}
              <input type="submit" value="Submit" />
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
