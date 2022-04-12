import { Checkbox, DatePicker, Form, Input, Row, Select } from 'antd'
import React from 'react'
import { MdDateRange } from 'react-icons/md'
import Button from '../../../../../shared/component/Button/Button'
import { IconAdd, IconMinus } from '../../../../../shared/component/Icon/Icon'

const FormAddWork = () => {
    const { Option } = Select
    const course = ['Toán - Lý - Hóa', 'Sinh - Sử - Địa', 'Nghệ Thuật']
    const chucVu = ['Giảng viên', 'Trưởng bộ môn', 'Trợ giảng']
    return (
        <div className="form-layout">
            <h2 className="title-28 j-center mb-24">Thêm mới quá trình công tác</h2>
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
                        label="Cơ quan/Đơn vị:"
                        name="coquan"
                        rules={[{ required: true, message: "please enter " }]}
                    >
                        <Input />

                    </Form.Item>
                    <div className="form-checkbox">
                        <Form.Item style={{ minHeight: 0 }} name="remember" valuePropName="checked" wrapperCol={{ offset: 6, span: 16 }}>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                    </div>

                    <Form.Item
                        label="Tổ/Bộ môn:"
                        name="tobomon"
                        rules={[{ required: true, message: "please enter " }]}
                    >


                        <div className="select-gray">

                            <Select placeholder="Lựa chọn">
                                {
                                    course.map((item, index) => (
                                        <Option key={index}>{item}</Option>
                                    ))
                                }
                            </Select>
                        </div>

                    </Form.Item>
                    <Form.Item
                        label="Chức vụ:"
                        name="role"
                        rules={[{ required: true, message: "please enter " }]}
                    >
                        <div className="select-gray">

                            <Select placeholder="Lựa chọn">
                                {
                                    chucVu.map((item, index) => (
                                        <Option key={index}>{item}</Option>
                                    ))
                                }
                            </Select>
                        </div>
                    </Form.Item>
                    <Form.Item
                        label="Ngày bắt đầu:"
                        name="startdate"
                        rules={[{ required: true, message: "please enter " }]}
                    >
                        <DatePicker style={{ width: '100%', height: '40px' }} suffixIcon={<MdDateRange className="select__calendar-icon" />} picker="date" />

                    </Form.Item>
                    <Form.Item
                        label="Ngày kết thúc:"
                        name="enddate"
                        rules={[{ required: true, message: "please enter " }]}
                    >
                        <DatePicker style={{ width: '100%', height: '40px' }} suffixIcon={<MdDateRange className="select__calendar-icon" />} picker="date" />
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
                            <Button variant="secondary">Hủy</Button>
                            <Button variant="primary">Lưu</Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>

    )
}

export default FormAddWork