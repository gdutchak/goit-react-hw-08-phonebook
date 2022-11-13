import { Contacts } from "pages/Contacts"
import { ErrorPage } from "pages/Error"
import { HomePage } from "pages/Home"
import { LoginPage } from "pages/LogIn"
import { LogoutPage } from "pages/LogOut"
import { SigninPage } from "pages/SignIn"
import { useEffect } from "react"
import {  Route, Routes } from "react-router-dom"
import { useDispatch } from "react-redux"
import { getCurrentUser } from "redux/operationsAuth"
// import { useSelector } from "react-redux"

export function App() {
  console.log('app');
  const dispatch = useDispatch()
  // const login = useSelector(state=>state.isLogin)

  useEffect(()=>{
    dispatch(getCurrentUser)
  }, [dispatch])

  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="signup" element={<SigninPage/>}/>
      <Route path="login" element={<LoginPage/>}/>
      <Route path="logout" element={<LogoutPage/>}/>
      <Route path="contacts" element={<Contacts/>}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  )
}














