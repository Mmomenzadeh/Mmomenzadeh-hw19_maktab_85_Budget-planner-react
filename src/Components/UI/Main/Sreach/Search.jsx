import styled from "@emotion/styled"

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
    return(
            <input  className="search-ui" type="search" placeholder="Type to search...." />
    )
}

export default Search 