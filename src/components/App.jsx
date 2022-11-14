import { Contacts } from "pages/Contacts"
import { ErrorPage } from "pages/Error"
import { HomePage } from "pages/Home"
import { LoginPage } from "pages/LogIn"
import { LogoutPage } from "pages/LogOut"
import { SigninPage } from "pages/SignIn"
import { useEffect } from "react"
import {  Route, Routes } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getCurrentUser } from "redux/operationsAuth"
import { Private } from "./Private/Private"
import { Public } from "./Public/Public"

export function App() {
  const isLogin = useSelector(state=>state.auth.isLogin)
  const dispatch = useDispatch()

  useEffect(()=>{
   dispatch(getCurrentUser())
   
  }, [dispatch])

  if(isLogin){
    return <Contacts/>
  }

  return (
    <Routes> 
<Route path="/" element={<HomePage/>}/>

      <Route path="/" element={<Public restricted/>}>
      <Route path="/signup" element={<SigninPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/logout" element={<LogoutPage/>}/>
      </Route>

      <Route path="/contacts" element={<Private/>}>
      <Route path="/contacts" element={<Contacts/>}/>
      </Route>

      <Route path="*" element={<ErrorPage/>}/>

    </Routes>
  )
}














