import {AiFillCloseCircle} from 'react-icons/ai'
const Expense = ()=>{
    return(
        <li className="expense-ui">
            <p>Shopping</p>
            <div className="icons-container">
            <button>50$</button>
            <AiFillCloseCircle/>
            </div>
        </li>
    )
}

export default Expense 