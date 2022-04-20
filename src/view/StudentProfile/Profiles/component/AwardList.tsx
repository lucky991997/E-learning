import { Input, Table } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {IconEye, IconSort } from '../../../../shared/component/Icon/Icon'
import ModalForm from '../../../../shared/component/Modal/Modal'



const AwardList = () => {
  const [isModalVisible, setIsModalVisible] = useState()
  const data = [
    {
      key: 1,
      id: '20206A',
      name: 'Nguyễn Văn A ',
      birthday: '12/02/1998',
      gender: 'Nam',
      awards: 1,
    },
    {
      key: 2,
      id: '20206B',
      name: 'Nguyễn Văn B',
      birthday: '12/02/1998',
      gender: 'Nam',
      awards: 4,

    },
    {
      key: 3,
      id: '20206C',
      name: 'Nguyễn Văn C',
      birthday: '12/02/1998',
      gender: 'Nam',
      awards: 1,

    },
    {
      key: 4,
      id: '20207A',
      name: 'Nguyễn Văn D',
      birthday: '12/02/1998',
      gender: 'Nam',
      awards: 3,

    },
    {
      key: 5,
      id: '20207B',
      name: 'Nguyễn Văn E',
      birthday: '12/02/1998',
      gender: 'Nam',
      awards: 2,


    },
    {
      key: 6,
      id: '20208A',
      name: 'Nguyễn Văn F',
      birthday: '12/02/1998',
      gender: 'Nam',
      awards: 1,

    },
    {
      key: 7,
      id: '20208B',
      name: 'Nguyễn Văn G',
      birthday: '12/02/1998',
      gender: 'Nam',
      awards: 5,
    },
    {
      key: 8,
      id: '20209A',
      name: 'Nguyễn Văn I',
      birthday: '12/02/1998',
      gender: 'Nam',
      awards: 1,
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
      render: (id: string) => {
        return (
          <div style={{ textAlign: 'left', marginLeft: '50px' }}>{id}</div>
        )
      }
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
          Số lần khen thưởng
          <IconSort />
        </div>),
      sorter: true,
      dataIndex: 'awards',
      key: 'awards',
      render: (awards: number) => {
        return (
          <div style={{ textAlign: 'left', marginLeft: '25%' }}>{awards}</div>
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
            <Link to='/student/info'>

              <IconEye className='icon mr-24' />
            </Link>

          </div>
        )
      }
    }
  ]
  const { Search } = Input



  return (
    <>
      <div className="title-content__search mb-24">
        <h2 className="title-22">Danh sách khen thưởng học viên</h2>
        <Search onChange={(e) => console.log(e.target.value)} placeholder="input search text" style={{ width: 200 }} />

      </div>

      <div className="table-content">
        <Table showSorterTooltip={false} columns={columns} dataSource={data} />
      </div>
      <div className="title__show-value" style={{ bottom: 0 }}>
        <h3 className="title-16">
          Hiển thị
          <input defaultValue="8" onChange={(e) => e.target.value} />
          hàng trong mỗi trang
        </h3>
      </div>
      <ModalForm isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}
      />
    </>
  )
}

export default AwardList




