import { Input, Table } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { IconEdit, IconEye, IconSort } from '../../../../shared/component/Icon/Icon'
import { IStudent } from '../../StudentProfiles'


const DisciplinaryList = ({studentList}: IStudent) => {

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
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start ', marginLeft: '20px' }}>
          Tên học viên
          <IconSort />
        </div>),
      sorter: true,
      dataIndex: 'name',
      key: 'name',
      render: (name: string) => {
        return (
          <div style={{ textAlign: 'left', marginLeft: '20px' }}>{name}</div>
        )
      }
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
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start ' }}>
          Số lần kỷ luật
          <IconSort />
        </div>),
      sorter: true,
      dataIndex: 'award',
      key: 'award',
      render: (award: number) => {
        return (
          <div style={{ textAlign: 'left', marginLeft: '25%' }}>{award ? award: 4}</div>
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
        <h2 className="title-22">Danh sách kỷ luật học viên</h2>
        <Search onChange={(e) => console.log(e.target.value)} placeholder="input search text" style={{ width: 200 }} />

      </div>

      <div className="table-content">
        <Table showSorterTooltip={false} columns={columns} dataSource={studentList} />
      </div>
      <div className="title__show-value" style={{ bottom: 0 }}>
        <h3 className="title-16">
          Hiển thị
          <input defaultValue="8" onChange={(e) => e.target.value} />
          hàng trong mỗi trang
        </h3>
      </div>
    </>
  )
}

export default DisciplinaryList







