import styled from "@emotion/styled"
const Budgetbox=styled.div`
width: 250px;
padding: 1rem;
display: flex;
justify-content: space-between;
background-color: #e2e3e5;
border-radius: 0.3rem;
`

const Btnbudgetbox=styled.button`

border: none;
background-color: #007bff;
color:  #fff;
padding: 0.5rem;
border-radius: 0.3rem;
`

const BudgetBox = ({ budgetPlanner, mony, buttonStatus }) => {
  return (
    <Budgetbox>
      <p>{`${budgetPlanner} : ${mony}`}</p>
      {buttonStatus ? <Btnbudgetbox>Edite</Btnbudgetbox> : null}
    </Budgetbox>
  );
};

export default BudgetBox;
