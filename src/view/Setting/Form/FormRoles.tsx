import { Checkbox, Col, Form, Input, Row } from 'antd'
import React, { useState } from 'react'
import Button from '../../../shared/component/Button/Button'
import { IModal } from '../../../shared/component/Modal/Modal'

const FormRoles = ({setIsModalVisible} : IModal) => {
    const data = ['Xem', 'Chỉnh sửa', 'Xóa', 'Thêm mới']
    const [showRole, setShowRole] = useState(false)
    const handleShow = () => {
        setShowRole(true)
    }
    const handleHide = () => {
        setShowRole(false)

    }
    return (
        <div className="form-layout" style={{width:'884px'}}>
            <h2 className="title-28 j-center mb-24">Thiệt lập nhóm người dùng</h2>
            <div className="form-input">
                <Form
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
                >
                    <Form.Item
                        label="Tên nhóm:"
                        name="name"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Ghi chú:"
                        name="note"
                    >
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item
                        label="Phân quyền:"
                        name="check"
                    >
                        <Row >
                            <Col span="10" className="form-checkbox-main">

                                <Checkbox onClick={() => handleHide()} />
                                <h3 className="title-16" style={{ marginLeft: '8px' }}>Toàn quyền quản trị</h3>
                            </Col>
                            <Col span="8" className="form-checkbox-main">

                                <Checkbox onClick={() => handleShow()} />
                                <h3 className="title-16" style={{ marginLeft: '8px' }}>Tùy Chọn</h3>

                            </Col>
                        </Row>
                    </Form.Item>
                    {
                        showRole === true ? (<div className="active-role">


                            <div className="border-bottom"></div>
                            <Form.Item
                                label="Khai báo dữ liệu:"
                                name="data"
                            >
                                <Checkbox.Group style={{ width: '100%' }}>
                                    <Row>
                                        {
                                            data.map((item, index) => (
                                                <Col span='6' key={index}>
                                                    <Checkbox value={item}>{item}</Checkbox>
                                                </Col>

                                            ))
                                        }
                                    </Row>

                                </Checkbox.Group>
                            </Form.Item>

                            <Form.Item
                                label="Hồ sơ học viên:"
                                name="student"
                            >
                                <Checkbox.Group style={{ width: '100%' }}>
                                    <Row>
                                        {
                                            data.map((item, index) => (
                                                <Col span='6' key={index}>
                                                    <Checkbox value={item}>{item}</Checkbox>
                                                </Col>

                                            ))
                                        }
                                    </Row>

                                </Checkbox.Group>
                            </Form.Item>
                            <Form.Item
                                label="Hồ sơ giảng viên:"
                                name="teacher"
                            >
                                <Checkbox.Group style={{ width: '100%' }}>
                                    <Row>
                                        {
                                            data.map((item, index) => (
                                                <Col span='6' key={index}>
                                                    <Checkbox value={item}>{item}</Checkbox>
                                                </Col>

                                            ))
                                        }
                                    </Row>

                                </Checkbox.Group>
                            </Form.Item>
                            <Form.Item
                                label="Thi cử:"
                                name="exam"
                            >
                                <Checkbox.Group style={{ width: '100%' }}>
                                    <Row>
                                        {
                                            data.map((item, index) => (
                                                <Col span='6' key={index}>
                                                    <Checkbox value={item}>{item}</Checkbox>
                                                </Col>

                                            ))
                                        }

                                    </Row>

                                </Checkbox.Group>
                            </Form.Item>
                            <Form.Item
                                wrapperCol={{ offset: 6, span: '18' }}
                                name="point"
                            >

                                <Checkbox>Nhập điểm</Checkbox>


                            </Form.Item>
                            <Form.Item
                                label="Cài đặt hệ thống::"
                                name="setting"
                            >
                                <Checkbox.Group style={{ width: '100%' }}>
                                    <Row>
                                        {
                                            data.map((item, index) => (
                                                <Col span='6' key={index}>
                                                    <Checkbox value={item}>{item}</Checkbox>
                                                </Col>

                                            ))
                                        }
                                    </Row>

                                </Checkbox.Group>
                            </Form.Item>

                        </div>) : ''
                    }

                    <Form.Item wrapperCol={{ offset: 6, span: "12" }}>
                        <div className="form-layout-btn mt-32">
                            <Button variant="secondary"
                                onClick={() => setIsModalVisible(false)}
                            >Hủy</Button>
                            <Button variant="primary">Lưu</Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div >
    )
}

export default FormRoles
