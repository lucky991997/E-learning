import { Col, Input, Row, Table } from 'antd'
import React, { useState } from 'react'

import { IconDelete, IconEdit, IconList, IconSort } from '../../../shared/component/Icon/Icon'

import Button from '../../../shared/component/Button/Button'
import ModalForm from '../../../shared/component/Modal/Modal'
import FormDept from '../DepartmentOfSubject/form/FormAdd'
import FormDeleteSchoolYear from '../SchoolYear/component/FormSchoolYear/FormDeleteSchoolYear'
import CourseList from './component/CourseList'
import { ILearningProps } from '../Learning'
import { pageSize } from '../../../layout/Index'


const Department = ({learningList}:ILearningProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isModaldelete, setIsModalDelete] = useState(false)
  const [isModalList, setIsModalList] = useState(false)

  const { Search } = Input


  const columns = [
    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
          Tên tổ - bộ môn
          <IconSort />
        </div>
      ),
      dataIndex: 'nameDep',
      key: 'nameDep',
      sorter: (a: any, b: any) => {
        console.log(a.key, b.key)
        return a.key - b.key
      },
    },

    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
          Trưởng bộ môn
          <IconSort />
        </div>),
      sorter: true,
      dataIndex: 'name',
      key: 'name',
      render: (text: any) => {
        return (
          <h3 className="title-16-bold j-center" >
            {text}
          </h3>
        )
      }
    },
    {
      title: '',
      dataIndex: 'subjectInfor',
      key: 'subjectInfor',
      render: () => {
        return (
          <div >
            <IconList onClick={() => setIsModalList(true)}  className='icon mr-24' />
            <IconEdit onClick={() => setIsModalVisible(true)} className='icon mr-24' />
            <IconDelete onClick={() => setIsModalDelete(true)} className='icon' />
          </div>
        )
      }
    }
  ]

  return (
    <>
      <Row className="mb-24" justify='end' style={{ width: '100%' }}>
        <Col >
          <Button variant="primary" icon="add"
            onClick={() => setIsModalVisible(true)}
          >
            Thêm mới
          </Button>
        </Col>
      </Row>


      <div className="learning-title learning-content">
        <div className="title-content__search mb-24">

          <h3 className="title-22">Tổ - Bộ môn</h3>


          <Search onChange={(e) => console.log(e.target.value)} placeholder="input search text" style={{ width: 200 }} />
        </div>

        <div className="table-content">

          <Table pagination={{pageSize:pageSize}} columns={columns} dataSource={learningList} showSorterTooltip={false} />

        </div>

      </div>

      {isModalVisible === true ?
        (
          <ModalForm isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}>
            <FormDept setIsModalVisible={setIsModalVisible} />
          </ModalForm>
        ) : ''
      }
      {isModaldelete === true ?
        (
          <ModalForm isModalVisible={isModaldelete} setIsModalVisible={setIsModalDelete} style={{ width: '435px' }}>
            <FormDeleteSchoolYear setIsModalDelete={setIsModalDelete} title="Xóa Tổ - Bộ Môn" />
          </ModalForm>
        ) : ''
      }
      {isModalList === true ?
        (
          <ModalForm isModalVisible={isModalList} setIsModalVisible={setIsModalList}>
            <CourseList setIsModalList={setIsModalList} />
          </ModalForm>
        ) : ''
      }
    </>
  )
}

export default Department