import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContactNumber, deleteContactNumber } from './operationsContacts';

let initialState = {
    contacts: {
        items: [],
        isLoading: false,
        error: null,
    }
}

export const contactSlice = createSlice({
    name: 'number', 
    initialState,
    extraReducers: {
        [fetchContacts.pending]: (state) => {
            state.contacts.isLoading = true
        },
        [fetchContacts.fulfilled]: (state, action) => {
            state.contacts.items = action.payload
            state.contacts.isLoading = false
        },
        [fetchContacts.rejected]: (state, action) => {
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
        [addContactNumber.rejected]: (state, action) => {
            state.contacts.isLoading = false
            state.contacts.error = action.payload.response.statusText
        },
        [deleteContactNumber.pending]: (state) => {
            state.contacts.isLoading = true
        },
        [deleteContactNumber.fulfilled]: (state, action) => {
            state.contacts.isLoading = false
            state.contacts.items = state.contacts.items.filter(({ id }) => id !== action.payload.id)
        },
        [deleteContactNumber.rejected]: (state, action) => {
            state.contacts.isLoading = false
            state.contacts.error = action.payload.response.statusText
        },
    }
})
