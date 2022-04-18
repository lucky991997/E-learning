import { Col, Row, Select, Table } from 'antd'
import Search from 'antd/lib/input/Search'
import React from 'react'
import Button from '../../../shared/component/Button/Button'
import { IconArrowRight, IconCheck, IconClose, IconDelete, IconSort, IconUpdate } from '../../../shared/component/Icon/Icon'
import { ExamListProps } from '../Exam'

const ExamPoint = ({ setShowList }: ExamListProps) => {
    const { Option } = Select
    const data = [
        {
            key: 1,
            name: 'Trần Quốc Tuấn',
            birthday: '09-09-1997',
            chuyencan: 9,
            mieng: 7,
            phut: 8,
            heso1: 8,
            heso2: 6,
            total: 7,
            totalAll: 8,
            date: 'Thứ 4, 20-10-2020 16:00',
            
        },
        {
            key: 2,
            name: 'Trần Quốc Tuấn',
            birthday: '09-09-1997',
            chuyencan: 9,
            mieng: 7,
            phut: 8,
            heso1: 8,
            heso2: 6,
            total: 7,
            totalAll: 6,
            date: 'Thứ 4, 20-10-2020 16:00',
            
        },
        {
            key: 3,
            name: 'Trần Quốc Tuấn',
            birthday: '09-09-1997',
            chuyencan: 9,
            mieng: 7,
            phut: 8,
            heso1: 8,
            heso2: 6,
            total: 7,
            totalAll: 4,
            date: 'Thứ 4, 20-10-2020 16:00' ,
            
        },
        {
            key: 4,
            name: 'Trần Quốc Tuấn',
            birthday: '09-09-1997',
            chuyencan: 9,
            mieng: 7,
            phut: 8,
            heso1: 8,
            heso2: 6,
            total: 7,
            totalAll: 8,
            date: 'Thứ 4, 20-10-2020 16:00',
            
        },
        {
            key: 5,
            name: 'Trần Quốc Tuấn',
            birthday: '09-09-1997',
            chuyencan: 9,
            mieng: 7,
            phut: 8,
            heso1: 8,
            heso2: 6,
            total: 7,
            totalAll: 10,
            date: 'Thứ 4, 20-10-2020 16:00',
            
        },
        {
            key: 6,
            name: 'Trần Quốc Tuấn',
            birthday: '09-09-1997',
            chuyencan: 9,
            mieng: 7,
            phut: 8,
            heso1: 8,
            heso2: 6,
            total: 7,
            totalAll: 8,
            date: 'Thứ 4, 20-10-2020 16:00',
            
        },
        {
            key: 7,
            name: 'Trần Quốc Tuấn',
            birthday: '09-09-1997',
            chuyencan: 9,
            mieng: 7,
            phut: 8,
            heso1: 8,
            heso2: 6,
            total: 7,
            totalAll: 4,
            date: 'Thứ 4, 20-10-2020 16:00',
            
        },
        {
            key: 8,
            name: 'Trần Quốc Tuấn',
            birthday: '09-09-1997',
            chuyencan: 9,
            mieng: 7,
            phut: 8,
            heso1: 8,
            heso2: 6,
            total: 7,
            totalAll: 5,
            date: 'Thứ 4, 20-10-2020 16:00',
           
        },
    ]
    const columns = [
        {
            title: "STT",
            dataIndex: 'key',
            key: 'key',
        },
        {
            title: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    Họ và Tên
                    <IconSort />
                </div>
            ),
            sorter: true,
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: "Ngày sinh",
            dataIndex: 'birthday',
            key: 'birthday',
        },
        {
            title: 'Học kì 1',
            children: [
                {
                    title: 'Chuyên cần',
                    key: 'chuyencan',
                    dataIndex: 'chuyencan'
                },
                {
                    title: 'Miệng',
                    key: 'mieng',
                    dataIndex: 'mieng'
                },
                {
                    title: '15 phút',
                    key: 'phut',
                    dataIndex: 'phut',
                },
                {
                    title: 'Hệ số 1',
                    key: 'heso1',
                    dataIndex: 'heso1',
                },
                {
                    title: 'Hệ số 2',
                    key: 'heso2',
                    dataIndex: 'heso2',
                },
                {
                    title: 'Trung bình',
                    key: 'total',
                    dataIndex: 'total',
                },

            ]
        },
        {
            title: (
                <div style={{width: '141px'}}>
                    Điểm trung bình cả năm
                </div>
            ),
            dataIndex: 'totalAll',
            key:'totalAll',
            render: (value:number) => {
                return (
                   value >= 7 ? <h3 className="title-16 j-center" style={{color: '#3CC13B', fontWeight: 700}}>{value}</h3> :
                   <h3 className="title-16 j-center" style={{color: '#ED2025', fontWeight: 700}}>{value}</h3> 
                )
            }
        },
        {
            title: 'Đạt',
          
            dataIndex: 'totalAll',
            key:'totalAll',
            render: (value:number) => {
                return (
                   value >= 7 ? <div style={{color: '#3CC13B', fontWeight: 700}}><IconCheck style={{fontSize: 24}}/></div> :
                   <div  style={{color: '#ED2025', fontWeight: 700}}><IconClose style={{fontSize: 24}}/></div> 
                )
            }
           
        },
        {
            title: 'Ngày cập nhật',
            dataIndex: 'date',
            key:'date',
           
        }
    ]
    return (
        <div>
            <div onClick={() => setShowList(false)}>
                <div className="mb-32" style={{ display: 'flex', alignItems: 'center' }} >
                    <h3 className="title-18-black mr-32">Quản lý bài kiểm tra</h3>
                    <IconArrowRight className="icon mr-32" />
                    <h1 className="main-title"> Xem bảng điểm</h1>
                </div>
            </div>
            <div className="select mb-24">
                <Select defaultValue="2020-2021" style={{ marginRight: '16px' }}>
                    <Option value="1">2020-2021</Option>
                </Select>
                <Select defaultValue="Chọn lớp" style={{ marginRight: '16px' }}>
                    <Option value="1">6A</Option>
                </Select>
                <Select defaultValue="Chọn khối" style={{ marginRight: '16px' }}>
                    <Option value="1">Khối 6</Option>
                </Select>
                <Select defaultValue="Chọn môn" style={{ marginRight: '10%' }}>
                    <Option value="1">Toán</Option>
                </Select>

                <Button style={{
                    height: '40px',
                    width: '136px',
                    marginRight: '16px',
                    background: 'rgb(255,216,184)',
                }} variant="file">
                    <span style={{ color: '#373839' }}>Tìm kiếm</span>
                </Button>
            </div>
            <div className="border-bottom mb-24"></div>
            <div className="exam-point">
                <h3 className="title-18-orange mb-16">Kết quả tìm kiếm</h3>
                <div className="exam-point__search mb-16">
                    <Row>
                        <Col span='4'>
                            <Row>
                                <h3 className="title-16-bold">Môn học:</h3>
                                <h3 className="title-16">Ngữ Văn</h3>
                            </Row>
                            <Row>
                                <h3 className="title-16-bold">Lớp:</h3>
                                <h3 className="title-16">10C1</h3>
                            </Row>
                            <Row>
                                <h3 className="title-16-bold">Mã lớp:</h3>
                                <h3 className="title-16">13426653563</h3>
                            </Row>
                        </Col>
                        <Col span='6'>
                            <Row style={{ display: 'flex', alignItems: 'flex-start' }}>
                                <h3 className="title-16-bold" style={{ marginRight: '20px' }}>Thời gian bắt đầu</h3>
                                <Col>

                                    <h3 className="title-16">Thứ 6, 20/10/2020</h3>
                                    <h3 className="title-16">13:00 (GMT +7 Bangkok)</h3>

                                </Col>

                            </Row>

                        </Col>
                        <Col offset="8" span="6">
                            <h3 className="title-16-bold mb-8" >In bảng điểm</h3>
                            <Row>
                                <Button variant="file" > Xuất file</Button>
                                <div className="select">
                                    <Select defaultValue="Excel-.xlxs">
                                        <Option> Excel-.xlxs</Option>
                                    </Select>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div className="exam-point__list">
                    <div className="title-content mb-16">
                        <div className="title-content__search">
                            <h3 className="title-18-orange">Bảng điểm của lớp</h3>
                            <Search placeholder="pls enter"></Search>

                        </div>
                    </div>
                    <div className="table-content">
                        <Table dataSource={data} columns={columns}  />
                    </div>
                </div>
            </div>
        </div >

    )
}

export default ExamPoint