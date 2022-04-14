import React from "react";
import './styles/index.scss'
import './styles/main-styles/form-layout.scss'
import Index from "./layout/Index";
import { BrowserRouter } from "react-router-dom";


function App() {
  return <>
    <BrowserRouter>
      <Index />
    </BrowserRouter>

  </>
}

export default App;
