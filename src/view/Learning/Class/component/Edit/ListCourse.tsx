import { Table } from 'antd'
import React from 'react'
import {  IconSort } from '../../../../../shared/component/Icon/Icon'

const ListCourse = () => {
  const data = [
    {
      key: 1,
      id: 'D43',
      name: 'Toán Học ',
      type: 'Môn bắt buộc',
      sem1: 4,
      sem2: 4,
    
    },
    {
      key: 2,
      id: 'D43',
      name: 'Toán Học ',
      type: 'Môn bắt buộc',
      sem1: 4,
      sem2: 4,
    
    },
    {
      key: 3,
      id: 'D43',
      name: 'Toán Học ',
      type: 'Môn bắt buộc',
      sem1: 4,
      sem2: 4,
    
    },
    {
      key: 4,
      id: 'D43',
      name: 'Toán Học ',
      type: 'Môn bắt buộc',
      sem1: 4,
      sem2: 4,
    
    },
    {
      key: 5,
      id: 'D43',
      name: 'Toán Học ',
      type: 'Môn bắt buộc',
      sem1: 4,
      sem2: 4,
    
    },
    {
      key: 6,
      id: 'D43',
      name: 'Toán Học ',
      type: 'Môn bắt buộc',
      sem1: 4,
      sem2: 4,
    
    },
    {
      key: 7,
      id: 'D43',
      name: 'Toán Học ',
      type: 'Môn bắt buộc',
      sem1: 4,
      sem2: 4,
    
    },

  
  ]

  const columns = [
    {
      title: 'STT',

      dataIndex: 'key',
      key: 'key',
    },

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
  ]
  return (
    <div className="table-content">
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default ListCourse
