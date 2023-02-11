import { useContext, useState } from "react";
import { ExpensesContext } from "../LOGIC/Context/Context";

import "./Modal.css";
export const Modal = ({ children, status, onClose, setBudget ,id }) => {
  const { dispatch } = useContext(ExpensesContext);
  const [inputValue, setInputValue] = useState(0);
  
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSaveChange = () => {
    setBudget(inputValue);
  };

 

  const handleDelete = () => {

    dispatch({
      type: "delete_ExpenseItem",
      payload: id,
    });
  };

  return (
    <>
      <div id="modal">
        <div className="background"></div>
        <div className="modal-ui">
          {children}
          {status === "edite" ? (
            <input
              type="text"
              className="modal-input"
              onChange={handleChange}
            />
          ) : null}
          <div className="btn-container">
            <button onClick={onClose} className="modal-btn cancel-btn">
              Cancel
            </button>
            {status === "edite" ? (
              <button
                onClick={() => handleSaveChange()}
                className="modal-btn save-btn"
              >
                Save Changes
              </button>
            ) : (
              <button onClick={handleDelete} className="modal-btn delte-btn">
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
