import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Index from "../layout/Index";

import ForgotPassword from "../view/Auth/ForgotPassword/ForgotPassword";
import Login from "../view/Auth/Login/Login";
import Logout from "../view/Auth/Logout/Logout";



const ConfigRoute = () => {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgot" element={<ForgotPassword />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>

    </>
  );
};

export default ConfigRoute;
