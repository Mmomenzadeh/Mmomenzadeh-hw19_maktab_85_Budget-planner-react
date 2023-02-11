import { AiFillCloseCircle } from "react-icons/ai";

import styled from "@emotion/styled";

const Li = styled.li`
  border-bottom: 1px solid rgb(201, 201, 201);
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
`;

const Icons_container = styled.div`
  display: flex;
  gap: 1rem;
`;
const Expense_value = styled.button`
border: none;
background-color: #007bff;
color: #fff;
width : 40px;
border-radius: 0.5rem;
font-size: 11px;

`;

const Expense = () => {
  return (
    <Li className="expense-ui">
      <p>Shopping</p>
      <Icons_container>
        <Expense_value>$50</Expense_value>
        <AiFillCloseCircle  style={{cursor:"pointer"}}/>
      </Icons_container >
    </Li>
  );
};

export default Expense;
