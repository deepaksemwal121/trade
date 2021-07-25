import { createStore } from "redux";
import RootReducer from "./RootReducer";
import { persistStore, persistReducer } from "redux-persist";
import Storage from "redux-persist/lib/storage";

const persistConfig = {
    key : 'root',
    storage : Storage,
    whitelist : ['user']
}

const pReducer = persistReducer(persistConfig, RootReducer);

export const Store = createStore(pReducer)
export const Persistor = persistStore(Store)