import { Col, Input, Row, Table } from 'antd'
import React, { useState } from 'react'

import { IconDelete, IconEdit, IconList, IconSort } from '../../../shared/component/Icon/Icon'
import Button from '../../../shared/component/Button/Button'
import ClassList from './component/ClassList'
import ModalForm from '../../../shared/component/Modal/Modal'
import FormAddChangeSchool from '../../StudentProfile/ChangeSchool/form/FormAddChangeSchool'
import FormDeleteSchoolYear from '../SchoolYear/component/FormSchoolYear/FormDeleteSchoolYear'
import FormDepartment from '../Department/form/FormDepartment'
import { ILearningProps } from '../Learning'
import { pageSize } from '../../../layout/Index'


const DepartmentOfSubject = ({learningList, pageSizeConfig}:ILearningProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isModaldelete,setIsModalDelete ] = useState(false)
  const [isModalList, setIsModalList] = useState(false)
 

  const columns = [
    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start ', marginLeft: '24px' }}>
          Mã khoa - khối
          <IconSort />
        </div>
      ),
      dataIndex: 'idKhoi',
      key: 'idKhoi',
      sorter: (a: any, b: any) => {
        console.log(a.key, b.key)
        return a.key - b.key
      },
      render: (text: any) => {
        return (
          <div style={{ textAlign: 'left', marginLeft: '24px' }}>
            {text}
          </div>
        )
      }
    },

    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start ' }}>
          Tên khoa - khối
          <IconSort />
        </div>),
      sorter: true,
      dataIndex: 'nameKhoi',
      key: 'nameKhoi',
      render: (text: any) => {
        return (
          <div style={{ textAlign: 'left', marginLeft: '10px' }}>
            {text}
          </div>
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
            <IconList onClick = {() => setIsModalList(true)} className='icon mr-24' />
            <IconEdit  onClick = {() => setIsModalVisible(true)} className='icon mr-24' />
            <IconDelete onClick= {() => setIsModalDelete(true)} className='icon' />
          </div>
        )
      }
    }
  ]

  const { Search } = Input
  return (
    <>


      <Row className="mb-24" justify='end' style={{ width: '100%' }}>
        <Col >
          <Button variant="primary" icon="add"
           onClick = {() => setIsModalVisible(true)}
          >
            Thêm mới
          </Button>
        </Col>
      </Row>

      <div className="learning-title learning-content">
        <div className="title-content__search mb-24">
          <h2 className="title-22">Khoa Khối</h2>
          <Search onChange={(e) => console.log(e.target.value)} placeholder="input search text" style={{ width: 200 }} />

        </div>


        <div className="table-content">

          <Table pagination={{pageSize:pageSizeConfig}} columns={columns} dataSource={learningList} showSorterTooltip={false} />

        </div>
    
        
      </div>
      {isModalVisible === true ?
        (
          <ModalForm isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}>
            <FormDepartment setIsModalVisible={setIsModalVisible}/>
          </ModalForm>
        ) : ''
      }
      {isModaldelete === true ?
        (
          <ModalForm isModalVisible={isModaldelete} setIsModalVisible={setIsModalDelete}>
              <FormDeleteSchoolYear setIsModalDelete={setIsModalDelete} title="Xóa Khoa - Khối"/>
          </ModalForm>
        ) : ''
      }
      {isModalList === true ?
        (
          <ModalForm isModalVisible={isModalList} setIsModalVisible={setIsModalList}>
              <ClassList />
          </ModalForm>
        ) : ''
      }
    </>
  )
}

export default DepartmentOfSubject