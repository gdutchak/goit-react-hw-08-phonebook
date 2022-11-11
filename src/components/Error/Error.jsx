import { NavLink } from "react-router-dom"

export const Error = ()=>{
    return(
        <>
        <p>Ooops, this page was not found</p>
        <NavLink to={'/'}>Go back to home page</NavLink>
        </>
    )
}