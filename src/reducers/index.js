import { combineReducers } from "redux";
import invoicesReducer from "./invoicesReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import uiReducer from "./uiReducer.js";

const persistReducerConfig = {
  key: "root",
  storage: storage,
  whitelist: ["invoices", "ui"],
};

const invoiceConfig = {
  key: "invoices",
  storage: storage,
  blacklist: ["selectedId"],
};

const reducers = combineReducers({
  invoices: persistReducer(invoiceConfig, invoicesReducer),
  ui: uiReducer,
});

const persistedReducer = persistReducer(persistReducerConfig, reducers);

export default persistedReducer;
