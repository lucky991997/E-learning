import { Col, Row } from 'antd'
import React, { useState } from 'react'
import BoxTitle from '../../shared/component/BoxTitle/BoxTitle'


import ConfigSetting from './component/ConfigSetting'
import '../../styles/view-styles/setting.scss'
import InfoSchool from './component/InfoSchool'
import SettingClass from './component/SettingClass'
import SettingCourse from './component/SettingCourse'
import SettingLevel from './component/SettingLevel'
import SettingUser from './component/SettingUser'

export interface IShowComponent {
  setShowComponent: any;
}

const Setting = () => {
  const [showComponent, setShowComponent] = useState(true)
  const boxTitile = [
    {
      variant: 'primary',
      title: 'Cấu hình',
      content: 'Theme, các thông tin khác về cấu hình',
      component: <ConfigSetting setShowComponent={setShowComponent} />,
    },
    {
      variant: 'primary',
      title: 'Thông tin trường',
      content: 'Thông tin chung của trường, các cơ sở',
      component: <InfoSchool setShowComponent={setShowComponent} />,

    },
    {
      variant: 'primary',
      title: 'Người dùng hệ thống',
      content: 'Phần nhóm người dùng, quản lý thông tin người dùng và phân quyền sử dụng',

      component: <SettingUser setShowComponent={setShowComponent} />,

    },
    {
      variant: 'secondary',
      title: 'Thiết lập lớp học',
      content: 'Loại lớp cơ bản, nâng cao',
      component: <SettingClass setShowComponent={setShowComponent} />,

    },
    {
      variant: 'secondary',
      title: 'Thiết lập môn học',
      content: 'Thông tin các hệ đào tạo của trường',
      component: <SettingCourse setShowComponent={setShowComponent} />,

    },
    {
      variant: 'secondary',
      title: 'Quản lý trình độ đào tạo',
      content: 'Thông tin các hệ đào tạo của trường',
      component: <SettingLevel setShowComponent={setShowComponent} />,

    },
  ]
  const [itemIndex, setItemIndex] = useState<number>(0)

  console.log(itemIndex)

  const handleShowComponent = (index: number) => {
    setItemIndex(index)
    setShowComponent(false)
  }
  return (
    <div className="setting">
      {
        showComponent === true ? (
          <>
            <h1 className="main-title mb-32">Cài đặt hệ thống</h1>
            <Row>
              {
                boxTitile && boxTitile.map((item, index) => (
                  <Col span="7" style={{ marginBottom: '40px' }} key={index}>
                    <BoxTitle
                      variant={item.variant}
                      title={item.title}
                      content={item.content}
                      onClick={() => handleShowComponent(index)}
                    />
                  </Col>
                ))
              }
            </Row>


          </>
        ) :
          (
            boxTitile && boxTitile.map((item, index) => (
              <div key={index}>
                {

                  itemIndex === index ? item.component : ''
                }
              </div>
            ))
          )
      }
    </div>


  )
}

export default Setting