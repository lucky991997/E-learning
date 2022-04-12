import { Col, Input, Row, Table } from 'antd'
import React from 'react'

import { IconDelete, IconEdit, IconList, IconSort } from '../../../shared/component/Icon/Icon'
import Button from '../../../shared/component/Button/Button'


const DepartmentOfSubject = () => {
  const data = [
    {
      key: 1,
      id: '09',
      name: 'Khối 09',
    },
    {
      key: 2,
      id: '10',
      name: 'Khối 10',
    },
    {
      key: 3,
      id: '11',
      name: 'Khối 11',
    },
  ]

  const columns = [
    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start ', marginLeft: '24px' }}>
          Mã khoa - khối
          <IconSort />
        </div>
      ),
      dataIndex: 'id',
      key: 'id',
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
          Tên khoa - khối
          <IconSort />
        </div>),
      sorter: true,
      dataIndex: 'name',
      key: 'name',
      render: (text: any) => {
        return (
          <div style={{ textAlign: 'left' }}>
            {text}
          </div>
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


      <Row className="mb-24" justify='end' style={{ width: '100%' }}>
        <Col >
          <Button variant="primary" icon="add">
            Thêm mới
          </Button>
        </Col>
      </Row>

      <div className="learning-title learning-content">
        <div className="learning-title-table__search mb-24">

          <h3 className="title-22">Khoa - khối</h3>


          <Search onChange={(e) => console.log(e.target.value)} placeholder="input search text" style={{ width: 200 }} />
        </div>

        <div className="table-content">

          <Table columns={columns} dataSource={data} showSorterTooltip={false} />

        </div>

      </div>
    </>
  )
}

export default DepartmentOfSubject