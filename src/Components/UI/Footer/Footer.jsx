import AddExpenses from "./AddExpenses/AddExpenses"

import styled from "@emotion/styled";

const H2 = styled.h2`
  font-size: 25px;
  color: #213547;
  font-weight: 600;
`;
const Input_container = styled.div`

  display: flex;
  gap: 1rem;
`
const Btn_save = styled.button`
  border: none;
  background-color: #007bff;
  color: #fff;
  padding: 0.5rem;
  border-radius: 0.3rem;
  cursor: pointer;

`;
const Footer =()=>{

    return(
        <div className="footer-ui">
            <H2>Add Expenses</H2>
            <Input_container>
            <AddExpenses type={'text'} labelName={'Name'} />
            <AddExpenses type={'number'} labelName={'Cost'} />    
            </Input_container>        
            <Btn_save>Save</Btn_save>    
        </div>
    )
}

export default Footer