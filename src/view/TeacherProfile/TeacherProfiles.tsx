import React from 'react'
import Assignment from './assignment/Assignment'
import Profile from './Profiles/Profile'

import '../../styles/main-styles/tab-vertical.scss'
import '../../styles/view-styles/teacher-profile.scss'
import { useLocation } from 'react-router-dom'
import InfoTeacher from './Profiles/component/InfoTeacher'

const TeacherProfile = () => {
  const { pathname } = useLocation();
  const components = ["/teacher/profilesstudent", "/teacher/phancong", "/teacher/info"];
  const component = components.findIndex((item) => item === pathname);
  const ProfileTeacher = () => {
    switch (component) {
      case 0:
        return <Profile />
      case 1:
        return <Assignment />
      case 2: 
        return <InfoTeacher/>
      default:
        return <Profile />
    }

  };
  return (
    ProfileTeacher()
  )
}

export default TeacherProfile