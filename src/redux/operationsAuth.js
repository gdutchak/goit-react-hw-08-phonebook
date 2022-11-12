import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthLogin, AuthLogout, AuthSignup } from "./apiAuth";

export const UserSignup = createAsyncThunk(
    'users/signup',
    async(data,{rejectWithValue})=>{
        try {
            const response = await AuthSignup(data)
            return response;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
export const UserLogin = createAsyncThunk(
    'users/login',
    async(data,{rejectWithValue})=>{
        try {
            const response = await AuthLogin(data)
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
export const UserLogout = createAsyncThunk(
    'users/logout',
    async(_,{rejectWithValue})=>{
        try {
            const response = await AuthLogout()
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
