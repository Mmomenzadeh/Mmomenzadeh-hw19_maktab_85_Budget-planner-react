import ExpensesList from "./ExpensesList/ExpensesList"
import Search from "./Sreach/Search"

const Main = ()=>{

    return(
        <div className="main-ui">
            <h2>Expenses</h2>
            <Search/>
            <ExpensesList/>
            
        </div>
    )
}

export default Main 