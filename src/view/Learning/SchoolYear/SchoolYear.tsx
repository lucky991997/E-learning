import { Col, Input, Row, Table } from 'antd'
import React from 'react'

import { FiEdit } from 'react-icons/fi'
import { RiDeleteBinLine } from 'react-icons/ri'
import Button from '../../../shared/component/Button/Button'
import { IconDelete, IconEdit, IconSort } from '../../../shared/component/Icon/Icon'


const SchoolYear = () => {
  const data = [
    {
      key: 1,
      schoolYear: '2020-2021',
      startDate: '05/10/2020',
      endDate: '05/10/2021',

    },
    {
      key: 2,
      schoolYear: '2019-2020',
      startDate: '05/10/2020',
      endDate: '05/10/2021',

    },
    {
      key: 3,
      schoolYear: '2018-2019',
      startDate: '05/10/2020',
      endDate: '05/10/2021',

    },
    {
      key: 4,
      schoolYear: '2020-2021',
      startDate: '05/10/2020',
      endDate: '05/10/2020',

    },
    {
      key: 5,
      schoolYear: '2020-2021',
      startDate: '05/10/2020',
      endDate: '05/10/2020',

    },


  ]

  const columns = [
    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
          STT
          <IconSort />
        </div>
      ),
      dataIndex: 'key',
      key: 'key',
      sorter: (a: any, b: any) => {
        console.log(a.key, b.key)
        return a.key - b.key
      },
    },

    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
          Niên Khóa
          <IconSort />
        </div>),
      sorter: true,
      dataIndex: 'schoolYear',
      key: 'schoolYear',
    },
    {
      title: 'Thời gian bắt đầu',
      dataIndex: 'startDate',
      key: 'startDate',
    },
    {
      title: 'Thời gian kết thúc',
      dataIndex: 'endDate',
      key: 'endDate',
    },
    {
      title: '',
      dataIndex: 'subjectInfor',
      key: 'subjectInfor',
      render: () => {
        return (
          <div >
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
          <Button variant="primary" icon="add">
            Thêm mới
          </Button>
        </Col>
      </Row>
      <Row>
        <div className="learning-title learning-content">

          <div className="learning-title-table__search mb-24">

            <h3 className="title-22">Niên Khóa</h3>


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

export default SchoolYear