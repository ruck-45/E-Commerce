// Dependencies
import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
// Local Files
import "./index.css";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";
import store from "./Redux/store";
import persistStore from "redux-persist/es/persistStore";

let persistor =persistStore(store)



const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <NextUIProvider>
    <PersistGate  persistor={persistor}>
      <App />
      <Toaster/>
    </PersistGate>
    </NextUIProvider>
    </BrowserRouter>
  </Provider>
  
  </React.StrictMode>
);
