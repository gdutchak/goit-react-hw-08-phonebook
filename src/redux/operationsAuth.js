import { createAsyncThunk } from "@reduxjs/toolkit";
import { authLogin, authLogout, authSignup, authCurrentUser } from "./apiAuth";

export const userSignup = createAsyncThunk(
    'users/signup',
    async(data,{rejectWithValue})=>{
        try {
            const response = await authSignup(data)
            return response;
        } catch (error) {
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
            return rejectWithValue(error.message)
        }
    }
)

export const getCurrentUser = createAsyncThunk(
    'users/current',
    async (_, {rejectWithValue, getState})=>{
        try {
            const {auth} = getState()
            console.log(auth);
            const response = await authCurrentUser(auth.token)
            return response
        } catch (error) {
           return rejectWithValue(error)
        }
    }
)
