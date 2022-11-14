import { useDispatch, useSelector } from "react-redux";
import { ArrowBackIcon} from '@chakra-ui/icons';
import { userLogout } from "redux/operationsAuth";
import { Button, Email } from "./LogOut.styled";

export const Logout = ()=>{
    const dispatch = useDispatch()
    const email = useSelector((state)=>state.auth.user.email)
    
const handleLogout = ()=>{
return dispatch(userLogout());
}

    return(
        <>
        <Email>{`${email}`}</Email>
        <Button onClick={handleLogout}>
            <ArrowBackIcon/>
            Log out</Button>
        </>
    )
}