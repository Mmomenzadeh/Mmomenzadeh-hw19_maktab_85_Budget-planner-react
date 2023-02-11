import {useState} from "react"

import "./Modal.css";
export const Modal = ({ children, saveChange, btnName, status }) => {
    const [inputValue , setinputValue] = useState(0)

    const handleChange=(e)=>{
        setinputValue(e.target.value)
    }

    // console.log(inputValue)
  return (
    <>
      <div id="modal">
        <div className="modal-ui">
          {children}
          {status === "edite" ? (
            <input
              type="text"
              className="modal-input"
              onChange={handleChange}
            />
          ) : null}
          <button onClick={saveChange} className="modal-btn">
            {btnName}
          </button>
        </div>
      </div>
    </>
  );
};
