import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "redux/operationsAuth";
import { Navigate } from "react-router-dom";
import { EmailIcon, LockIcon} from '@chakra-ui/icons'

export const Login = ()=>{
const dispatch= useDispatch();
const login = useSelector(state=>state.isLogin)

    const handleSubmit = e=>{
        e.preventDefault()
        const data ={
            email: e.target.email.value,
            password: e.target.password.value,
        }
        return dispatch(userLogin(data))
    }
if(login){
    return <Navigate to={'/contacts'}/>
}
    return(
        <form autoComplete="on" onSubmit={handleSubmit}>
            <label>
                <EmailIcon/>
                <span>Your email</span>
                <input type='email' name="email" placeholder="Enter your email" required/>
            </label>
            <label>
                <LockIcon/>
            <span>Your password</span>
                <input type='password' name='password' placeholder="Enter your password" required/>
            </label>
            <button type="submit" >Sign in</button>
        </form>
    )
}