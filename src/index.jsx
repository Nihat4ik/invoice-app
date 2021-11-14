import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter as Router } from "react-router-dom";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";

const root = document.getElementById("root");

const store = createStore(reducers, composeWithDevTools());

const persistedStore = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistedStore}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  root
);
