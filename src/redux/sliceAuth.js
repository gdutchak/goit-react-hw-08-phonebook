import { createSlice } from "@reduxjs/toolkit";
import { userSignup, userLogin, userLogout, getCurrentUser } from "./operationsAuth";

let initialState = {
    user:{ },
    token: '',
    isLoading: false,
    isLogin: false,
    error: null,
}

export const authSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers:{
        [userSignup.pending]:(state)=>{
            state.isLoading=true
        },
        [userSignup.fulfilled]:(state, action)=>{
            state.isLoading = false
            state.user = action.payload.user
           state.token = action.payload.token
           state.isLogin = true
           state.error = null
        },
        [userSignup.rejected]:(state, action)=>{
            state.isLoading=false
            state.error=action.payload
        },
        [userLogin.pending]:(state, action)=>{
            state.isLoading=true
        },
        [userLogin.fulfilled]:(state,action)=>{
            state.isLoading = false
             state.user = action.payload.user
           state.token = action.payload.token
           state.isLogin = true
           state.error = null
        },
        [userLogin.rejected]:(state, action)=>{
             state.isLoading = false
             state.error=action.payload
        },
        [userLogout.pending]:(state)=>{
            state.isLoading=true
        },
        [userLogout.fulfilled]:(state)=>{
             state.isLoading = false
             state.user = {}
           state.token = ''
           state.isLogin = false
           state.error = null
        },
        [userLogout.rejected]:(state, action)=>{
             state.isLoading=false
            state.error=action.payload
        },
        [getCurrentUser.pending]: (state)=>{
            state.isLoading=true
            state.error=null
        },
        [getCurrentUser.fulfilled]: (state, action)=>{
            state.isLoading=false
            state.user = action.payload.user
            state.isLogin = true
        },
        [getCurrentUser.rejected]: (state, action)=>{
            state.isLoading=false
            state.error=action.payload
        }
    }
})
