import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { ArrowBackIcon} from '@chakra-ui/icons'
import { userLogout } from "redux/operationsAuth"

export const Logout = ()=>{
    const dispatch = useDispatch()
    const email = useSelector((state)=>state.user.email)
    
const handleLogout = ()=>{
return dispatch(userLogout)
}

    return(
        <>
        <p>{`${email}`}</p>
        <NavLink to={'/'} onClick={handleLogout}>
            <ArrowBackIcon/>
            Log out</NavLink>
        </>
    )
}