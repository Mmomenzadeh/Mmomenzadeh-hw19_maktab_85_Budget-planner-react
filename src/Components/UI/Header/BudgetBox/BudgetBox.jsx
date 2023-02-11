import { useState } from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import { Modal } from "../../../Modal/Modal";

const handleColorType = color => {
  switch (color) {
  case "primary":
  return "#d4edda";
  case "secondary":
  return "#e2e3e5";
  default:
    console.log(color)
  return "#cce5ff";
  }
  };

const Budgetbox_div = styled.div`
  width: 350px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  background-color : ${({ color }) => handleColorType(color)};
  border-radius: 0.3rem;
  align-items: center;
  font-size: 18px;
  color: #213547;
`;

const Btn_budgetbox = styled.button`
  border: none;
  background-color: #007bff;
  color: #fff;
  padding: 0.5rem;
  border-radius: 0.3rem;
  cursor: pointer;
`;

const BudgetBox = ({ budgetPlanner, mony, buttonStatus, color ,setBudget  }) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);


  return (
    <>
      <Budgetbox_div color={color}>
        <p>{`${budgetPlanner} :$ ${mony}`}</p>
        {buttonStatus ? (
          <Btn_budgetbox onClick={openModal}>Edite</Btn_budgetbox>
        ) : null}

        {showModal &&
          ReactDOM.createPortal(
            <Modal
              status={"edite"}
              onClose={closeModal}
              closeChange={closeModal}
              setBudget={setBudget}
            >
              <p
                style={{ colo: "#213547", fontSize: "19px", fontWeight: "600" }}
              >
                Write your Budget{" "}
              </p>
            </Modal>,
            document.getElementById("Modals")
          )}
      </Budgetbox_div>
    </>
  );
};

export default BudgetBox;
