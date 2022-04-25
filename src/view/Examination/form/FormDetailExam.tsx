import { Col, Row } from 'antd'
import React from 'react'
import Button from '../../../shared/component/Button/Button'
import { IModal } from '../../../shared/component/Modal/Modal'

const FormDetailExam = ({setIsModalVisible}: IModal ) => {
    return (
        <div className="exam-detail">
            <h2 className="title-28 j-center mb-24">Xem chi tiết lịch thi</h2>
            <Row>
                <Col span="6">
                    <Row className="mb-16">
                        <h3 className="title-16-bold " style={{width:'80px'}}>Môn thi:</h3>
                        <h3 className="title-16-black">Toán học</h3>
                    </Row>
                    <Row className="mb-16">
                        <h3 className="title-16-bold " style={{width:'80px'}}>Ngày thi:</h3>
                        <h3 className="title-16-black">20/01/2021</h3>
                    </Row>
                </Col>
                <Col span="6">
                    <Row className="mb-16">
                        <h3 className="title-16-bold " style={{width:'80px'}}>Phân loại:</h3>
                        <h3 className="title-16-black">Giữa kỳ</h3>
                    </Row>
                    <Row className="mb-16">
                        <h3 className="title-16-bold " style={{width:'80px'}}>Khoa-khối:</h3>
                        <h3 className="title-16-black">6</h3>
                    </Row>
                </Col>
                <Col span="7">
                    <Row className="mb-16">
                        <h3 className="title-16-bold " style={{width:'80px'}}>Thời gian:</h3>
                        <h3 className="title-16-black">45 phút</h3>
                    </Row>
                    <Row className="mb-16">
                        <h3 className="title-16-bold " style={{marginRight: '12px'}}>Lớp:</h3>
                        <h3 className="title-16-black">9A1,9A3,9A4,9A5</h3>
                    </Row>
                </Col>
                <Col span="5">
                    <Row className="mb-16">
                        <h3 className="title-16-bold " style={{width:'80px'}}>Học kỳ:</h3>
                        <h3 className="title-16-black">Học kỳ 1</h3>
                    </Row>

                </Col>

            </Row>
            <Row className="mb-16">
                <h3 className="title-16-bold " style={{minWidth:'80px', marginRight: '12px'}}>Phân công chấm thi:</h3>
                <h3 className="title-16-black" style={{marginRight: '30px'}}>Nguyễn Văn C</h3>
                <h3 className="title-16-black">Trần Thị D</h3>
            </Row>
            <Row className="mb-16">
                <h3 className="title-16-bold " style={{width:'120px'}}>File đính kèm:</h3>
                <h3 className="title-16-black">Loremisump.pdf</h3>
            </Row>
            <Button variant="secondary"
                style={{
                    background: '#FFD8B8',
                    border: '1px solid #FF7506',
                    height: '33px',
             
                    width: '130px'
                }}
            >Tải xuống</Button>
        </div>
    )
}

export default FormDetailExam