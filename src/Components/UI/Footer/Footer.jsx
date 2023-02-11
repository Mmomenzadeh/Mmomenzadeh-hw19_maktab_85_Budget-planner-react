import AddExpenses from "./AddExpenses/AddExpenses"

const Footer =()=>{

    return(
        <div className="footer-ui">
            <h2>Add Expenses</h2>
            <div className="input-container">
            <AddExpenses type={'text'} labelName={'Name'}/>
            <AddExpenses type={'number'} labelName={'Cost'}/>    
            </div>        
            <button>Save</button>    
        </div>
    )
}

export default Footer