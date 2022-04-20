import { Select } from 'antd'
import React from 'react'

import ChangeSchool from './ChangeSchool/ChangeSchool'
import Profiles from './Profiles/Profiles'
import Resever from './Reserve/Reserve'
import '../../styles/view-styles/student-profiles.scss'
import { useLocation } from 'react-router-dom'
import StudentDetail from './Profiles/component/StudentDetail'
const StudentProfiles = () => {
  const { pathname } = useLocation();


  const components = ["/student/profilesstudent", "/student/change", "/student/reserve","/student/info" ];

  const component = components.findIndex((item) => item === pathname);

  const ProfileStudent = () => {
    switch (component) {
      case 0:
        return <Profiles />
      case 1:
        return <ChangeSchool />
      case 2:
        return <Resever />
      case 3: 
        return <StudentDetail/>

      default:
        return <Profiles />
    }

  };
  return (
    ProfileStudent()
  )
}

export default StudentProfiles