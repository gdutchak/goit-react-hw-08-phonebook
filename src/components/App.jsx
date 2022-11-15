import { Route, Routes } from "react-router-dom";
import { lazy,Suspense } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCurrentUser } from "redux/operationsAuth";
import Private from "./Private/Private";
import Public from "./Public/Public";

const HomePage = lazy(()=>import('../pages/Home'));
const SigninPage = lazy(()=>import('../pages/SignIn'));
const LoginPage = lazy(()=>import('../pages/LogIn'));
const LogoutPage = lazy(()=>import('../pages/LogOut'));
const Contacts = lazy(()=>import('../pages/Contacts'));
const ErrorPage = lazy(()=>import('../pages/Error'));


function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
   dispatch(getCurrentUser())
  }, [dispatch])

  return (
    <Suspense fallback={null} >
      <Routes> 
      <Route path="/" element={<HomePage/>}/>

      <Route element={<Public restricted/>}>
      <Route path="signup" element={<SigninPage/>}/>
      <Route path="login" element={<LoginPage/>}/>
      <Route path="logout" element={<LogoutPage/>}/>
      </Route>

      <Route element={<Private/>}>
      <Route path="contacts" element={<Contacts/>}/>
      </Route>
      
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
    </Suspense>
  )
}
 export default App;













