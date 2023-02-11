import BudgetBox from "./BudgetBox/BudgetBox"
import styled from "@emotion/styled"

const Headerdiv = styled.div`

`
const Budgetboxs = styled.div`
display: flex;
gap: 1.5rem;
`

const H1 = styled.h1`
font-size: 25px;
color: #213547;
font-weight: 600;
margin-bottom: 1rem;

`
const Header =()=>{
    return(
       <div>
        <H1>My Bugdet Planner</H1>
        
        <Budgetboxs>
            <BudgetBox budgetPlanner={"Budget"} mony={2000} buttonStatus={true}/>
            <BudgetBox budgetPlanner={"Remaining"} mony={1040} buttonStatus={false}/>
            <BudgetBox budgetPlanner={"Spent so far"} mony={960} buttonStatus={false}/>

        </Budgetboxs>
       </div>
    )
}

export default Header