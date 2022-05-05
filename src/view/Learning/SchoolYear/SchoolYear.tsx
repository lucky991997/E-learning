import { Col, Input, Row, Table } from 'antd'
import React, { useState } from 'react'

import Button from '../../../shared/component/Button/Button'
import { IconDelete, IconEdit, IconSort } from '../../../shared/component/Icon/Icon'
import ModalForm from '../../../shared/component/Modal/Modal'
import { ILearningProps } from '../Learning'
import FormAddSchoolYear from './component/FormSchoolYear/FormAddSchoolYear'
import FormDeleteSchoolYear from './component/FormSchoolYear/FormDeleteSchoolYear'
import {pageSize} from '../../../layout/Index'

const SchoolYear = ({learningList}:ILearningProps) => {

  const columns = [
    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
          STT
          <IconSort />
        </div>
      ),
      dataIndex: 'key',
      key: 'key',
      sorter: (a: any, b: any) => {
        console.log(a.key, b.key)
        return a.key - b.key
      },
    },

    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
          Niên Khóa
          <IconSort />
        </div>),
      sorter: true,
      dataIndex: 'schoolYear',
      key: 'schoolYear',
    },
    {
      title: 'Thời gian bắt đầu',
      dataIndex: 'startDate',
      key: 'startDate',
    },
    {
      title: 'Thời gian kết thúc',
      dataIndex: 'endDate',
      key: 'endDate',
    },
    {
      title: '',
      dataIndex: 'subjectInfor',
      key: 'subjectInfor',
      render: () => {
        return (
          <div >
            <IconEdit onClick={() => setIsModalVisible(true)} className='icon mr-24' />
            <IconDelete onClick={() => setIsModalDelete(true)} className='icon' />
          </div>
        )
      }
    }
  ]
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isModaldelete,setIsModalDelete ] = useState(false)
  const { Search } = Input

  return (
    <>
      <Row className="mb-24" justify='end' style={{ width: '100%' }}>
        <Col >
          <Button onClick={() => setIsModalVisible(true)} variant="primary" icon="add">
            Thêm mới
          </Button>
        </Col>
      </Row>
      <Row>
        <div className="learning-title learning-content">

          <div className="title-content__search mb-24">

            <h3 className="title-22">Niên Khóa</h3>


            <Search onChange={(e) => console.log(e.target.value)} placeholder="input search text" style={{ width: 200 }} />
          </div>

          <div className="table-content">

            <Table pagination={{pageSize:pageSize}} columns={columns} dataSource={learningList} showSorterTooltip={false} />

          </div>

        </div>
      </Row>

      {isModalVisible === true ?
        (
          <ModalForm isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}>
            <FormAddSchoolYear setIsModalVisible={setIsModalVisible} />
          </ModalForm>
        ) : ''
      }
      {isModaldelete === true ?
        (
          <ModalForm isModalVisible={isModaldelete} setIsModalVisible={setIsModalDelete} style={{width:'435px'}}>
            <FormDeleteSchoolYear setIsModalDelete={setIsModalDelete}/>
          </ModalForm>
        ) : ''
      }
    </>


  )
}

export default SchoolYear