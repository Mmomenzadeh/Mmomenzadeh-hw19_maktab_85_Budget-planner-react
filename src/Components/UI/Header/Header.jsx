import BudgetBox from "./BudgetBox/BudgetBox";
import styled from "@emotion/styled";
import { useState } from "react";

const Header_div = styled.div`
  margin-bottom: 1.5rem;
`;
const Budgetboxs_div = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const H1 = styled.h1`
  font-size: 30px;
  color: #213547;
  font-weight: 600;
  margin-bottom: 1rem;
`;


const Header = () => {
  const [ Budget, setBudget]=useState(0)
  return (
    <Header_div>
      <H1>My Bugdet Planner</H1>

      <Budgetboxs_div>
        <BudgetBox
          budgetPlanner={"Budget"}
          mony={Budget}
          buttonStatus={true}
          color={"secondary"}
          setBudget={setBudget}
        />
        <BudgetBox
          budgetPlanner={"Remaining"}
          mony={1040}
          buttonStatus={false}
        />
        <BudgetBox
          budgetPlanner={"Spent so far"}
          mony={960}
          buttonStatus={false}
          color={"primary"}
        />
      </Budgetboxs_div>
    </Header_div>
  );
};

export default Header;
