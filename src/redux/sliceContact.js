import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContactNumber, deleteContactNumber } from './operationsContacts';

let initialState = {
    contacts: {
        items: [],
        isLoading: false,
        error: null,
    }
}

const contactSlice = createSlice({
    name: 'contact', 
    initialState,
    extraReducers: {
        [fetchContacts.pending]: (state) => {
            state.contacts.isLoading = true
        },
        [fetchContacts.fulfilled]: (state, action) => {
            state.contacts.items = action.payload
            state.contacts.isLoading = false
        },
        [fetchContacts.error]: (state, action) => {
            state.contacts.isLoading = false
            state.contacts.error = action.payload
        },
        [addContactNumber.pending]: (state) => {
            state.contacts.isLoading = true
        },
        [addContactNumber.fulfilled]: (state, action) => {
            state.contacts.isLoading = false
            state.contacts.items.push(action.meta.arg)
        },
        [addContactNumber.error]: (state, action) => {
            state.contacts.isLoading = false
            state.contacts.error = action.payload
        },
        [deleteContactNumber.pending]: (state) => {
            state.contacts.isLoading = true
        },
        [deleteContactNumber.fulfilled]: (state, action) => {
            state.contacts.isLoading = false
            state.contacts.items = state.contacts.items.filter(({ id }) => id !== action.meta.arg)
        },
        [deleteContactNumber.error]: (state, action) => {
            state.contacts.isLoading = false
            state.contacts.error = action.payload
        },
    }
})

export default contactSlice.reducer