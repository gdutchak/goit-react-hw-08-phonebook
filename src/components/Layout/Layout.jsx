import { Link, Div} from "../Home/Home.styled";

const Layout = ()=>{

    return(
            <Div>
            <Link to={'/signup'}>Sign up</Link>
            <Link to={'/login'}>Log in</Link>
            </Div>
    )
}

export default Layout;