import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../view/Home/Home";
import Learning from "../view/Learning/Learning";
import Setting from "../view/Setting/Setting";
import StudentProfiles from "../view/StudentProfile/StudentProfiles";
import TeacherProfile from "../view/TeacherProfiles";



const RouteComponent = () => {

    return (
        <>
            <Routes>
                <Route path="*" element={<Home />}></Route>
                <Route path="/learning" element={<Learning />}></Route>
                <Route path="/student" element={<StudentProfiles />}></Route>
                <Route path="/teacher" element={<TeacherProfile />}></Route>
                <Route path="/setting" element={<Setting />}></Route>
            </Routes>

        </>
    );
};

export default RouteComponent;
