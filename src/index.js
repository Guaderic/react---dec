import React from "react";
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";


import App from './App';
import {Provider} from "react-redux";
import {store} from "./redux";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    <App />
  </Provider>
);

