import { userSignup } from "redux/operationsAuth";
import { useDispatch, useSelector } from "react-redux";
import { Navigate} from "react-router-dom";
import { AtSignIcon, EmailIcon, LockIcon} from '@chakra-ui/icons';
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    VStack
  } from "@chakra-ui/react";

export const Signin = ()=>{
    const dispatch = useDispatch()
    const login = useSelector((state)=>state.auth.isLogin)

    const handleSubmit = e=>{
        e.preventDefault()
        let data ={
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }
        return dispatch(userSignup(data))
    }

        if(login){
            return <Navigate to='/contacts'/>
        }
    
        return(
<Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md">
            <form autoComplete="on" onSubmit={handleSubmit}>
            <VStack spacing={4} align="flex-start">
            <FormControl>
                <FormLabel>
                <AtSignIcon height={21} marginRight={1}/>
                    <span>Your name</span>
                    <Input type='text' name="name" placeholder="Enter your name" required/>
                </FormLabel>
                </FormControl>
                
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



    