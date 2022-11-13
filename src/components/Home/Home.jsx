import { NavLink} from "react-router-dom";
import { useSelector } from "react-redux"

export const Home =()=>{
    const login = useSelector(state=>state.isLogin)

    return(
        <div>
            {login ? <p>Loading...</p> : (<>
            <NavLink to={'/signup'}>Sign in</NavLink>
            <NavLink to={'/login'}>Log in</NavLink>
            </>)}
        </div>
        
    )
}