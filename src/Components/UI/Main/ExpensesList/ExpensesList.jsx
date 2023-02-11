import Expense from "../Expense/Expense";
import styled from "@emotion/styled"
import { useContext } from "react";
import { ExpensesContext } from "../../../LOGIC/Context/Context";

const Ul = styled.ul`
border: 1px solid rgb(201, 201, 201);
border-radius: 0.3rem;
height : 200px;
overflow-y: scroll;



`
const ExpensesList = () => {
  const {ExpensesState} = useContext(ExpensesContext)
  return(
    <Ul>
    {
      ExpensesState.map((item)=>{
        return <Expense key={item.id} item={item}/>
      })
    }
  
    </Ul>
  );
};

export default ExpensesList;
