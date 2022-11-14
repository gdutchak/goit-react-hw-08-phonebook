import { configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {authSlice} from './sliceAuth';
import {sliceFilter} from './sliceFilter';
import {contactSlice} from './sliceContact';

const middleware = 
(getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    });

    const persistConfig = {
        key: "token",
        storage,
        whitelist: ["token"]
    }


export const store = configureStore({
    reducer: {
        auth: persistReducer(persistConfig, authSlice.reducer),
        number: contactSlice.reducer,
        filter: sliceFilter.reducer,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
})

export const persistor = persistStore(store)


