import { useEffect } from "react";
import {  Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "redux/operationsAuth";
import { Private } from "./Private/Private";
import { Public } from "./Public/Public";
import { lazy,Suspense } from "react";

const Contacts = lazy(()=>import('../pages/Contacts'))
const ErrorPage = lazy (()=>import('../pages/Error'))
const HomePage = lazy (()=>import('../pages/Home'))
const LoginPage = lazy(()=>import('../pages/LogIn'))
const LogoutPage = lazy(()=>import('../pages/LogOut'))
const SigninPage = lazy(()=>import('../pages/SignIn'))


function App() {
  const isLogin = useSelector(state=>state.auth.isLogin)
  const dispatch = useDispatch()

  useEffect(()=>{
   dispatch(getCurrentUser())
   
  }, [dispatch])

  if(isLogin){
    return <Contacts/>
  }

  return (
    <Suspense fallback={null}>
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
    </Suspense>
  )
}
 export default App;













