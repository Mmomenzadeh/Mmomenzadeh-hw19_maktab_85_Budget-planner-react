import { AiFillCloseCircle } from "react-icons/ai";
import ReactDOM from "react-dom"
import styled from "@emotion/styled";
import { useContext, useState } from "react";
import { Modal } from "../../../Modal/Modal";

const Li = styled.li`
  border-bottom: 1px solid rgb(201, 201, 201);
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
`;

const Icons_container = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
const Expense_value = styled.button`
  border: none;
  background-color: #007bff;
  color: #fff;
  width: 50px;
  padding : 0.3rem;
  border-radius: 0.8rem;
  font-size: 11px;
`;

const Expense = ({ item }) => {


  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <Li className="expense-ui">
      <p>{item.name}</p>
      <Icons_container>
        <Expense_value>${item.cost}</Expense_value>
        <AiFillCloseCircle style={{ cursor: "pointer" ,color:"red" , fontSize:"25px" }} onClick={openModal} />
        {showModal &&
          ReactDOM.createPortal(
            <Modal
              status={"delete"}
              onClose={closeModal}
              closeChange={closeModal}
              id ={item.id}
            >
              <p
                style={{ colo: "#213547", fontSize: "30px", fontWeight: "800" }}
              >
               Are You Sure!?
              </p>
            </Modal>,
            document.getElementById("Modals")
          )}
      </Icons_container>
    </Li>
  );
};

export default Expense;
