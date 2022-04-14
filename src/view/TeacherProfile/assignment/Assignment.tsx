import { Col, Row, Select, Table } from 'antd'
import React, { useState } from 'react'
import Button from '../../../shared/component/Button/Button'
import { IconArrowRight, IconDelete } from '../../../shared/component/Icon/Icon'
import AssignList from './component/AssignList'
import TitleList from './component/TitleList'

const Assignment = () => {
  const { Option } = Select
  const tableContent = [
    {
      name: 'Tô An',
    },
    {
      name: 'Hoàng Mỹ Trưng',
    },

    {
      name: 'Nguyễn Kỳ Nguyên',
    },
    {
      name: 'Mộc Tâm Tâm',
    },
    {
      name: 'Trần Thoa Hân',
    },
    {
      name: 'Nguyễn Ngọc Dệp',
    }


  ]
  const [active, setActive] = useState(0)


  const handleActive = (index: number) => {
    setActive(index)
  }
  const activeTableContent = (index: number) => {
    if (active === index) {
      return 'active-tab-vertical'
    }
    else {
      return ''
    }
  }


  const [showTitleList, setShowTitleList] = useState(true)

  return (
    <div className="assign">
      {
        showTitleList === true ? (
          <h1 className="main-title mb-32">Phân công giảng dạy</h1>
        ) : (
          <div className="assign__title mb-32">
            <h3 className="title-18-black mr-32">Phân công giảng dạy</h3>
            <IconArrowRight className="icon  mr-32" />
            <h1 className="main-title">Danh sách chủ đề</h1>
          </div>
        )
      }


      <Row>
        <Col span="4" className="mr-24">


          <div className="tab-control mr-24">
            <div className="tab-control__select">
              <h3 className="title-16" style={{ color: '#fff', marginBottom: '8px' }} >GV Lương Hoàng</h3>

              <div className="select mb-16">
                <h3 className="title-16-bold" style={{ color: '#fff' }}>Niên Khóa:</h3>
                <Select defaultValue="2020-2021">
                  <Option key='1'>2020-2021</Option>
                  <Option key='2'>2019-2020</Option>
                </Select>
              </div>
              <div className="select" style={{ marginBottom: '8px' }}>
                <h3 className="title-16-bold" style={{ color: '#fff', marginRight: '27px' }}>Bộ môn</h3>
                <Select defaultValue="Toán Hình ">
                  <Option key='1'>Toán Hình </Option>
                  <Option key='2'>Văn học</Option>
                </Select>
              </div>
            </div>
            {
              tableContent.map((item, index) => (
                <div key={index} className={`tab-control__content ${activeTableContent(index)}`} onClick={() => handleActive(index)}>
                  <h3 className="title-18" style={{ color: '#000', display: 'flex' }}>{item.name}</h3>
                </div>
              ))
            }

          </div>
        </Col>
        <Col span="18">
          <div className="assign__content">
            <div className="assign__content__event mb-24">
              {
                showTitleList === true ? (
                  <>
                    <IconDelete className="icon mr-16" />
                    <div className="border-h mr-16"></div>
                    <Button variant="primary" icon="add">Thêm</Button>

                  </>
                ) : (
                  <Button variant="primary" onClick={() => setShowTitleList(true)} style={{ width: '238px' }}>Phân công giảng dạy</Button>
                )
              }
            </div>
            <div className="assign__content__list">
              {
                showTitleList === true ? (
                  <>
                    <h3 className="title-22 mb-32" >Danh sách phân công giảng dạy</h3>
                    <AssignList setShowTitleList={setShowTitleList} />
                  </>
                ) : (
                  <>
                    <TitleList />
                  </>
                )
              }

              <div className="title__show-value" style={{ bottom: 0 }}>
                <h3 className="title-16">
                  Hiển thị
                  <input defaultValue="8" onChange={(e) => e.target.value} />
                  hàng trong mỗi trang
                </h3>
              </div>

            </div>

          </div>
        </Col>
      </Row>


    </div>
  )
}

export default Assignment