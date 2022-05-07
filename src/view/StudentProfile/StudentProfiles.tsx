import { Select } from 'antd'


import ChangeSchool from './ChangeSchool/ChangeSchool'
import Profiles from './Profiles/Profiles'
import Resever from './Reserve/Reserve'
import '../../styles/view-styles/student-profiles.scss'
import { useLocation } from 'react-router-dom'
import StudentDetail from './Profiles/component/StudentDetail'
import { Student } from '../../core/enums/EnumsStudentType'
import { useSelector } from 'react-redux'
import { RootState } from '../../core'


export interface IStudent  {
  studentList: Array<Student>
}

const StudentProfiles = () => {
  const { pathname } = useLocation();

  const { pageSizeConfig } = useSelector((state:RootState) => state.ConfigPageReducer)

  const components = ["/student/profilesstudent", "/student/change", "/student/reserve","/student/info" ];

  const component = components.findIndex((item) => item === pathname);

  const ProfileStudent = () => {
    switch (component) {
      case 0:
        return <Profiles />
      case 1:
        return <ChangeSchool  pageSizeConfig={pageSizeConfig}/>
      case 2:
        return <Resever pageSizeConfig={pageSizeConfig}/>
      case 3: 
        return <StudentDetail />

      default:
        return <Profiles />
    }

  };
  return (
    ProfileStudent()
  )
}

export default StudentProfiles