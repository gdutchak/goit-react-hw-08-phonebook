import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const Public = ({restricted}) =>{
    const token = useSelector(state=>state.auth.token)
    const loading = useSelector(state=>state.auth.isLoading)

    if (token && !loading&& restricted ){
        return <Navigate to='/contacts'/>
    }
    return <Outlet/>
}

export default Public