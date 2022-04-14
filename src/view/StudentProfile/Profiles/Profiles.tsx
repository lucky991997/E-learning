import { Select } from 'antd'
import React, { useState } from 'react'
import Button from '../../../shared/component/Button/Button'
import { IconDelete } from '../../../shared/component/Icon/Icon'


import AwardList from './component/AwardList'
import DisciplinaryList from './component/DisciplinaryList'
import ProfileList from './component/ProfileList'

const Profiles = () => {
  const { Option } = Select
  const tabProfiles = [
    {
      name: 'Tất cả hồ sơ',
      component: <ProfileList />,
    },
    {
      name: 'Khen thưởng',
      component: <AwardList />,

    },
    {
      name: 'Kỷ luật',
      component: <DisciplinaryList />,

    },
  ]
  const [itemIndex, setItemIndex] = useState(0)
  const activeTabProfiles = (index: number) => {
    if (index === itemIndex) {
      return 'active-list'
    }
  }
  return (
    <div className="profile">
      <h1 className="main-title mb-32">Hồ sơ học viên</h1>
      <div className="profile-control mb-24">
        <div className="profile-control__select">
          <div className="select mr-16">
            <Select defaultValue="Tất cả khối" style={{ width: '136px' }}>
              <Option value="1">Tất cả khối</Option>
            </Select>
          </div>
          <div className="select">
            <Select defaultValue="2020-2021" style={{ width: '136px' }}>
              <Option value="1">2020-2021</Option>
            </Select>
          </div>
        </div>

        <div className="profile-control__tab">
          {
            tabProfiles.map((item, index) => (
              <div className={`profile-control__tab__title ${activeTabProfiles(index) ? activeTabProfiles(index) : ''}`} key={index} onClick={() => setItemIndex(index)}>
                <h3 className="title-18-black j-center" >{item.name}</h3>
              </div>
            ))
          }
        </div>

      </div>
      <div className="profile-control__event">
        {
          itemIndex === 0 ? (
            <>

              <IconDelete className="icon" />
              <div className="border-h mr-16 ml-16"></div>
              <Button variant="file" style={{ marginRight: '16px' }}>Xuất file</Button>
              <Button variant="primary" icon="add">Thêm mới</Button>
            </>

          ) : (

            <Button variant="primary" icon="add">Thêm mới</Button>

          )
        }

      </div>
      <div className="profile-list">
        {
          tabProfiles.map((item, index) => (
            <div key={index}>
              {
                itemIndex === index ? item.component : ''
              }
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Profiles