import { Col, Input, Row, Select, Table } from 'antd'
import React, { useState } from 'react'


import Button from '../../../shared/component/Button/Button'
import { IconDelete, IconEdit, IconSort } from '../../../shared/component/Icon/Icon'
import ModalForm from '../../../shared/component/Modal/Modal'
import FormDeleteSchoolYear from '../SchoolYear/component/FormSchoolYear/FormDeleteSchoolYear'
import FormSubject from './form/FormSubject'


const Subject = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isModaldelete,setIsModalDelete ] = useState(false)
  interface ISubject  {
    key: number, 
    id: string,
    name: string,
    type: string,
    sem1: number, 
    sem2: number,
  }
  const data:ISubject[] = [
    {
      key: 1,
      id: 'KHTN',
      name: 'Toán ',
      type: 'Môn bắt buộc',
      sem1: 4,
      sem2: 4,

    },
    {
      key: 2,
      id: 'VHXH',
      name: 'Ngữ Văn',
      type: 'Môn tự chọn',
      sem1: 4,
      sem2: 4,

    },
    {
      key: 3,
      id: 'AV',
      name: 'Anh Văn',
      type: 'Môn tự chọn',
      sem1: 4,
      sem2: 4,

    },
    {
      key: 4,
      id: 'KHTN',
      name: 'Toán ',
      type: 'Môn bắt buộc',
      sem1: 4,
      sem2: 4,

    },
    {
      key: 5,
      id: 'VHXH',
      name: 'Ngữ Văn',
      type: 'Môn tự chọn',
      sem1: 4,
      sem2: 4,

    },
    {
      key: 6,
      id: 'AV',
      name: 'Anh Văn',
      type: 'Môn tự chọn',
      sem1: 4,
      sem2: 4,

    },
    {
      key: 7,
      id: 'KHTN',
      name: 'Toán ',
      type: 'Môn bắt buộc',
      sem1: 4,
      sem2: 4,

    },
    {
      key: 8,
      id: 'VHXH',
      name: 'Ngữ Văn',
      type: 'Môn tự chọn',
      sem1: 4,
      sem2: 4,

    },
  ]

  const columns = [

    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
          Mã môn học
          <IconSort />
        </div>),
      sorter: true,
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
          Tên môn học
          <IconSort />
        </div>),
      sorter: true,
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
          Loại môn
          <IconSort />
        </div>),
      sorter: true,
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Số tiết HK1',
      dataIndex: 'sem1',
      key: 'sem1',

    },
    {
      title: 'Số tiết HK2',
      dataIndex: 'sem2',
      key: 'sem2',

    },
    {
      title: '',
      dataIndex: 'subjectInfor',
      key: 'subjectInfor',
      render: () => {
        return (
          <div >
            <IconEdit  onClick = {() => setIsModalVisible(true)} className='icon mr-24' />
            <IconDelete  onClick = {() => setIsModalDelete(true)} className='icon' />
          </div>
        )
      }
    }
  ]
  const [selectRow, setSelectRow] = useState<ISubject[]>([])
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: ISubject[]) => {
      setSelectRow(selectedRows)
    },
  };

  const { Search } = Input
  const { Option } = Select
  return (
    <>
      <Row className="mb-24" justify='space-between' style={{ width: '100%' }}>
        <Col style={{ display: 'flex', alignItems: 'center' }}>
          <div className="select mr-32" style={{ marginBottom: '8px' }}>
            <h3 className="title-16-bold" >Khối:</h3>
            <Select defaultValue={"khối 6"} >
              <Option key="1">Khối 6</Option>
              <Option key="2">Khối 7</Option>
            </Select>
          </div>
          <div className="select" style={{ marginBottom: '8px' }}>
            <h3 className="title-16-bold">Lớp:</h3>
            <Select defaultValue={"6A1"} >
              <Option key="1">6A1</Option>
              <Option key="2">6A2</Option>
            </Select>
          </div>
        </Col>
        <Col style={{ display: 'flex', alignItems: 'center' }}>
          <IconDelete className="icon mr-16 " onClick = {() => setIsModalDelete(true)}  style={{ color:`${selectRow.length > 0 ? '#FF7506' :'#C9C4C0'}`  }} />
          <div className="border-left mr-16"></div>
          <Button variant="primary" icon="add"
             onClick = {() => setIsModalVisible(true)}
          >
            Thêm mới
          </Button>
        </Col>
      </Row>
      <Row>
        <div className="learning-title learning-content">

          <div className="title-content__search mb-24">

            <h3 className="title-22">Môn Học</h3>


            <Search onChange={(e) => console.log(e.target.value)} placeholder="input search text" style={{ width: 200 }} />
          </div>

          <div className="table-content">

            <Table rowSelection={{type:'checkbox', ...rowSelection  }} columns={columns} dataSource={data} showSorterTooltip={false} />

          </div>

        </div>
      </Row>




      {isModalVisible === true ?
        (
          <ModalForm isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}>
            <FormSubject setIsModalVisible={setIsModalVisible}/>
          </ModalForm>
        ) : ''
      }
      {isModaldelete === true ?
        (
          <ModalForm isModalVisible={isModaldelete} setIsModalVisible={setIsModalDelete}>
              <FormDeleteSchoolYear setIsModalDelete={setIsModalDelete} title="Xóa"/>
          </ModalForm>
        ) : ''
      }
    </>


  )
}

export default Subject