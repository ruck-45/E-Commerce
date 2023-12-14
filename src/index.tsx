// Dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

// Local Files
import './index.css';
import App from './App';
import store from "./store/store";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
