import { createSlice } from "@reduxjs/toolkit";
import { UserSignup, UserLogin, UserLogout } from "./operationsAuth";

const initialState = {
    user:{
        name: '',
        email: '',
        password: '',
    },
    token: '',
    isLoading: false,
    isLogin: false,
    error: null,
}

export const AuthSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{},
    extraReducers:{
        [UserSignup.pending]:(state)=>{
            state.isLoading=true
        },
        [UserSignup.fulfilled]:(state, action)=>{
            state.isLoading = false
             state.user = action.user
           state.token = action.token
           state.isLogin = true
        },
        [UserSignup.rejected]:(state, action)=>{
            state.isLoading=false
             state.error=action
        },
        [UserLogin.pending]:(state, action)=>{
            state.isLoading=true
        },
        [UserLogin.fulfilled]:(state,action)=>{
            state.isLoading = false
             state.user = action.user
           state.token = action.token
           state.isLogin = true
        },
        [UserLogin.rejected]:(state, action)=>{
             state.isLoading = false
             state.error=action
        },
        [UserLogout.pending]:(state)=>{
            state.isLoading=true
        },
        [UserLogout.fulfilled]:(state)=>{
             state.isLoading = false
             state.user = {}
           state.token = ''
           state.isLogin = false
        },
        [UserLogout.rejected]:(state, action)=>{
             state.isLoading=false
            state.error=action
        }
    }
})