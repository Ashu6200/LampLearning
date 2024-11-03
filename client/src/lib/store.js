import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    PURGE,
    REGISTER,
    REHYDRATE,
} from "redux-persist";
import accountSlice from "./features/account/accountSlice";
import userSlice from "./features/user/userSlice";
import { apiService } from "./apiService";
import storage from "./ssr-safe-storage";

const rootReducer = combineReducers({
    [apiService.reducerPath]: apiService.reducer,
    account: accountSlice,
    user: userSlice,
});

export const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['account', 'user',],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () => {
    return configureStore({
        reducer: persistedReducer,
        devTools: process.env.NODE_ENV !== 'production',
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat([apiService.middleware]),
    });
};
