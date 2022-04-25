import { Checkbox, Col, DatePicker, Form, Input, Row, Select } from 'antd'
import React from 'react'
import { ImAttachment } from 'react-icons/im'
import { MdDateRange } from 'react-icons/md'
import Button from '../../../../../shared/component/Button/Button'
import { IconAdd, IconMinus } from '../../../../../shared/component/Icon/Icon'
import { IModal } from '../../../../../shared/component/Modal/Modal'

const FormAddEducation = ({setIsModalVisible}: IModal) => {
    const { Option } = Select
    const course = ['Toán - Lý - Hóa', 'Sinh - Sử - Địa', 'Nghệ Thuật']
    const chucVu = ['Giảng viên', 'Trưởng bộ môn', 'Trợ giảng']
    return (
        <div className="form-layout">
            <h2 className="title-28 j-center mb-24">Thêm mới Chương trình đào tạo</h2>
            <div className="form-input-required">
                <Form labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}
                    initialValues={{ remember: true }}
                >
                    <Form.Item
                        label="Giảng viên"
                        name="name"
                    >
                        <Input style={{ background: '#E1E1E1' }} />

                    </Form.Item>
                    <Form.Item
                        label="Cơ sở đào tạo:"
                        name="coso"
                        rules={[{ required: true, message: "please enter " }]}
                    >
                        <Input />

                    </Form.Item>
                  

                    <Form.Item
                        label="Chuyên ngành:"
                        name="chuyennganh"
                        rules={[{ required: true, message: "please enter " }]}
                    >


                        <Input/>

                    </Form.Item>

                    <Form.Item
                        label="Ngày bắt đầu:"
                        name="startdate"
                        rules={[{ required: true, message: "please enter " }]}
                    >
                        <DatePicker style={{ width: '100%', height: '40px' }} suffixIcon={<MdDateRange className="select__calendar-icon" />} picker="date" />

                    </Form.Item>
                    <div className="form-checkbox">
                        <Form.Item style={{ minHeight: 0 }} name="remember" valuePropName="checked" wrapperCol={{ offset: 6, span: 16 }}>
                            <Checkbox>Đã kết thúc Chương trình đào tạo</Checkbox>
                        </Form.Item>
                    </div>
                    <Form.Item
                        label="Ngày kết thúc:"
                        name="enddate"
                        rules={[{ required: true, message: "please enter " }]}
                    >
                        <DatePicker style={{ width: '100%', height: '40px' }} suffixIcon={<MdDateRange className="select__calendar-icon" />} picker="date" />
                    </Form.Item>
                    <Form.Item
                        label="Hình thức:"
                        name="hinhthuc"
                        rules={[{ required: true, message: "please enter " }]}
                    >


                        <Input />

                    </Form.Item>
                    <Form.Item
                        label="Văn bằng/ Chứng chỉ:"
                        name="vanbang"
                        rules={[{ required: true, message: "please enter " }]}
                    >


                        <Input />

                    </Form.Item>
                    <Form.Item
                        label="Tệp đính kèm:"
                        name="file"
                        rules={[{ required: true, message: "please enter " }]}
                    >

                        <div className="form-export__file">
                            <Row>
                                <Col span="12">

                                    <Input suffix={<ImAttachment className="attach-icon" />} />
                                    <h3 className="title-16-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                                </Col>
                                <Col span="12">
                                    <div className="form-export__file__upload">
                                        Chọn tệp tải lên...
                                    </div>
                                </Col>
                            </Row>

                        </div>

                    </Form.Item>
                    <div className="border-bottom "></div>
                    <Form.Item>
                        <Row className="mb-24">

                            <IconMinus styles='txt-black' />
                        </Row>


                        <IconAdd />

                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: "12" }}>

                        <div className="form-layout-btn mt-32">
                            <Button variant="secondary"
                            onClick ={() => setIsModalVisible(false)} 
                            >Hủy</Button>
                            <Button variant="primary">Lưu</Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>

    )
}

export default FormAddEducation