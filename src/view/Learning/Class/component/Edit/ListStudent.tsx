import { Table } from 'antd'
import React, { useState } from 'react'
import { IconEdit, IconSort } from '../../../../../shared/component/Icon/Icon'
import ModalForm from '../../../../../shared/component/Modal/Modal'
import Status from '../../../../../shared/component/status/Status'
import FormSubject from '../../../Subject/form/FormSubject'

const ListStudent = () => {


  const data = [
    {
      key: 1,
      id: '2020-6A',
      name: 'Nguyễn Văn A ',
      teacher: 'Trần Quốc Tuấn',
      year: '2020-2021',
      startDate: '05/09/2020',
      status: 'isStudy'
    },
    {
      key: 2,
      id: '2020-6B',
      name: 'Nguyễn Văn B',
      teacher: 'Trần Quốc Tuấn',
      year: '2020-2021',
      status: 'changSchool',

      startDate: '05/09/2020',

    },
    {
      key: 3,
      id: '2020-6C',
      name: 'Nguyễn Văn C',
      teacher: 'Trần Quốc Tuấn',
      year: '2020-2021',
      status: 'changClass',
      startDate: '05/09/2020',

    },
    {
      key: 4,
      id: '2020-7A',
      name: 'Nguyễn Văn D',
      teacher: 'Trần Quốc Tuấn',
      year: '2020-2021',
      status: 'noStudy',
      startDate: '05/09/2020',


    },
    {
      key: 5,
      id: '2020-7B',
      name: 'Nguyễn Văn E',
      teacher: 'Trần Quốc Tuấn',
      year: '2020-2021',
      status: 'graduate',
      startDate: '05/09/2020',


    },
    {
      key: 6,
      id: '2020-8A',
      name: 'Nguyễn Văn F',
      teacher: 'Trần Quốc Tuấn',
      year: '2020-2021',
      status: 'graduate',
      startDate: '05/09/2020',

    },
    {
      key: 7,
      id: '2020-8B',
      name: 'Nguyễn Văn G',
      teacher: 'Trần Quốc Tuấn',
      year: '2020-2021',
      status: 'graduate',
      startDate: '05/09/2020',

    },
    {
      key: 8,
      id: '2020-9A',
      name: 'Nguyễn Văn I',
      teacher: 'Trần Quốc Tuấn',
      year: '2020-2021',
      status: 'isStudy',
      startDate: '05/09/2020',

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
          Mã học viên
          <IconSort />
        </div>),
      sorter: true,
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
          Tên học viên
          <IconSort />
        </div>),
      sorter: true,
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Niên khoá',
      dataIndex: 'year',
      key: 'year',
    },
    {
      title: 'Ngày nhập học',
      dataIndex: 'startDate',
      key: 'startDate',
    },
    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center'}}>
          Tình trạng
          <IconSort />
        </div>),
      sorter: true,
      dataIndex: 'status',
      key: 'status',
      render: (status: any) => {

        switch (status) {
          case 'isStudy': 
            return <Status variant='open'>Đang theo học</Status>
            case 'changSchool': 
            return <Status variant='change'>Đã chuyển trường</Status>
            case 'changClass': 
            return <Status variant='coming'>Đã chuyển lớp</Status>
            case 'noStudy': 
            return <Status styles={{width: '127px'}} variant='end'>Đả thôi học</Status>
            case 'graduate': 
            return <Status variant='open'>Đang theo học</Status>
          default:
            return status
        }

      }
    },
    {
      title: '',
      dataIndex: 'subjectInfor',
      key: 'subjectInfor',
      render: () => {
        return (
          <div >
            <IconEdit onClick={() =>console.log(123)} className='icon mr-24' />
          </div>
        )
      }
    }
  ]
  return (
    <div className="table-content">
      <Table columns={columns} dataSource={data} />
     
    </div>
  )
}

export default ListStudent
