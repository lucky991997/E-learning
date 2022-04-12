import { Col, Input, Row, Table } from 'antd'
import React from 'react'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBinLine } from 'react-icons/ri'
import { IconDelete, IconEdit, IconList, IconSort } from '../../../../shared/component/Icon/Icon'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import Button from '../../../../shared/component/Button/Button'

const Department = () => {
  const data = [
    {
      key: 1,
      nameDep: 'Văn hóa xã hội',
      name: 'Nguyễn Văn A',


    },
    {
      key: 2,
      nameDep: 'Khoa học tự nhiên',
      name: 'Trần Thị B',

    },
  ]

  const columns = [
    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
          Tên tổ - bộ môn
          <IconSort />
        </div>
      ),
      dataIndex: 'nameDep',
      key: 'nameDep',
      sorter: (a: any, b: any) => {
        console.log(a.key, b.key)
        return a.key - b.key
      },
    },

    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
          Trưởng bộ môn
          <IconSort />
        </div>),
      sorter: true,
      dataIndex: 'name',
      key: 'name',
      render: (text: any) => {
        return (
          <h3 className="title-16-bold j-center" >
            {text}
          </h3>
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
            <IconList className='icon mr-24' />
            <IconEdit className='icon mr-24' />
            <IconDelete className='icon' />
          </div>
        )
      }
    }
  ]

  const { Search } = Input
  return (
    <>
      <Row className="mb-24" justify='end' style={{width: '100%'}}>
        <Col >
          <Button  variant="primary" icon="add">
            Thêm mới
          </Button>
        </Col>
      </Row>


      <div className="learning-title learning-content">
        <div className="learning-title-table__search mb-24">

          <h3 className="title-22">Tổ - Bộ môn</h3>


          <Search onChange={(e) => console.log(e.target.value)} placeholder="input search text" style={{ width: 200 }} />
        </div>

        <div className="table-content">

          <Table columns={columns} dataSource={data} showSorterTooltip={false} />

        </div>

      </div>
    </>
  )
}

export default Department