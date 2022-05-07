import { Input, Select, Table } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../shared/component/Button/Button'
import { IconArrowRight, IconEye, IconSort } from '../../../shared/component/Icon/Icon'
import ModalForm from '../../../shared/component/Modal/Modal'
import FormReserve from './Form/FormReserve'
type ReseverProfiles = {
  pageSizeConfig?:number,
}
const Resever = ({pageSizeConfig}: ReseverProfiles) => {
  const { Option } = Select
  const { Search } = Input
  const [isModalVisible, setIsModalVisible] = useState(false)

  const data = [
    {
      key: 1,
      id: '20206A',
      name: 'Nguyễn Văn A ',
      birthday: '12/02/1998',
      gender: 'Nam',
      class: "6A",
      date: '12/12/2020',
      sem: 'Học kỳ 1',
      note: 'Gia đình có hoàn cảnh khó khăn',
    },
    {
      key: 2,
      id: '20206B',
      name: 'Nguyễn Văn B',
      birthday: '12/02/1998',
      gender: 'Nam',
      class: "6A",
      date: '12/12/2020',
      sem: 'Học kỳ 1',
      note: 'Gia đình có hoàn cảnh khó khăn',
    },
    {
      key: 3,
      id: '20206C',
      name: 'Nguyễn Văn C',
      birthday: '12/02/1998',
      gender: 'Nam',
      class: "6A",
      date: '12/12/2020',
      sem: 'Học kỳ 1',
      note: 'Gia đình có hoàn cảnh khó khăn',
    },
    {
      key: 4,
      id: '20207A',
      name: 'Nguyễn Văn D',
      birthday: '12/02/1998',
      gender: 'Nam',
      class: "6A",
      date: '12/12/2020',
      sem: 'Học kỳ 1',
      note: 'Gia đình có hoàn cảnh khó khăn',
    },
    {
      key: 5,
      id: '20207B',
      name: 'Nguyễn Văn E',
      birthday: '12/02/1998',
      gender: 'Nam',
      class: "6A",
      date: '12/12/2020',
      sem: 'Học kỳ 1',
      note: 'Gia đình có hoàn cảnh khó khăn',
    },
    {
      key: 6,
      id: '20208A',
      name: 'Nguyễn Văn F',
      birthday: '12/02/1998',
      gender: 'Nam',
      class: "6A",
      date: '12/12/2020',
      sem: 'Học kỳ 1',
      note: 'Gia đình có hoàn cảnh khó khăn',
    },
    {
      key: 7,
      id: '20208B',
      name: 'Nguyễn Văn G',
      birthday: '12/02/1998',
      gender: 'Nam',
      class: "6A",
      date: '12/12/2020',
      sem: 'Học kỳ 1',
      note: 'Gia đình có hoàn cảnh khó khăn',
    },
    {
      key: 8,
      id: '20209A',
      name: 'Nguyễn Văn I',
      birthday: '12/02/1998',
      gender: 'Nam',
      class: "6A",
      date: '12/12/2020',
      sem: 'Học kỳ 1',
      note: 'Gia đình có hoàn cảnh khó khăn',
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
          Lớp bảo lưu
          <IconSort />
        </div>),
      sorter: true,
      dataIndex: 'class',
      key: 'class',
    },

    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
          Ngày bảo lưu
          <IconSort />
        </div>),
      sorter: true,
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
          Thời gian bảo lưu
          <IconSort />
        </div>),
      sorter: true,
      dataIndex: 'sem',
      key: 'sem',
    },
    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
          Lý do
          <IconSort />
        </div>),
      sorter: true,
      dataIndex: 'note',
      key: 'note',
    },


    {
      title: '',
      dataIndex: 'subjectInfor',
      key: 'subjectInfor',
      render: () => {
        return (
          <div>
            <Link to='/student/info'>
              <IconEye className='icon mr-24' />
            </Link>
          </div>
        )
      }
    }
  ]
  return (
    <div className="resever">
      <div className="resever__title" style={{ marginBottom: '42px' }}>
        <h3 className="title-18-black mr-32">Hồ sơ học viên</h3>
        <IconArrowRight className="icon  mr-32" />
        <h1 className="main-title">Hồ sơ bảo lưu</h1>
      </div>
      <div className="resever__control mb-24">
        <div className="select">
          <Select defaultValue="2020-2021">
            <Option value="1">2020-2021</Option>
          </Select>
        </div>
        <Button variant="primary" icon="add"
        onClick={() => setIsModalVisible(true)}
        >Thêm</Button>
      </div>
      <div className="resever__list">
        <div className="title-content__search mb-24 ">
          <h2 className="title-22">Danh sách bảo lưu</h2>
          <Search placeholder='enter value'></Search>
        </div>
        <div className="table-content">

          <Table pagination={{pageSize: pageSizeConfig}}columns={columns} dataSource={data} />
        </div>

        <div className="title__show-value" style={{ bottom: 0 }}>
          <h3 className="title-16">
            Hiển thị
            <input value={pageSizeConfig} onChange={(e) => console.log(e)} />
            hàng trong mỗi trang
          </h3>
        </div>

      </div>
      {
        isModalVisible === true ? (
          <ModalForm isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}>
            <FormReserve setIsModalVisible={setIsModalVisible}/> 
          </ModalForm>
        ) : ''
      }
    </div>
  )
}

export default Resever