import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Exam from "../view/Examination/Exam";

import Home from "../view/Home/Home";
import Learning from "../view/Learning/Learning";
import Setting from "../view/Setting/Setting";
import ChangeSchool from "../view/StudentProfile/ChangeSchool/ChangeSchool";
import Profiles from "../view/StudentProfile/Profiles/Profiles";
import Resever from "../view/StudentProfile/Reserve/Reserve";
import StudentProfiles from "../view/StudentProfile/StudentProfiles";
import Assignment from "../view/TeacherProfile/assignment/Assignment";
import Profile from "../view/TeacherProfile/Profiles/Profile";
import TeacherProfile from "../view/TeacherProfile/TeacherProfiles";



const RouteComponent = () => {

    return (
        <>
            <Routes>
                <Route path="*" element={<Home />}></Route>
                <Route path="/learning" element={<Learning />}></Route>
                <Route path="/student/" element={<StudentProfiles />}>
                    <Route path="/student/*" element={<StudentProfiles />} />
                    <Route path="/student/profilesstudent" element={<Profiles />} />
                    <Route path="/student/change" element={<ChangeSchool />} />
                    <Route path="/student/reserve" element={<Resever />} />
                </Route>

                <Route path="/teacher" element={<TeacherProfile />}>
                    <Route path="/teacher/*" element={<TeacherProfile />} />
                    <Route path="/teacher/profilesteacher" element={<Profile />} />
                    <Route path="/teacher/phancong" element={<Assignment />} />

                </Route>
                <Route path="/exam" element={<Exam />}></Route>
                <Route path="/setting" element={<Setting />}></Route>
            </Routes>

        </>
    );
};

export default RouteComponent;
