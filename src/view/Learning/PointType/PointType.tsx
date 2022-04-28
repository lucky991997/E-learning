import { Col, Input, Row, Table } from 'antd'
import React, { useEffect, useState } from 'react'

import { IconDelete, IconEdit, IconSort } from '../../../shared/component/Icon/Icon'
import Button from '../../../shared/component/Button/Button'
import FormDeleteMain from '../../../shared/component/Form/FormDeleteMain'
import ModalForm from '../../../shared/component/Modal/Modal'
import FormPoint from './component/form/FormPoint'
import { ILearningProps } from '../Learning'
import { ILearning, IPoint } from '../../../core/enums/EnumsLearningType'


const PointType = ({ learningList }: ILearningProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isModaldelete, setIsModalDelete] = useState(false)
  const data = [
    {
      key: 1,
      pointType: 'Kiểm tra miệng',
      heSo: 1,
      sem1: 3,
      sem2: 3,
    },
    {
      key: 2,
      pointType: 'Kiểm tra 15 phút',
      heSo: 1,
      sem1: 2,
      sem2: 2,
    },
    {
      key: 3,
      pointType: 'Kiểm tra 45 phút',
      heSo: 2,
      sem1: 2,
      sem2: 2,
    },
    {
      key: 4,
      pointType: 'Kiểm tra giữa kỳ',
      heSo: 2,
      sem1: 1,
      sem2: 1,
    },
  ]



  // const columns = [
  //   {
  //     title: (
  //       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start ', marginLeft: '24px' }}>
  //         Loại điểm
  //         <IconSort />
  //       </div>
  //     ),
  //     dataIndex: 'point',
  //     key: 'point',
  //     sorter: (a: any, b: any) => {
  //       console.log(a.key, b.key)
  //       return a.key - b.key
  //     },
  //     render: (point: IPoint[]) => {
  //       return (

  //         <div style={{ textAlign: 'left', marginLeft: '24px' }}>
  //           {point && point.map((item) => (<h3>{item.pointType}</h3>))}
  //         </div>
  //       )
  //     }
  //   },
  //   {
  //     title: (
  //       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start ', marginLeft: '24px' }}>
  //         hệ số
  //         <IconSort />
  //       </div>
  //     ),
  //     dataIndex: 'point',
  //     key: 'point',
  //     sorter: (a: any, b: any) => {
  //       console.log(a.key, b.key)
  //       return a.key - b.key
  //     },
  //     render: (point: IPoint[]) => {
  //       return (

  //         <div style={{ textAlign: 'left', marginLeft: '24px' }}>
  //           {point && point.map((item) => (<h3>{item.heSo}</h3>))}
  //         </div>
  //       )
  //     }
  //   },

  //   {
  //     title: (
  //       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start ' }}>
  //         Hệ số
  //         <IconSort />
  //       </div>),
  //     sorter: true,
  //     dataIndex: 'heSo',
  //     key: 'heSo',
  //     render: (text: any) => {
  //       return (
  //         <div style={{ textAlign: 'left' }}>
  //           {text}
  //         </div>
  //       )
  //     }
  //   },
  //   {

  //   //   title: (
  //   //     <div className="border-table-row">
  //   //       Số cột điểm tối thiểu
  //   //     </div>
  //   //   ),
  //   //   width: 305,
  //   //   height: 80,
  //   //   children: [
  //   //     {
  //   //       width: 150,
  //   //       title: 'Học kì 1',
  //   //       dataIndex: 'point',
  //   //       key: 'point',
  //   //       render: (point: IPoint[]) => {
  //   //         return (

  //   //           <div style={{ textAlign: 'left', marginLeft: '24px' }}>
  //   //             {point && point.map((item) => (<h3>{item.sem1}</h3>))}
  //   //           </div>
  //   //         )
  //   //       }
  //   //     },
  //   //     {
  //   //       width: 150,
  //   //       title: 'Học kì 2',
  //   //       dataIndex: 'point',
  //   //       key: 'point',
  //   //       render: (point: IPoint[]) => {
  //   //         return (

  //   //           <div style={{ textAlign: 'left', marginLeft: '24px' }}>
  //   //             {point && point.map((item) => (<h3>{item.sem2}</h3>))}
  //   //           </div>
  //   //         )
  //   //       }
  //   //     },
  //   //   ],
  //   // },
  //   // {
  //   //   title: '',
  //   //   dataIndex: 'point',
  //   //   key: 'point',

  //   //   render: (point: IPoint[]) => {
  //   //     return (

  //   //       <div style={{ textAlign: 'left', marginLeft: '24px' }}>
  //   //         {point && point.map((item) => (
  //   //           <h3>
  //   //             <IconEdit onClick={() => setIsModalVisible(true)} className='icon mr-24' />
  //   //             <IconDelete onClick={() => setIsModalDelete(true)} className='icon' />

  //   //           </h3>
  //   //         ))}
  //   //       </div>
  //   //     )
  //   //   }
  //   // },
  //   // {
  //   //   title: '',
  //   //   dataIndex: 'point',
  //   //   key: 'point',
  //   //   render: () => {
  //   //     return (

  //   //       <div >

  //   //         <IconEdit onClick={() => setIsModalVisible(true)} className='icon mr-24' />
  //   //         <IconDelete onClick={() => setIsModalDelete(true)} className='icon' />

  //   //       </div>
  //   //     )
  //   //   }
  //   // }
  // ]
  const columns = [
    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start ', marginLeft: '24px' }}>
          Loại điểm
          <IconSort />
        </div>
      ),
      dataIndex: 'pointType',
      key: 'pointType',
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
      dataIndex: 'subjectInfor',
      key: 'subjectInfor',
      render: () => {
        return (
          <div >
            
            <IconEdit  onClick = {() => setIsModalVisible(true)} className='icon mr-24' />
            <IconDelete  onClick = {() => setIsModalDelete(true)} className='icon' />
          
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

            <Table columns={columns} dataSource={data} showSorterTooltip={false} />

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
      {isModaldelete === true ?
        (
          <ModalForm isModalVisible={isModaldelete} setIsModalVisible={setIsModalDelete}>
            <FormDeleteMain setIsModalDelete={setIsModalDelete} />
          </ModalForm>
        ) : ''
      }
    </>
  )
}

export default PointType