import { configureStore} from '@reduxjs/toolkit';
import contactSlice from './sliceContact';
import authSlice from './sliceAuth';
import sliceFilter from './sliceFilter';

const middleware = 
(getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            // ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    })

export const store = configureStore({
    reducer: {
        users: authSlice,
        contact: contactSlice,
        filter: sliceFilter,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
})

