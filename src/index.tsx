// Dependencies
import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

// Local Files
import "./index.css";
import App from "./App";
import store from "./Redux/store";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <NextUIProvider>
          <App />
          <Toaster />
        </NextUIProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
