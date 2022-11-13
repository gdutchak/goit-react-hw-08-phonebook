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
import { Private } from "./Private/Private"
import { Public } from "./Public/Public"

export function App() {
  console.log('app');
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getCurrentUser)
  }, [dispatch])

  return (
    <Routes> 
      <Route element={<Public/>}>
      <Route path="/" element={<HomePage/>}/>
      <Route path="signup" element={<SigninPage/>}/>
      <Route path="login" element={<LoginPage/>}/>
      <Route path="logout" element={<LogoutPage/>}/>
      </Route>
      <Route element={<Private/>}>
      <Route path="contacts" element={<Contacts/>}/>
      </Route>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  )
}














