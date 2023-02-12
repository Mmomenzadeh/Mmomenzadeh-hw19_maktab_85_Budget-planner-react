import AddExpenses from "./AddExpenses/AddExpenses";

import styled from "@emotion/styled";
import { useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../../LOGIC/Context/Context";

const H2 = styled.h2`
  font-size: 25px;
  color: #213547;
  font-weight: 600;
`;
const Input_container = styled.div`
  display: flex;
  gap: 1rem;
`;
const Btn_save = styled.button`
  border: none;
  background-color: #007bff;
  color: #fff;
  padding: 0.5rem;
  border-radius: 0.3rem;
  cursor: pointer;
`;
const Footer = () => {
  const {expense, setExpense , dispatch, setSpend , } = useContext(ExpensesContext);
  const handleSaveExpense = () => {
    dispatch({
      type: "creat_ExpensesList",
      payload: {
        name: expense.name,
        cost: expense.cost,
      },
    });

    setSpend((prev) => prev + Number(expense.cost));
    setExpense({ name: "", cost: 0 });
  };

  return (
    <div>
      <H2>Add Expenses</H2>
      <Input_container>
        <AddExpenses
          type={"text"}
          labelName={"Name"}
          onChange={(e) => setExpense({ ...expense, name: e.target.value })}
          value={expense.name}
        />
        <AddExpenses
          type={"number"}
          labelName={"Cost"}
          onChange={(e) => setExpense({ ...expense, cost: e.target.value })}
          value={expense.cost}
        />
      </Input_container>
      <Btn_save onClick={handleSaveExpense}>Save</Btn_save>
    </div>
  );
};

export default Footer;
