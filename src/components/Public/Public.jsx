import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const Public = ({restricted}) =>{
    const token = useSelector(state=>state.token)

    if (token && restricted){
        return <Navigate to='/contacts'/>
    }
    return <Outlet/>
}