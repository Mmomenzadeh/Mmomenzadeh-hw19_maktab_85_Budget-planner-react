import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import BudgetContextProvider from './Components/LOGIC/Context/Context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BudgetContextProvider>

    <App />
    </BudgetContextProvider>

)
