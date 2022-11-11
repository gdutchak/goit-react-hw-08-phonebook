import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
export const Logout = ()=>{
    const email = useSelector(state=>state.user.email)
    return(
        <>
        <p>{`${email}`}</p>
        <NavLink to={'/'}>Log out</NavLink>
        </>
    )
}