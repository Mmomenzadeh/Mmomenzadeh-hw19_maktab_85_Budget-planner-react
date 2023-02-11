import styled from "@emotion/styled";
const Budgetbox = styled.div`
  width: 350px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  background-color: #e2e3e5;
  border-radius: 0.3rem;
  align-items: center;
  font-size: 18px;
  color: #213547;
`;

const Btnbudgetbox = styled.button`
  border: none;
  background-color: #007bff;
  color: #fff;
  padding: 0.5rem;
  border-radius: 0.3rem;
  cursor: pointer;

`;

const BudgetBox = ({ budgetPlanner, mony, buttonStatus, style }) => {
  return (
    <Budgetbox style={{ backgroundColor: { style } }}>
      <p>{`${budgetPlanner} :$ ${mony}`}</p>
      {buttonStatus ? <Btnbudgetbox>Edite</Btnbudgetbox> : null}
    </Budgetbox>
  );
};

export default BudgetBox;
