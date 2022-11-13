import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const Public = () =>{
    const isLogin = useSelector(state=>state.isLogin)

    if (isLogin){
        return <Navigate to={'/contacts'}/>
    }
    return <Outlet/>
}