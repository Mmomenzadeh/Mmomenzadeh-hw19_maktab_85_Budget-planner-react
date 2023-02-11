import React, { useState, createContext , useReducer } from "react";
import { Reducer } from "../Reducer/Reducer";

export const BudgetContext = createContext({
  expense: {},
  setExpense: () => {},
  BudgetState:[] , dispatch :(command)=>{}
});

const BudgetContextProvider = ({ children }) => {
  const [expense, setExpense] = useState({ name: "", cost: 0, id: "" });
  const [BudgetState , dispatch ] = useReducer(Reducer , [])


  const [ Budget, setBudget]=useState(0)

  return (
    <BudgetContext.Provider value={{ expense, setExpense ,BudgetState , dispatch }}>
      {children}
    </BudgetContext.Provider>
  );
};

export default BudgetContextProvider;
