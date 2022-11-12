import { UserSignup } from "redux/operationsAuth";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

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
        return dispatch(UserSignup(data))
    }
    if(login){
        return <Navigate to='/contacts'/>
    }
    
        return(
            <form autoComplete="on" onSubmit={handleSubmit}>
                <label>
                    <span>Your name</span>
                    <input type='text' name="name" placeholder="Enter your name" required/>
                </label>
                <label>
                <span>Your email</span>
                    <input type='email' name="email" placeholder="Enter your email" required/>
                </label>
                <label>
                <span>Your password</span>
                    <input type='password' name='password' placeholder="Enter your password" required/>
                </label>
                <button type="submit">Sign in</button>
            </form>
        )
    }