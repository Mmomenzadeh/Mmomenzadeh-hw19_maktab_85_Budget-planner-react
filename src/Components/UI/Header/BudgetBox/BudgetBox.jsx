import { useState } from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import { Modal } from "../../../Modal/Modal";

const handleColorType = color => {
  switch (color) {
  case "primary":
  return "#03a9f3";
  case "secondary":
  return "#f56342";
  default:
    console.log(color)
  return "#f50";
  }
  };

const Budgetbox = styled.div`
  width: 350px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;

  
  background-color : ${(props)=>(props.style)};

  border-radius: 0.3rem;
  align-items: center;
  font-size: 18px;
  color: #213547;
`;

const Btnbudgetbox = styled.button`
  border: none;
  background-color: #007bff;
  color: #fff;
  padding: 0.5rem;
  border-radius: 0.3rem;
  cursor: pointer;
`;

const BudgetBox = ({ budgetPlanner, mony, buttonStatus, color  }) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <Budgetbox>
        <p>{`${budgetPlanner} :$ ${mony}`}</p>
        {buttonStatus ? (
          <Btnbudgetbox onClick={openModal}>Edite</Btnbudgetbox>
        ) : null}

        {showModal &&
          ReactDOM.createPortal(
            <Modal
              saveChange={closeModal}
              btnName={"SaveChange"}
              status={"edite"}
            >
              <p
                style={{ colo: "#213547", fontSize: "17px", fontWeight: "600" }}
              >
                Write your Budget{" "}
              </p>
            </Modal>,
            document.getElementById("Modals")
          )}
      </Budgetbox>
    </>
  );
};

export default BudgetBox;
