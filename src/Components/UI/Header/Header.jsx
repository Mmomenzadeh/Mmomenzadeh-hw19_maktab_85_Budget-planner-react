import BudgetBox from "./BudgetBox/BudgetBox";
import styled from "@emotion/styled";
import { useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../../LOGIC/Context/Context";

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
  const { spent } = useContext(ExpensesContext);
  const [Budget, setBudget] = useState(0);
  const [Remaining, setRemaining] = useState(0);

  useEffect(() => {
    if (Budget === 0) {
      return setRemaining(0);
    } else {
      setRemaining(Number(Budget) - Number(spent));
    }
  }, [Budget, spent]);

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
          colorText={"gray"}
        />
        <BudgetBox
          budgetPlanner={"Remaining"}
          mony={Remaining}
          buttonStatus={false}
          colorText={"blue"}
         

        />
        <BudgetBox
          budgetPlanner={"Spent so far"}
          mony={spent}
          buttonStatus={false}
          color={"primary"}
          colorText={"green"}

        />
      </Budgetboxs_div>
    </Header_div>
  );
};

export default Header;
