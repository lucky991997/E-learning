import { Checkbox, Col, Form, Input, Row } from 'antd'
import React, { useState } from 'react'
import Button from '../../../../shared/component/Button/Button'

const FormSettingTrain = () => {
    const [year, setYear] = useState(false)
    const [tin, setTin] = useState(false)
    return (
        <div className="form-layout">
            <h3 className="title-28 j-center mb-24">Thiệt lập Bậc đào tạo</h3>
            <div className="form-input">
                <Form
                    labelCol={{ span: '6' }}
                    wrapperCol={{ span: '18' }}
                >
                    <Form.Item
                        label="Trình độ đào tạo:"
                        name="train"
                    >
                        <Input></Input>
                    </Form.Item>
                    <Form.Item
                        label="Hình thức đào tạo:"
                        name="hinhthuc"
                    >
                        <Input></Input>
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{ offset: 6, span: '18' }}
                        name=""
                    >
                        <Row>
                            <div className="form-checkbox-main" style={{marginTop: '5px', marginRight: '10%'}}>

                                <Col span='8' style={{ width: '100%' , minHeight:"40px"}}>
                                    <Checkbox style={{ width: '100px'  }} onChange={e => setYear(e.target.checked)}><span >Niên chế</span></Checkbox>
                                </Col>
                            </div>
                            {
                                year === true ? (
                                    <>

                                        <Col span="8" style={{ display: 'flex' }}>
                                            <Input style={{ width: 80 }} />
                                            <h3 className="title-16 ml-8">Năm</h3>
                                        </Col>
                                        <Col span="8" style={{ display: 'flex' }}>
                                            <Input style={{ width: 80 }} />
                                            <h3 className="title-16 ml-8">Học kỳ/ Năm</h3>
                                        </Col>
                                    </>


                                ) : ''
                            }


                        </Row>

                    </Form.Item>
                    <Form.Item
                        wrapperCol={{ offset: 6, span: '16' }}

                    >
                        <h3 className="title-16">Đào tạo theo niên chế là đào tạo them đơn vị năm học.
                            Mỗi chương trình đào tạo của một ngành, nghề được thực hiện trong một số tháng hoặc năm nhất định.
                            Mỗi năm học thường được tổ chức thành hai học kỳ.</h3>
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{ offset: 6, span: '18' }}
                        name=""
                    >
                        <div className="form-checkbox-main">

                            <Checkbox onChange={(e) => setTin(e.target.checked)} >Tín chỉ</Checkbox>
                        </div>
                    </Form.Item>
                    {
                        tin === true ? (
                            <Form.Item
                                label="Thời gian đào tạo:"
                                name="time"
                            >
                                <Row>
                                    <Col span="5" style={{ display: 'flex' }}>
                                        <Input style={{ width: 60 }} />
                                        <h3 className="title-16 ml-8">Năm</h3>
                                    </Col>
                                    <Col span="10" style={{ display: 'flex' }}>
                                        <Input style={{ width: 80 }} />
                                        <h3 className="title-16 ml-8">Học phần bắt buộc</h3>
                                    </Col>
                                    <Col span="9" style={{ display: 'flex' }}>
                                        <Input style={{ width: 80 }} />
                                        <h3 className="title-16 ml-8">Học phần tự chọn</h3>
                                    </Col>
                                </Row>
                            </Form.Item>
                        ) : ''
                    }
                    <Form.Item
                        label="Ghi chú"
                        name="note"
                    >
                        <Input.TextArea></Input.TextArea>
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{ offset: 6, span: '18' }}
                        name="check"
                    >
                        <div className="form-checkbox-main">

                            <Checkbox>Kích Hoạt</Checkbox>
                        </div>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{ offset: 8, span: '12' }}

                    >
                        <div className="form-layout-btn mt-32">
                            <Button variant="secondary">Hủy</Button>
                            <Button variant="primary">Lưu</Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default FormSettingTrain