import styled from "@emotion/styled"
import { useContext, useState } from "react"
import { ExpensesContext } from "../../../LOGIC/Context/Context"

const Search_input =styled.div`
width: 100%;
padding: 0.5rem;
border: 1px solid rgb(201, 201, 201);
border-radius: 0.3rem;
margin-top: 0.4rem;
margin-bottom: 1rem;
outline: none;
`
const Search = ()=>{
    const {ExpensesState , dispatch} = useContext(ExpensesContext)
    const [filterList , setfilterList] = useState('')

    // const handleSearch =(e)=>{
    //     if(e.target.value === ""){
    //         setfilterList(ExpensesState)
    //     }else{
    //         const queryString = e.target.value.toLowerCase()
    //         const filtered = ExpensesState.filter((item)=>{
    //             const name  = item.name;
    //             return name.toLowerCase().indexOf(queryString) !== -1
    //         })

    //         setfilterList(filtered)
    //     }

    //     dispatch({
    //         type : "search",
    //         payload : filterList

    //     })
        
    // }

    const handleSearch=(e)=>{

        setfilterList(e.target.value)
        console.log(filterList)
        dispatch({
            type : "search",
            payload : {
                query : filterList
            }
        })
    }

    return(
            <input onChange={handleSearch} className="search-ui" type="search" placeholder="Type to search...." />
    )
}

export default Search 