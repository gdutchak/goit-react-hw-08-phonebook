import { NavLink} from "react-router-dom";


export const Home =()=>{
    return(
        <>
    <NavLink to={'/signup'}>Sign in</NavLink>
    <NavLink to={'/login'}>Log in</NavLink>
    </>
    )
}