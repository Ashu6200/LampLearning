"use client";
import { makeStore } from "@/lib/store";
import { useRef } from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

export default function StoreProvider({ children }) {
    const storeRef = useRef();
    const persistorRef = useRef();
    if (!storeRef.current) {
        storeRef.current = makeStore();
        persistorRef.current = persistStore(storeRef.current);
    }

    return (
        <Provider store={storeRef.current}>
            <PersistGate loading={null} persistor={persistorRef.current}>
                {children}
            </PersistGate>
        </Provider>
    );
}
