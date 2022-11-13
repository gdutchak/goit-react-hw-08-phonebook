import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const Private = () =>{
    const isLogin = useSelector(state=>state.isLogin)

    if (!isLogin){
        return <Navigate to={'/'}/>
    }
    return <Outlet/>
}