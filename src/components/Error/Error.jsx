import { NavLink } from "react-router-dom";
import { ArrowBackIcon} from '@chakra-ui/icons'

export const Error = ()=>{
    return(
        <>
        <p>Ooops, this page was not found</p>
        <NavLink to={'/'}>
            <ArrowBackIcon/>
            Go back to home page</NavLink>
        </>
    )
}