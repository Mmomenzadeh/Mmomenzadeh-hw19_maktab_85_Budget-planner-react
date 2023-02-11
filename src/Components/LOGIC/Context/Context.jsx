import React, { useState, createContext , useReducer } from "react";
import { Reducer } from "../Reducer/Reducer";

export const ExpensesContext = createContext({
  ExpensesState:[] , dispatch :(command)=>{},
});

const ExpensesContextProvider = ({ children }) => {
  const [ExpensesState , dispatch ] = useReducer(Reducer , [])



  return (
    <ExpensesContext.Provider value={{ExpensesState , dispatch  }}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
