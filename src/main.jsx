import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css"
import App from "./App";
import ExpensesContextProvider from "./Components/LOGIC/Context/Context";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <ExpensesContextProvider>
    <App />
  </ExpensesContextProvider>
);
