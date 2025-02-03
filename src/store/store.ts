// store.ts
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // использует localStorage
import rootReducer from "./reducers";

// Конфигурация персистентного хранилища
const persistConfig = {
   key: "root",
   storage,
   whitelist: ["auth"], // сохраняем только auth в хранилище
};

// Создаем персистентный редьюсер для auth
const persistedRootReducer = persistReducer(persistConfig, rootReducer);

// Создаем хранилище Redux
export const store = configureStore({
   reducer: {
      root: persistedRootReducer, // используем персистентный редьюсер для root
   },
});

export const persistor = persistStore(store); // Создаем объект для персистенции

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;