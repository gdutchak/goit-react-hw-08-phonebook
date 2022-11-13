import { useSelector } from "react-redux";
import { Box, Link, Div ,Img} from "./Home.styled";

export const Home =()=>{
    const login = useSelector(state=>state.isLogin)

    return(
        <Box>
        <Div>
            {login ? <p>Loading...</p> : (<>
            <Link to={'/signup'}>Sign up</Link>
            <Link to={'/login'}>Log in</Link>
            </>)}
            </Div>
            <Img src="https://www.howtogeek.com/wp-content/uploads/2021/01/windows_hello_hero_2.jpg?width=1198&trim=1,1&bg-color=000&pad=1,1" alt="Hello"/>
            </Box>
    )
}