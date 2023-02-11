import ExpensesList from "./ExpensesList/ExpensesList";
import Search from "./Sreach/Search";
import styled from "@emotion/styled";

const H2 = styled.h2`
  font-size: 25px;
  color: #213547;
  font-weight: 600;
`;
const Main_container = styled.div`
margin-bottom: 2rem;

`

const Main = () => {
  return (
    <Main_container>
      <H2>Expenses</H2>
      <Search />
      <ExpensesList />
    </Main_container>
  );
};

export default Main;
