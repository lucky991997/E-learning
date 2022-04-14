import { Select, Table } from 'antd'
import Search from 'antd/lib/input/Search'
import React from 'react'
import { IconDelete, IconEdit, IconSort } from '../../../../shared/component/Icon/Icon'

const ListUser = () => {
  const data = [
    {
      key: 1,
      name: 'Trần Quốc Tuấn',
      email: 'quoctuan090997@gmail.com',
      group: 'Quản trị viên',
      statua: false,
    },
    {
      key: 2,
      name: 'Trần Quốc Tuấn',
      email: 'quoctuan090997@gmail.com',
      group: 'Học sinh tiểu học',
      statua: false,
    },
    {
      key: 3,
      name: 'Trần Quốc Tuấn',
      email: 'quoctuan090997@gmail.com',
      group: 'Nhân viên',
      statua: true,
    },
    {
      key: 4,
      name: 'Trần Quốc Tuấn',
      email: 'quoctuan090997@gmail.com',
      group: 'Phòng hành chính',
      statua: true,
    },
    {
      key: 5,
      name: 'Trần Quốc Tuấn',
      email: 'quoctuan090997@gmail.com',
      group: 'Quản trị viên',
      statua: false,
    },
    {
      key: 6,
      name: 'Trần Quốc Tuấn',
      email: 'quoctuan090997@gmail.com',
      group: 'Học sinh tiểu học',
      statua: false,
    },
    {
      key: 7,
      name: 'Trần Quốc Tuấn',
      email: 'quoctuan090997@gmail.com',
      group: 'Nhân viên',
      statua: true,
    },
    {
      key: 8,
      name: 'Trần Quốc Tuấn',
      email: 'quoctuan090997@gmail.com',
      group: 'Phòng hành chính',
      statua: true,
    }
  ]
  const columns = [
    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20%' }}>
          Tên

        </div>
      ),
      sorter: true,
      dataIndex: 'name',
      key: 'name',
      render: (type: string) => {
        return (
          <div style={{ display: 'flex', marginLeft: '20%' }}>
            {type}
          </div>
        )
      }
    },
    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20%' }}>
          Email

        </div>
      ),
      sorter: true,
      dataIndex: 'email',
      key: 'email',
      render: (type: string) => {
        return (
          <div style={{ display: 'flex', marginLeft: '20%' }}>
            {type}
          </div>
        )
      }
    },

    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20%' }}>
          Nhóm người dùng

        </div>
      ),
      sorter: true,
      dataIndex: 'group',
      key: 'group',
      render: (type: string) => {
        return (
          <div style={{ display: 'flex', marginLeft: '20%' }}>
            {type}
          </div>
        )
      }
    },

    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20%' }}>
          Trạng thái

        </div>
      ),
      sorter: true,
      dataIndex: 'email',
      key: 'email',
      render: (status: boolean) => {
        return (
          status === true ? (
            <h3 className="title-16-note" style={{ marginLeft: '20%' }}>
              Đang hoạt động
            </h3>
          ) : (
            <h3 className="title-16-note" style={{marginLeft: '20%' }}>
              Đã vô hiệu
            </h3>
          )
        )
      }
    },
    {
      title: '',
      dataIndex: 'event',
      key: 'event',
      render: () => {
        return (
          <div style={{ display: 'flex' }}>
            <IconEdit className="icon mr-24" />
            <IconDelete className="icon" />
          </div>

        )
      }
    },
  ]
  return (
    <>
      <div className="title-content__search mb-24">
        <h2 className="title-22">Danh sách các nhóm người dùng</h2>
        <Search placeholder='tìm kiếm' />
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

    </>
  )
}

export default ListUser