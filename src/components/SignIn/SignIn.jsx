import { userSignup } from "redux/operationsAuth";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { AtSignIcon, EmailIcon, LockIcon} from '@chakra-ui/icons'

export const Signin = ()=>{
    const dispatch = useDispatch()
    const login = useSelector((state)=>state.isLogin)

    const handleSubmit = e=>{
        e.preventDefault()
        let data ={
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }
        return dispatch(userSignup(data))
    }
    if(login){
        return <Navigate to='/contacts'/>
    }
    
        return(
            <form autoComplete="on" onSubmit={handleSubmit}>
                <label>
                <AtSignIcon/>
                    <span>Your name</span>
                    <input type='text' name="name" placeholder="Enter your name" required/>
                </label>
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
                <button type="submit">Sign in</button>
            </form>
        )
    }



    