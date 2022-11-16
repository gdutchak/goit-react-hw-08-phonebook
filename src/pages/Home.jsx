import Home from "components/Home/Home"
import Layout from "components/Layout/Layout"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


const HomePage =()=>{
    const isLogin = useSelector(state=>state.auth.isLogin)
    return(
        isLogin ? <Navigate to={'/contacts'}/> : (
        <>
        <Layout/>
        <Home/>
        </>
        )
    )
}

export default HomePage