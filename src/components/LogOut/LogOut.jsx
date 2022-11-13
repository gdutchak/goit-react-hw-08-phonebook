import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import { ArrowBackIcon} from '@chakra-ui/icons'

export const Logout = ()=>{
    const email = useSelector((state)=>state.user.email)
    return(
        <>
        <p>{`${email}`}</p>
        <NavLink to={'/'}>
            <ArrowBackIcon/>
            Log out</NavLink>
        </>
    )
}