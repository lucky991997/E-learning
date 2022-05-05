import { Col, Input, Row, Table } from 'antd'
import React, { useEffect, useState } from 'react'

import { IconDelete, IconEdit, IconSort } from '../../../shared/component/Icon/Icon'
import Button from '../../../shared/component/Button/Button'
import FormDeleteMain from '../../../shared/component/Form/FormDeleteMain'
import ModalForm from '../../../shared/component/Modal/Modal'
import FormPoint from './component/form/FormPoint'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../core'
import {  getPointList } from '../../../core/action/PointAction'
import FormUpdatePoint from './component/form/FormUpdatePoint'
import { pageSize } from '../../../layout/Index'



const PointType = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isModalUpdateVisible, setIsModalUpdateVisible] = useState(false)
  const [isModaldelete, setIsModalDelete] = useState(false)
  const dispatch = useDispatch()
  const { pointList, point } = useSelector((state: RootState) => state.PointReducer)
  const [idPoint, setIdPoint] = useState<string>('')

  const pointLength = pointList.length

  useEffect(() => {
    //@ts-ignore
    dispatch(getPointList())
    //@ts-ignore

  }, [dispatch, pointLength, pointList]);
  

  const handleDelete = (id: string) => {
    setIsModalDelete(true)
    setIdPoint(id)
  }
  const handleUpdate = (id: string) => {

    setIsModalUpdateVisible(true)
    setIdPoint(id)
    

  }

  const columns = [
    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start ', marginLeft: '24px' }}>
          Loại điểm
          <IconSort />
        </div>
      ),
      dataIndex: 'pointTyp',
      key: 'pointTyp',
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
      dataIndex: 'heSo',
      key: 'heSo',
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
      dataIndex: 'id',
      key: 'id',
      render: (id: string) => {
        return (
          <div >

            <IconEdit onClick={() => handleUpdate(id)} className='icon mr-24' />
            <IconDelete onClick={() => handleDelete(id)} className='icon' />

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
          <Button variant="primary" icon="add"
            onClick={() => setIsModalVisible(true)}
          >
            Thêm mới
          </Button>
        </Col>
      </Row>
      <Row>


        <div className="learning-title learning-content">
          <div className="title-content__search mb-24">

            <h3 className="title-22">Loại điểm</h3>


            <Search onChange={(e) => console.log(e.target.value)} placeholder="input search text" style={{ width: 200 }} />
          </div>

          <div className="table-content">

            <Table 
            rowKey={`id`} 
            columns={columns} 
            dataSource={pointList} 
            showSorterTooltip={false} 
            pagination={{pageSize}}
            />

          </div>

        </div>
      </Row>
      {isModalVisible === true ?
        (
          <ModalForm isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}>
            <FormPoint setIsModalVisible={setIsModalVisible} />
          </ModalForm>
        ) : ''
      }

      {isModalUpdateVisible === true ?
        (
          <ModalForm isModalVisible={isModalUpdateVisible} setIsModalVisible={setIsModalUpdateVisible}>
            <FormUpdatePoint pointList={pointList}  setIsModalVisible={setIsModalUpdateVisible} id={idPoint} />
          </ModalForm>
        ) : ''
      }
      {isModaldelete === true ?
        (
          <ModalForm isModalVisible={isModaldelete} setIsModalVisible={setIsModalDelete}>
            <FormDeleteMain setIsModalDelete={setIsModalDelete} id={idPoint} />
          </ModalForm>
        ) : ''
      }
    </>
  )
}

export default PointType