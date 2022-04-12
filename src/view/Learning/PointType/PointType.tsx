import { Col, Input, Row, Table } from 'antd'
import React from 'react'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBinLine } from 'react-icons/ri'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { IconDelete, IconEdit, IconList, IconSort } from '../../../shared/component/Icon/Icon'
import Button from '../../../shared/component/Button/Button'


const PointType = () => {
  const data = [
    {
      key:1,
      type: 'Kiểm tra miệng',
      heso: 1,
      sem1: 3,
      sem2: 3,
    },
    {
      key:2,
      type: 'Kiểm tra 15 phút',
      heso: 1,
      sem1: 2,
      sem2: 2,
    },
    {
      key:3,
      type: 'Kiểm tra 45 phút',
      heso: 2,
      sem1: 2,
      sem2: 2,
    },
    {
      key:4,
      type: 'Kiểm tra giữa kỳ',
      heso: 2,
      sem1: 1,
      sem2: 1,
    },
  ]

  const columns = [
    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start ', marginLeft: '24px' }}>
          Loại điểm
          <IconSort />
        </div>
      ),
      dataIndex: 'type',
      key: 'type',
      sorter: (a: any, b: any) => {
        console.log(a.key, b.key)
        return a.key - b.key
      },
      render: (text: any) => {
        return (
          <div style={{ textAlign: 'left', marginLeft: '24px' }}>
            {text}
          </div>
        )
      }
    },

    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start ' }}>
          Hệ số
          <IconSort />
        </div>),
      sorter: true,
      dataIndex: 'heso',
      key: 'heso',
      render: (text: any) => {
        return (
          <div style={{ textAlign: 'left' }}>
            {text}
          </div>
        )
      }
    },
    {

      title: (
        <div className="border-table-row">
          Số cột điểm tối thiểu
        </div>
      ),
      width: 305,
      height: 80,
      children: [
        {
          width: 150,
          title: 'Học kì 1',
          dataIndex: 'sem1',
          key: 'sem1',
        },
        {
          width: 150,
          title: 'Học kì 2',
          dataIndex: 'sem2',
          key: 'sem2',
        },
      ],
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

      <Row className="mb-24" justify='end' style={{ width: '100%' }}>
        <Col >
          <Button variant="primary" icon="add">
            Thêm mới
          </Button>
        </Col>
      </Row>
      <Row>


        <div className="learning-title learning-content">
          <div className="learning-title-table__search mb-24">

            <h3 className="title-22">Loại điểm</h3>


            <Search onChange={(e) => console.log(e.target.value)} placeholder="input search text" style={{ width: 200 }} />
          </div>

          <div className="table-content">

            <Table columns={columns} dataSource={data} showSorterTooltip={false} />

          </div>

        </div>
      </Row>
    </>
  )
}

export default PointType