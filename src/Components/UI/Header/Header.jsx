import BudgetBox from "./BudgetBox/BudgetBox"
import styled from "@emotion/styled"

const Headerdiv = styled.div`
margin-bottom: 1.5rem;

`
const Budgetboxs = styled.div`
display: flex;
gap: 1.5rem;
`

const H1 = styled.h1`
font-size: 30px;
color: #213547;
font-weight: 600;
margin-bottom: 1rem;

`
const Header =()=>{
    return(
       <Headerdiv>
        <H1>My Bugdet Planner</H1>
        
        <Budgetboxs>
            <BudgetBox budgetPlanner={"Budget"} mony={2000} buttonStatus={true} style={"#e2e3e5"}/>
            <BudgetBox budgetPlanner={"Remaining"} mony={1040} buttonStatus={false} style={"#d4edda"}/>
            <BudgetBox budgetPlanner={"Spent so far"} mony={960} buttonStatus={false} style={"#cce5ff"}/>

        </Budgetboxs>
       </Headerdiv>
    )
}

export default Header