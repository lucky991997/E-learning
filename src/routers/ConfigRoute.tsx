import React from "react";
import { Route, Routes } from "react-router-dom";
import FormDeleteMain from "../shared/component/Form/FormDeleteMain";
import FormExport from "../shared/component/Form/FormExport";
import { InputForm } from "../shared/component/Input/Input";
import ForgotPassword from "../view/Auth/ForgotPassword/ForgotPassword";
import Login from "../view/Auth/Login/Login";
import Logout from "../view/Auth/Logout/Logout";
import FormClass from "../view/Learning/Class/component/form/FormClass";
import FormDepartment from "../view/Learning/Department/component/form/FormDepartment";
import FormDept from "../view/Learning/DepartmentOfSubject/component/form/FormAdd";
import FormPoint from "../view/Learning/PointType/component/form/FormPoint";
import FormAddSchoolYear from "../view/Learning/SchoolYear/component/FormSchoolYear/FormAddSchoolYear";
import FormDeleteSchoolYear from "../view/Learning/SchoolYear/component/FormSchoolYear/FormDeleteSchoolYear";
import FormUpdateSchoolYear from "../view/Learning/SchoolYear/component/FormSchoolYear/FormUpdateSchoolYear";
import FormSubject from "../view/Learning/Subject/component/form/FormSubject";


const ConfigRoute = () => {
  return (
    <>
      {/* <FormAddSchoolYear/>
    <FormUpdateSchoolYear/>
    <FormDeleteSchoolYear/> */}
      {/* <FormDeleteMain
        handleCancel={() => console.log('Cancel')}
        handleDelete={() => console.log('Deleted')}
      /> */}
      {/* <InputForm/> */}
      {/* <FormDept /> */}
      {/* <FormDepartment/> */}
      {/* <FormSubject/> */}
      {/* <FormClass/> */}
      {/* <FormExport/> */}
      <FormPoint/>
      <Routes>
        <Route path="*" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgot" element={<ForgotPassword />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
    </>
  );
};

export default ConfigRoute;
