import React from "react";
// import ReactDOM, { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "antd/dist/antd.css";
import './index.scss'

// const element = document.getElementById("root");
// if (element) {
//   const root = ReactDOM.createRoot(element);

//   root.render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   );
// }
ReactDOM.render(

    <BrowserRouter>
      <App />
    </BrowserRouter>,

  document.getElementById("root")
);
