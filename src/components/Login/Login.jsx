import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "redux/operationsAuth";
import { Navigate } from "react-router-dom";
import { EmailIcon, LockIcon} from '@chakra-ui/icons';
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    VStack
  } from "@chakra-ui/react";

export const Login = ()=>{
const dispatch= useDispatch();
const login = useSelector(state=>state.isLogin)

    const handleSubmit = e=>{
        e.preventDefault()
        const data ={
            email: e.target.email.value,
            password: e.target.password.value,
        }
        return dispatch(userLogin(data))
    }
if(login){
    return <Navigate to={'/contacts'}/>
}
    return(
<Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md">
            <form autoComplete="on" onSubmit={handleSubmit}>
            <VStack spacing={4} align="flex-start">                
                <FormControl>
                <FormLabel>
                <EmailIcon height={21} marginRight={1}/>
                <span>Your email</span>
                    <Input type='email' name="email" placeholder="Enter your email" required/>
                </FormLabel>
                </FormControl>

                <FormControl>
                <FormLabel>
                <LockIcon height={21} marginRight={1}/>
                <span>Your password</span>
                    <Input type='password' name='password' placeholder="Enter your password" required/>
                </FormLabel>
                <Button type="submit">Sign in</Button>
                </FormControl>
                </VStack>
            </form>
            </Box>
    </Flex>
    )
}