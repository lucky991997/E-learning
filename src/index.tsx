import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
// import ReactDOM from "react-dom";
import App from "./App";

const element = document.getElementById("root");
if (element) {
  const root = ReactDOM.createRoot(element);

  root.render(<App />);
}

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
