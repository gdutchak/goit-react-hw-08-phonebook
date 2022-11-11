import { configureStore} from '@reduxjs/toolkit';
import { contactSlice } from './sliceContact';
import { AuthSlice } from './sliceAuth';
// middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//         serializableCheck: {
//             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//     }),
// const middleware = 
//    (getDefaultMiddleware)=>
//    getDefaultMiddleware({
//         },
//       })


export const store = configureStore({
    reducer: {
        contacts: contactSlice.reducer,
        users: AuthSlice.reducer,
    },
    // middleware,
    devTools: process.env.NODE_ENV === 'development',
})

export const { addContact, addFilter, deleteContact } = contactSlice.actions;