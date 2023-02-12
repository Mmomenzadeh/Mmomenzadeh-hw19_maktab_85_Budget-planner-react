import React, { useState, createContext , useReducer } from "react";
import { Reducer } from "../Reducer/Reducer";

export const ExpensesContext = createContext({
  ExpensesState:[] , dispatch :(command)=>{},
  spent:0 , setSpend:()=>{},
  expense : {}, setExpense :()=>{}
});

const ExpensesContextProvider = ({ children }) => {
  const [ExpensesState , dispatch ] = useReducer(Reducer , [])
  const [spent , setSpend] = useState(0)
  const [expense, setExpense] = useState({ name: "", cost: 0 });



  return (
    <ExpensesContext.Provider value={{ExpensesState , dispatch ,spent , setSpend ,expense, setExpense }}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
