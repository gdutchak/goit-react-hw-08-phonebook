import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    filter: ""
}

export const sliceFilter = createSlice({
    name: 'filter', 
    initialState,
    reducers: {
        addFilter: (state, action) => {
            state.filter = action.payload;
        }
    }
})

export const {addFilter} = sliceFilter.actions;
