
const AddExpenses =({labelName ,type})=>{

    return(
        <div className="AddExpenses-ui">

            <label>{labelName}</label>
            <input type={type} />

        </div>
    )
}

export default AddExpenses