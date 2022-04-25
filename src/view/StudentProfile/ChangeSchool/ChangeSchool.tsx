import { Input, Select, Table } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../shared/component/Button/Button'
import { IconArrowRight, IconEdit, IconEye, IconSort } from '../../../shared/component/Icon/Icon'
import ModalForm from '../../../shared/component/Modal/Modal'
import FormAddChangeSchool from './form/FormAddChangeSchool'

const ChangeSchool = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const { Option } = Select
  const { Search } = Input
  const data = [
    {
      key: 1,
      id: '20206A',
      name: 'Nguyễn Văn A ',
      birthday: '12/02/1998',
      gender: 'Nam',
      change: "THCSA",
      sem: 'Học kỳ 1',
      block: 6,
      date: '12/12/2020',
    },
    {
      key: 2,
      id: '20206B',
      name: 'Nguyễn Văn B',
      birthday: '12/02/1998',
      gender: 'Nam',
      change: "THCSA",
      sem: 'Học kỳ 1',
      block: 6,
      date: '12/12/2020',
    },
    {
      key: 3,
      id: '20206C',
      name: 'Nguyễn Văn C',
      birthday: '12/02/1998',
      gender: 'Nam',
      change: "THCSA",
      sem: 'Học kỳ 1',
      block: 6,
      date: '12/12/2020',
    },
    {
      key: 4,
      id: '20207A',
      name: 'Nguyễn Văn D',
      birthday: '12/02/1998',
      gender: 'Nam',
      change: "THCSA",
      sem: 'Học kỳ 1',
      block: 6,
      date: '12/12/2020',
    },
    {
      key: 5,
      id: '20207B',
      name: 'Nguyễn Văn E',
      birthday: '12/02/1998',
      gender: 'Nam',
      change: "THCSA",
      sem: 'Học kỳ 1',
      block: 6,
      date: '12/12/2020',
    },
    {
      key: 6,
      id: '20208A',
      name: 'Nguyễn Văn F',
      birthday: '12/02/1998',
      gender: 'Nam',
      change: '6A',
      sem: 'Học kỳ 1',
      block: 6,
      date: '12/12/2020',
    },
    {
      key: 7,
      id: '20208B',
      name: 'Nguyễn Văn G',
      birthday: '12/02/1998',
      gender: 'Nam',
      change: "THCSA",
      sem: 'Học kỳ 1',
      block: 6,
      date: '12/12/2020',
    },
    {
      key: 8,
      id: '20209A',
      name: 'Nguyễn Văn I',
      birthday: '12/02/1998',
      gender: 'Nam',
      change: "THCSA",
      sem: 'Học kỳ 1',
      block: 6,
      date: '12/12/2020',
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
          Chuyển từ
          <IconSort />
        </div>),
      sorter: true,
      dataIndex: 'change',
      key: 'change',
    },
    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
          Học kì chuyển
          <IconSort />
        </div>),
      sorter: true,
      dataIndex: 'sem',
      key: 'sem',
    },
    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
          Khối
          <IconSort />
        </div>),
      sorter: true,
      dataIndex: 'block',
      key: 'block',
    },
    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
          Ngày chuyển
          <IconSort />
        </div>),
      sorter: true,
      dataIndex: 'date',
      key: 'date',
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
  return (
    <div className="school">
      <div className="school__title" style={{ marginBottom: '42px' }}>
        <h3 className="title-18-black mr-32">Hồ sơ học viên</h3>
        <IconArrowRight className="icon  mr-32" />
        <h1 className="main-title">Tiếp nhận chuyển trường</h1>
      </div>
      <div className="school__control mb-24">
        <div className="select">
          <Select defaultValue="2020-2021">
            <Option value="1">2020-2021</Option>
          </Select>
        </div>
        <Button variant="primary" icon="add"
          onClick={() => setIsModalVisible(true)}
        >Thêm</Button>
      </div>
      <div className="school__list">
        <div className="title-content__search mb-24">
          <h2 className="title-22">Danh sách chuyển trường</h2>
          <Search placeholder='enter value'></Search>
        </div>
        <div className="table-content">

          <Table columns={columns} dataSource={data} />
        </div>

        <div className="title__show-value" style={{ bottom: 0 }}>
          <h3 className="title-16">
            Hiển thị
            <input defaultValue="8" onChange={(e) => e.target.value} />
            hàng trong mỗi trang
          </h3>
        </div>

      </div>
      {
        isModalVisible === true ? (
          <ModalForm isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}>
            <FormAddChangeSchool setIsModalVisible={setIsModalVisible}/> 
          </ModalForm>
        ) : ''
      }
    </div>
  )
}

export default ChangeSchool