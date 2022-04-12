import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Index from "../layout/Index";

import ForgotPassword from "../view/Auth/ForgotPassword/ForgotPassword";
import Login from "../view/Auth/Login/Login";
import Logout from "../view/Auth/Logout/Logout";
import Home from "../view/Home/Home";
import Learning from "../view/Learning/Learning";



const RouteComponent = () => {

    return (
        <>
            <Routes>
                <Route path="*" element={<Home />}></Route>
                <Route path="/learning" element={<Learning />}></Route>
            </Routes>

        </>
    );
};

export default RouteComponent;
