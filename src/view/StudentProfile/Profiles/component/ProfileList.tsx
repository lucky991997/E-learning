import { Input, Table } from 'antd'
import React from 'react'
import { IconDelete, IconEdit, IconSort, IconUpdate } from '../../../../shared/component/Icon/Icon'
import Status from '../../../../shared/component/status/Status'


const ProfileList = () => {
  const data = [
    {
      key: 1,
      id: '2020-6A',
      name: 'Nguyễn Văn A ', 
      birthday: '12/02/1998',
      gender: 'Nam',
      nation: 'Kinh',
      class: '6A',
      status: 'isStudy',
    },
    {
      key: 2,
      id: '2020-6B',
      name: 'Nguyễn Văn B',
      birthday: '12/02/1998',
      gender: 'Nam',
      nation: 'Kinh',
      class: '6A',
      status: 'isStudy',

    },
    {
      key: 3,
      id: '2020-6C',
      name: 'Nguyễn Văn C',
      birthday: '12/02/1998',
      gender: 'Nam',
      nation: 'Kinh',
      class: '6A',
      status: 'graduate',

    },
    {
      key: 4,
      id: '2020-7A',
      name: 'Nguyễn Văn D',
      birthday: '12/02/1998',
      gender: 'Nam',
      nation: 'Kinh',
      class: '6A',
      status: 'noStudy',

    },
    {
      key: 5,
      id: '2020-7B',
      name: 'Nguyễn Văn E',
      birthday: '12/02/1998',
      gender: 'Nam',
      nation: 'Kinh',
      class: '6A',
      status: 'noStudy',


    },
    {
      key: 6,
      id: '2020-8A',
      name: 'Nguyễn Văn F',
      birthday: '12/02/1998',
      gender: 'Nam',
      nation: 'Kinh',
      class: '6A',
      status: 'changSchool',

    },
    {
      key: 7,
      id: '2020-8B',
      name: 'Nguyễn Văn G',
      birthday: '12/02/1998',
      gender: 'Nam',
      nation: 'Kinh',
      class: '6A',
      status: 'changClass',
    },
    {
      key: 8,
      id: '2020-9A',
      name: 'Nguyễn Văn I',
      birthday: '12/02/1998',
      gender: 'Nam',
      nation: 'Kinh',
      class: '6A',
      status: 'graduate',
    },
  ]

  const columns = [
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
      title: (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
          Ngày sinh
          <IconSort />
        </div>),
      sorter: true,
      dataIndex: 'birthday',
      key: 'birthday',
    },
    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
          Giới tính
          <IconSort />
        </div>),
      sorter: true,
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
          Dân tộc
          <IconSort />
        </div>),
      sorter: true,
      dataIndex: 'nation',
      key: 'nation',
    },
    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
          Lớp
          <IconSort />
        </div>),
      sorter: true,
      dataIndex: 'class',
      key: 'class',
    },
    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
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
            return <Status styles={{ width: '127px' }} variant='end'>Đả thôi học</Status>
          case 'graduate':
            return <Status variant='graduate'>Đã tốt nghiệp</Status>
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
            <IconEdit onClick={() => console.log(123)} className='icon mr-24' />
            <IconUpdate onClick={() => console.log(123)} className='icon mr-24'/>
            <IconDelete onClick={() => console.log(123)} className='icon mr-24'/>
          
          
          </div>
        )
      }
    }
  ]
  const { Search } = Input

  return (
    <>
      <div className="title-content__search mb-24">
        <h2 className="title-22">Danh sách học viên</h2>
        <Search onChange={(e) => console.log(e.target.value)} placeholder="input search text" style={{ width: 200 }} />

      </div>

      <div className="table-content">
        <Table rowSelection={{type: 'checkbox'}} showSorterTooltip={false} columns={columns} dataSource={data} />
      </div>
      <div className="title__show-value" style={{bottom: 0}}>
        <h3 className="title-16">
          Hiển thị
          <input defaultValue="8" onChange={(e) => e.target.value} />
          hàng trong mỗi trang
        </h3>
      </div>
    </>
  )
}

export default ProfileList
