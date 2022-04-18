import React, { Fragment, useState } from 'react'
import { IconArrowRight, IconDelete, IconEdit } from '../../../../../shared/component/Icon/Icon'
import { EditProps } from '../../Class'
import '../../../../../styles/view-styles/edit-class.scss'
import { Col, Row } from 'antd'
import ListStudent from './ListStudent'
import ListCourse from './ListCourse'
import ModalForm from '../../../../../shared/component/Modal/Modal'
import FormClass from '../form/FormClass'
import FormDeleteSchoolYear from '../../../SchoolYear/component/FormSchoolYear/FormDeleteSchoolYear'
import FormDeleteMain from '../../../../../shared/component/Form/FormDeleteMain'

const EditClass = ({ setShowEdit }: EditProps) => {
  const editList = [
    {
      name: 'Danh sách học viên',
      component: <ListStudent />,
    },
    {
      name: 'Danh sách môn học',
      component: <ListCourse />,
    },
  ]
  const [itemIndex, setItemIndex] = useState(0)

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isModaldelete, setIsModalDelete] = useState(false)
  const handleListIndex = (index: number) => {
    setItemIndex(index)
  }
  const activeIndex = (index: number) => {
    if (itemIndex === index) {
      return 'active-list'
    }
  }
  return (
    <div className="edit-class" >
      <div className="edit-class__title mb-24">
        <h2 className="title-18-black" onClick={() => setShowEdit(true)} style={{ cursor: 'pointer' }}>Khai báo dữ liệu</h2>
        <IconArrowRight className="icon" style={{ margin: '0 30px' }} />
        <h2 className="title-18-black" onClick={() => setShowEdit(true)} style={{ cursor: 'pointer' }}>Lớp học</h2>
        <IconArrowRight className="icon" style={{ margin: '0 30px' }} />
        <h1 className="main-title">Chi tiết lớp học</h1>
      </div>

      <div className="edit-class__info">
        <div className="edit-class__info__content">
          <h3 className="title-18-orange">Thông tin chung</h3>
          <div>
          <IconEdit onClick={() => setIsModalVisible(true)} className='icon mr-24' />
            <IconDelete onClick={() => setIsModalDelete(true)} className='icon' />
          </div>
        </div>
        <Row>
          <Col span='6'>
            <Row className="mb-16">
              <h3 className="title-16-bold mr-24" style={{ minWidth: '90px' }}>Niên khoá:</h3>
              <span className="title-16" >2020 - 2021</span>

            </Row>
            <Row className="mb-16">
              <h3 className="title-16-bold mr-24" style={{ minWidth: '90px' }}>Khoa - Khối:</h3>
              <span className="title-16" >Khối 6</span>
            </Row>
            <Row className="mb-16">
              <h3 className="title-16-bold mr-24" style={{ minWidth: '90px' }}>Mã lớp học:</h3>
              <span className="title-16" >2020-6A1</span>
            </Row>
            <Row className="mb-16">
              <h3 className="title-16-bold mr-24" style={{ minWidth: '90px' }}>Tên lớp học:</h3>
              <span className="title-16" >6A1</span>
            </Row>
          </Col>
          <Col span='6'>
            <Row className="mb-16">
              <h3 className="title-16-bold " style={{ minWidth: '152px' }}>Giáo viên chủ nhiệm:</h3>
              <span className="title-16" >Phạm Thị B</span>
            </Row>
            <Row className="mb-16">
              <h3 className="title-16-bold " style={{ minWidth: '152px' }}>Số lượng học viên:</h3>
              <span className="title-16" >45 học viên</span>
            </Row>
            <Row className="mb-16">
              <h3 className="title-16-bold " style={{ minWidth: '152px' }}>Loại lớp học:</h3>
              <span className="title-16" >Lớp học căn bản</span>
            </Row>
            <Row className="mb-16">
              <h3 className="title-16-bold " style={{ minWidth: '152px' }}>Số lượng môn học:</h3>
              <span className="title-16" >10 môn học</span>
            </Row>
          </Col>
          <Col span='12'>
            <Row>

              <h3 className="title-16-bold mr-16" style={{ alignItems: 'flex-start' }}>Mô tả:</h3>
              <span className="title-16" style={{ width: '300px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus quam vel aliquam lacinia.</span>
            </Row>

          </Col>
        </Row>
      </div>

      <div className="edit-class__list mt-24">
        <div className="edit-class__list__content mb-24" style={{ width: '519px' }}>
          {
            editList && editList.map((item, index) => (
              <div className={`edit-class__list__content-title ${activeIndex(index) ? activeIndex(index) : ''}`} key={index} onClick={() => handleListIndex(index)}>
                <h3 className='title-18-black' style={{ marginLeft: '10px' }}>{item.name}</h3>
              </div>

            ))
          }
        </div>
        {
          editList && editList.map((item, index) => (
            <div className="edit-class__list__table" key={index}>
              {itemIndex === index ? item.component : ''}
            </div>

          ))

        }
      </div>
      {isModalVisible === true ?
        (
          <ModalForm isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}>
            <FormClass setIsModalVisible={setIsModalVisible} />
          </ModalForm>
        ) : ''
      }
      {isModaldelete === true ?
        (
          <ModalForm isModalVisible={isModaldelete} setIsModalVisible={setIsModalDelete}>
            <FormDeleteMain setIsModalDelete={setIsModalDelete}  />
          </ModalForm>
        ) : ''
      }

    </div>
  )
}

export default EditClass