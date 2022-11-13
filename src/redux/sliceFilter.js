import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    filter: ""
}

export const sliceFilter = createSlice({
    name: 'filters', 
    initialState,
    reducers: {
        addFilter: (state, action) => {
            state.filter = action.payload;
        }
    }
})

export const {addFilter} = sliceFilter.actions;
