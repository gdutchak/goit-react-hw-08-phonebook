import Home from "components/Home/Home";
import Layout from "components/Layout/Layout";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";


const HomePage =()=>{
    const isLogin = useSelector(state=>state.auth.isLogin);
    const loading = useSelector(state=>state.auth.isLoading)
    return(
        loading && <ClipLoader/>,
        !loading && isLogin ? <Navigate to={'/contacts'}/> : (
        <>
        <Layout/>
        <Home/>
        </>
        )
    )
}

export default HomePage