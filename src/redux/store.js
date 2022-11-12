import { configureStore} from '@reduxjs/toolkit';
import contactSlice from './sliceContact';
import AuthSlice from './sliceAuth';
import sliceFilter from './sliceFilter';

const middleware = 
(getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            // ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    })
   
export const store = configureStore({
    reducer:AuthSlice,contactSlice,sliceFilter,
    middleware,
    devTools: process.env.NODE_ENV === 'development',
})

