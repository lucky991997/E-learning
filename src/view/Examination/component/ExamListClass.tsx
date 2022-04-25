import { Col, Row, Select, Table } from 'antd'
import React, { useState } from 'react'
import { BsBook } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { IconArrowRight, IconDelete, IconEdit, IconListTitle, IconSort } from '../../../shared/component/Icon/Icon'
import ModalForm from '../../../shared/component/Modal/Modal'
import FormDeleteSchoolYear from '../../Learning/SchoolYear/component/FormSchoolYear/FormDeleteSchoolYear'
import { ExamListProps } from '../Exam'
import ExamPoint from './ExamPoint'




const ExamDate = ({setShowList} : ExamListProps) => {
  const { Option } = Select
  const [showPoint, setShowPoint] = useState(false)
  const [isModalDelete, setIsModalDelete] = useState(false)
  const data = [
    {
      key: 1,
      id: '12345678909',
      name: '6A',
      teacher: 'Trần Quốc Tuấn',
      student: '45/50',
      teacherExam: 'Trần Quốc Tuấn',
    },
    {
      key: 2,
      id: '12345678909',
      name: '6A',
      teacher: 'Trần Quốc Tuấn',
      student: '45/50',
      teacherExam: 'Trần Quốc Tuấn',
    },
    {
      key: 3,
      id: '12345678909',
      name: '6A',
      teacher: 'Trần Quốc Tuấn',
      student: '45/50',
      teacherExam: 'Trần Quốc Tuấn',
    },
    {
      key: 4,
      id: '12345678909',
      name: '6A',
      teacher: 'Trần Quốc Tuấn',
      student: '45/50',
      teacherExam: 'Trần Quốc Tuấn',
    },
    {
      key: 5,
      id: '12345678909',
      name: '6A',
      teacher: 'Trần Quốc Tuấn',
      student: '45/50',
      teacherExam: 'Trần Quốc Tuấn',
    },
    {
      key: 6,
      id: '12345678909',
      name: '6A',
      teacher: 'Trần Quốc Tuấn',
      student: '45/50',
      teacherExam: 'Trần Quốc Tuấn',
    },
    {
      key: 7,
      id: '12345678909',
      name: '6A',
      teacher: 'Trần Quốc Tuấn',
      student: '45/50',
      teacherExam: 'Trần Quốc Tuấn',
    },
    {
      key: 8,
      id: '12345678909',
      name: '6A',
      teacher: 'Trần Quốc Tuấn',
      student: '45/50',
      teacherExam: 'Trần Quốc Tuấn',
    },

  ]
  const columns = [
    {
      title: (
        <div style={{ marginLeft: '10px', display: 'flex', alignItems: 'center' }}>
          Mã lớp
          <IconSort />
        </div>
      ),
      sorter: true,
      dataIndex: 'id',
      key: 'id',
      render: (type: string) => {
        return (
          <div >
            {type}
          </div>
        )
      }
    },
    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          Tên lớp
          <IconSort />
        </div>
      ),
      sorter: true,
      dataIndex: 'name',
      key: 'name',
      render: (type: string) => {
        return (
          <div >
            {type}
          </div>
        )
      }
    },

    {
      title: (
        <div>
          GVCH
        </div>
      ),
      dataIndex: 'teacher',
      key: 'teacher',

    },
    {
      title: (
        <div>
          HS tham gia
        </div>
      ),
      dataIndex: 'student',
      key: 'student',

    },
    {
      title: (
        <div>
          GV chấm thi

        </div>
      ),
      dataIndex: 'teacherExam',
      key: 'teacherExam',

    },


    {
      title: (
        <div>
          Xem điểm

        </div>
      ),
      dataIndex: 'list',
      key: 'list',
      render: () => {
        return (
          <div >
            <BsBook onClick={() =>setShowPoint(true)} className="icon mr-24" />

          </div>

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
            <IconDelete onClick={() => setIsModalDelete(true)}className="icon" />
          </div>

        )
      }
    },
  ]

  return (
    <>
      {
        showPoint === true ? (
          <ExamPoint setShowList={setShowList}/>
        ) : (
          <div className="exam__date">
            <div className="mb-32" style={{ display: 'flex', alignItems: 'center' }} >
              <h3 className="title-18-black mr-32">Quản lý bài kiểm tra</h3>
              <IconArrowRight className="icon mr-32" />
              <h1 className="main-title"> Danh sách lớp tham gia</h1>
            </div>
            <div className="select mb-32">  
              <Select defaultValue="2020-2021">
                <Option>2020-2021</Option>
              </Select>
            </div>
            <Row>
              <Col span="20">
                <div className="exam__date__list">
                  <h3 className="title-22 mb-16 mb-24">Danh sách lớp tham gia</h3>
                  <div className="table-content">
                    <Table columns={columns} dataSource={data} />
                  </div>
                </div>
              </Col>
              <Col span="4">
                <div className="exam__date__edit">
                  <div className="exam__date__edit__title">
                    <h1 className="main-tile" style={{ fontSize: '64px' }}>15</h1>
                    <h3 className="title-22">Thursday</h3>
                    <h3 className="title-18-black mb-24">January, 2020</h3>
                  </div>
                  <div className="exam__date__edit__content">
                    <div className="exam__date__edit-subject mb-12">
                      <Row className="mb-8" style={{ display: 'flex', alignItems: 'center' }}>

                        <h2 className="title-22" style={{ color: '#49C510', margin: '16px 36px 12px 0' }}>Toán đại số</h2>
                        <IconEdit className='icon mr-16' />
                        <IconDelete className='icon' />
                      </Row>
                      <Row className="mb-8">
                        <h3 className="title-16-bold" style={{ width: '100px' }}>Giáo viên</h3>
                        <h3 className="title-16">Lương Hoàng D</h3>
                      </Row>
                      <Row>
                        <h3 className="title-16-bold" style={{ width: '100px' }}>Thời lượng:</h3>
                        <h3 className="title-16">45 phút</h3>
                      </Row>
                      <Row className="mb-8">
                        <h3 className="title-16-bold" style={{ width: '100px' }}>Phân loại:</h3>
                        <h3 className="title-16">Giữa kỳ</h3>
                      </Row>
                      <Row className="mb-32">
                        <h3 className="title-16-bold" style={{ width: '100px' }}>Hình thức:</h3>
                        <h3 className="title-16">Tự luận</h3>
                      </Row>

                    </div>

                    <div className="exam__date__edit-subject mb-12">
                      <Row className="mb-8" style={{ display: 'flex', alignItems: 'center' }}>

                        <h2 className="title-22" style={{ color: '#49C510', margin: '16px 36px 12px 0' }}>Toán đại số</h2>
                        <IconEdit className='icon mr-16' />
                        <IconDelete className='icon' />
                      </Row>
                      <Row className="mb-8">
                        <h3 className="title-16-bold" style={{ width: '100px' }}>Giáo viên</h3>
                        <h3 className="title-16">Lương Hoàng D</h3>
                      </Row>
                      <Row>
                        <h3 className="title-16-bold" style={{ width: '100px' }}>Thời lượng:</h3>
                        <h3 className="title-16">45 phút</h3>
                      </Row>
                      <Row className="mb-8">
                        <h3 className="title-16-bold" style={{ width: '100px' }}>Phân loại:</h3>
                        <h3 className="title-16">Giữa kỳ</h3>
                      </Row>
                      <Row className="mb-32">
                        <h3 className="title-16-bold" style={{ width: '100px' }}>Hình thức:</h3>
                        <h3 className="title-16">Tự luận</h3>
                      </Row>

                    </div>
                    <div className="exam__date__edit-subject mb-12">
                      <Row className="mb-8" style={{ display: 'flex', alignItems: 'center' }}>

                        <h2 className="title-22" style={{ color: '#49C510', margin: '16px 36px 12px 0' }}>Toán đại số</h2>
                        <IconEdit className='icon mr-16' />
                        <IconDelete className='icon' />
                      </Row>
                      <Row className="mb-8">
                        <h3 className="title-16-bold" style={{ width: '100px' }}>Giáo viên</h3>
                        <h3 className="title-16">Lương Hoàng D</h3>
                      </Row>
                      <Row>
                        <h3 className="title-16-bold" style={{ width: '100px' }}>Thời lượng:</h3>
                        <h3 className="title-16">45 phút</h3>
                      </Row>
                      <Row className="mb-8">
                        <h3 className="title-16-bold" style={{ width: '100px' }}>Phân loại:</h3>
                        <h3 className="title-16">Giữa kỳ</h3>
                      </Row>
                      <Row className="mb-32">
                        <h3 className="title-16-bold" style={{ width: '100px' }}>Hình thức:</h3>
                        <h3 className="title-16">Tự luận</h3>
                      </Row>

                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            {isModalDelete === true ?
                (
                    <ModalForm closable={true} isModalVisible={isModalDelete} setIsModalVisible={setIsModalDelete}>
                        <FormDeleteSchoolYear title="Xóa Lịch thi" setIsModalDelete={setIsModalDelete} />
                    </ModalForm>
                ) : ''
            }
          </div>
        )
      }
    </>

  )
}

export default ExamDate