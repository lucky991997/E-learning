import { Select, Table } from 'antd'
import Search from 'antd/lib/input/Search'
import React, { useState } from 'react'
import { IconDelete, IconEdit, IconSort } from '../../../../shared/component/Icon/Icon'
import ModalForm from '../../../../shared/component/Modal/Modal'
import FormDeleteSchoolYear from '../../../Learning/SchoolYear/component/FormSchoolYear/FormDeleteSchoolYear'
import FormRoles from '../../Form/FormRoles'

const ListGrUser = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isModaldelete, setIsModalDelete] = useState(false)
  const data = [
    {
      key: 1,
      name: 'Quản trị viên',
      total: 6,
      note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.',
    },
    {
      key: 2,
      name: 'Học sinh tiểu học',
      total: 6,
      note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.',
    },
    {
      key: 3,
      name: 'Phòng hành chính',
      total: 6,
      note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.',
    },
    {
      key: 4,
      name: 'Nhân viên',
      total: 6,
      note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.',
    },
    {
      key: 5,
      name: 'Quản trị viên',
      total: 6,
      note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.',
    },
    {
      key: 6,
      name: 'Học sinh tiểu học',
      total: 6,
      note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.',
    },
    {
      key: 7,
      name: 'Phòng hành chính',
      total: 6,
      note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.',
    },
    {
      key: 8,
      name: 'Nhân viên',
      total: 6,
      note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.',
    },
  ]
  const columns = [
    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20%' }}>
          Tên nhóm
          <IconSort />
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
          Tổng số thành viên
          <IconSort />
        </div>
      ),
      sorter: true,
      dataIndex: 'total',
      key: 'total',
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
        <div style={{ display: 'flex', marginLeft: '15%' }}>
          Ghi chú

        </div>
      ),
      dataIndex: 'note',
      key: 'note',

    },
    {
      title: '',
      dataIndex: 'event',
      key: 'event',
      render: () => {
        return (
          <div style={{ display: 'flex' }}>
            <IconEdit onClick={() => setIsModalVisible(true)} className='icon mr-24' />
            <IconDelete onClick={() => setIsModalDelete(true)} className='icon' />
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
      {isModalVisible === true ?
        (
          <ModalForm isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}>
            <FormRoles setIsModalVisible={setIsModalVisible} />
          </ModalForm>
        ) : ''
      }
      {isModaldelete === true ?
        (
          <ModalForm isModalVisible={isModaldelete} setIsModalVisible={setIsModalDelete}>
            <FormDeleteSchoolYear setIsModalDelete={setIsModalDelete} title="Xóa nhóm người dùng" />
          </ModalForm>
        ) : ''
      }
    </>
  )
}

export default ListGrUser