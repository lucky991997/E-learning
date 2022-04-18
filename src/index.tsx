import React, { StrictMode } from "react";

import ReactDOM from 'react-dom'

import App from "./App";
import "antd/dist/antd.css";
import './styles/body.scss'

// const element: any = document.getElementById("root");

// const root = ReactDOM.createRoot(element);

// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );


ReactDOM.render(


  <App />
  ,

  document.getElementById("root")
);
