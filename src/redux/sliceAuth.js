import { createSlice } from "@reduxjs/toolkit";
import { UserSignup, UserLogin, UserLogout } from "./operationsAuth";

const initialState = {
    user:{ },
    token: '',
    isLoading: false,
    isLogin: false,
    error: null,
}

const AuthSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{},
    extraReducers:{
        [UserSignup.pending]:(state)=>{
            state.isLoading=true
        },
        [UserSignup.fulfilled]:(state, action)=>{
            console.log(state.user);
            state.isLoading = false
            state.user = action.payload.user
           state.token = action.payload.token
           state.isLogin = true
           console.log(state.user);
        },
        [UserSignup.rejected]:(state, action)=>{
            state.isLoading=false
            state.error=action.payload
            console.log(action);
        },
        [UserLogin.pending]:(state, action)=>{
            state.isLoading=true
        },
        [UserLogin.fulfilled]:(state,action)=>{
            state.isLoading = false
             state.user = action.payload.user
           state.token = action.payload.token
           state.isLogin = true
        },
        [UserLogin.rejected]:(state, action)=>{
             state.isLoading = false
             state.error=action.payload
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
            state.error=action.payload
        }
    }
})

export default AuthSlice.reducer;