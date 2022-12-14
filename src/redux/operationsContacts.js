import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getContacts, addContacts, deleteContacts } from "./apiContacts";

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, {rejectWithValue}) => {
        try {
            const response = await getContacts()
            return response
        } catch (error) {
            if(error.response.status === 500){
                
                Notify.warning('Server error, try again:(')
            }
            return rejectWithValue(error.message)
        }
    },
)

export const addContactNumber = createAsyncThunk(
    'contacts/addContact',
    async (contact, {rejectWithValue}) => {
        try {
            const response = await addContacts(contact)
            return response
            } catch (error) {
                if(error.response.status === 400){
                    Notify.failure('Error creating contact, try again:(')
                }
                return rejectWithValue(error.message)
            }}
)
export const deleteContactNumber = createAsyncThunk(
    'contacts/deleteContact',
    async (id, {rejectWithValue}) => {
        try {
           const response = await deleteContacts(id)
           return response
        } catch (error) {
            if(error.response.status === 500){
                Notify.warning('Server error, try again:(')
            }
            return rejectWithValue(error.message)
        }
    }
)