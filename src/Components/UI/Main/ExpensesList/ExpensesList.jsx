import Expense from "../Expense/Expense";
import styled from "@emotion/styled"

const Ul = styled.ul`
border: 1px solid rgb(201, 201, 201);
border-radius: 0.3rem;



`
const ExpensesList = () => {
  return <Ul>
    <Expense />
    <Expense />
    <Expense />
    <Expense />
  
  
  </Ul>;
};

export default ExpensesList;
