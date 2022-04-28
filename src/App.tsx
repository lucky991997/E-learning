import React from "react";
import './styles/index.scss'
import './styles/main-styles/form-layout.scss'
import Index from "./layout/Index";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./core";
import "antd/dist/antd.css";

function App() {
  return <>
    <Provider store={store}>
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    </Provider>
  </>
}

export default App;
