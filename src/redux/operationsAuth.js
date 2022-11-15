import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { authLogin, authLogout, authSignup, authCurrentUser } from "./apiAuth";

export const userSignup = createAsyncThunk(
    'users/signup',
    async(data,{rejectWithValue})=>{
        try {
            const response = await authSignup(data)
            return response;
        } catch (error) {
            if(error.response.status === 400){
                
                Notify.failure('This email is in use, try other:(')
            }
            if(error.response.status === 500){
                
                Notify.warning('Server error, try again:(')
            }
            return rejectWithValue(error.message)
        }
    }
)
export const userLogin = createAsyncThunk(
    'users/login',
    async(data,{rejectWithValue})=>{
        try {
            const response = await authLogin(data)
            return response
        } catch (error) {
            if(error.response.status === 400){
                Notify.failure('This email or password is incorrect, try other:(')
            }
            return rejectWithValue(error.message)
        }
    }
)
export const userLogout = createAsyncThunk(
    'users/logout',
    async(_,{rejectWithValue})=>{
        try {
            const response = await authLogout()
            return response
        } catch (error) {
            if(error.response.status === 500){
                
                Notify.warning('Server error, try again:(')
            }
            return rejectWithValue(error.message)
        }
    }
)

export const getCurrentUser = createAsyncThunk(
    'users/current',
    async (_, {rejectWithValue, getState})=>{
        try {
            const {auth} = getState()
                const response = await authCurrentUser(auth.token)
                return response
        } catch (error) {
           return rejectWithValue(error)
        }
    }
)
