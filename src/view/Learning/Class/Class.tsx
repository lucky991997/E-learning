import { Col, Input, Row, Select, Table } from 'antd'
import React, { useState } from 'react'

import { IconDelete, IconEdit, IconEye, IconSort } from '../../../shared/component/Icon/Icon'
import Button from '../../../shared/component/Button/Button'

export type EditProps ={
  setShowEdit: any,
}
interface IData {
  key: number,
  id: string,
  name: string,
  teacher: string,

}
const Class = ({ setShowEdit }: EditProps) => {

  const data: IData[] = [
    {
      key: 1,
      id: '2020-6A',
      name: '6A ',
      teacher: 'Trần Quốc Tuấn',


    },
    {
      key: 2,
      id: '2020-6B',
      name: '6B',
      teacher: 'Trần Quốc Tuấn',


    },
    {
      key: 3,
      id: '2020-6C',
      name: '6C',
      teacher: 'Trần Quốc Tuấn',

    },
    {
      key: 4,
      id: '2020-7A',
      name: '7A ',
      teacher: 'Trần Quốc Tuấn',


    },
    {
      key: 5,
      id: '2020-7B',
      name: '7B',
      teacher: 'Trần Quốc Tuấn',


    },
    {
      key: 6,
      id: '2020-8A',
      name: '8A',
      teacher: 'Trần Quốc Tuấn',

    },
    {
      key: 7,
      id: '2020-8B',
      name: '8B ',
      teacher: 'Trần Quốc Tuấn',
    },
    {
      key: 8,
      id: '2020-9A',
      name: '9A',
      teacher: 'Trần Quốc Tuấn',
    },
  ]
  const { Search } = Input
  const { Option } = Select


  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: IData[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: IData) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

  const handleShowEditClass = () => {
    setShowEdit(false)
  }
  const columns = [

    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
          Mã Lớp
          <IconSort />
        </div>),
      sorter: true,
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
          Tên lớp
          <IconSort />
        </div>),
      sorter: true,
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
          Giáo viên chủ nhiệm
          <IconSort />
        </div>),
      sorter: true,
      dataIndex: 'teacher',
      key: 'teacher',
    },
    {
      title: '',
      dataIndex: 'subjectInfor',
      key: 'subjectInfor',
      render: () => {
        return (
          <div >
            <IconEye onClick={() => handleShowEditClass()} className='icon mr-24' />
            <IconEdit onClick={() => console.log(123)} className='icon mr-24' />
            <IconDelete className='icon' />
          </div>
        )
      }
    }
  ]
  return (
    <>


      <Row className="mb-24" justify='space-between' style={{ width: '100%' }}>
        <Col style={{ display: 'flex', alignItems: 'center' }}>
          <div className="select mr-32" style={{ marginBottom: '8px' }}>
            <Select defaultValue="Tất cả khối" >
              <Option key="1">Khối 6</Option>
              <Option key="2">Khối 7</Option>
              <Option key="2">Khối 8</Option>
            </Select>
          </div>

        </Col>
        <Col style={{ display: 'flex', alignItems: 'center' }}>
          <IconDelete className="icon mr-16 " onClick={() => console.log(123)} style={{ color: '#C9C4C0' }} />
          <div className="border-left mr-16"></div>
          <Button variant="file" style={{ marginRight: '16px' }}>
            Xuất file
          </Button>
          <Button variant="primary" icon="add">
            Thêm mới
          </Button>
        </Col>
      </Row>
      <Row>
        <div className="learning-title learning-content" >

          <div className="learning-title-table__search mb-24">

            <h3 className="title-22">Môn Học</h3>


            <Search onChange={(e) => console.log(e.target.value)} placeholder="input search text" style={{ width: 200 }} />
          </div>

          <div className="table-content">

            <Table rowSelection={{ type: 'checkbox', ...rowSelection }} columns={columns} dataSource={data} showSorterTooltip={false} />

          </div>

        </div>
      </Row>



    </>


  )
}

export default Class