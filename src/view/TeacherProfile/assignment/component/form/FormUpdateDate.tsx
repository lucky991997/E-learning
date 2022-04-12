import { DatePicker, Form, Input, Select } from 'antd'
import React from 'react'
import { MdDateRange } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import Button from '../../../../../shared/component/Button/Button'

const FormUpdateDate = () => {
   
    return (
        <div className="form-layout">
            <h2 className="title-28 j-center mb-24">Cập nhật lịch giảng dạy</h2>
            <div className="form-input-required">
                <Form
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
                >
                    <Form.Item
                        label="Giảng viên:"
                        name="name"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Môn học:"
                        name="course"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Lớp học:"
                        name="class"
                    >
                        <div className="select-gray">

                            <Select />
                        </div>
                    </Form.Item>
                    <Form.Item
                        label="Ngày bắt đầu:"
                        name="startdate"
                        rules={[{ required: true, message: "please enter " }]}
                    >
                        <div className="select__calendar">

                            <DatePicker picker="date" suffixIcon={<MdDateRange className="select__calendar-icon" />} />
                        </div>
                    </Form.Item>
                    <Form.Item
                        label="Ngày kết thúc:"
                        name="enddate"
                        rules={[{ required: true, message: "please enter " }]}
                    >
                        <div className="select__calendar">

                            <DatePicker picker="date" suffixIcon={<MdDateRange className="select__calendar-icon" />} />
                        </div>
                    </Form.Item>
                    <Form.Item
                        label="Mô tả"
                        name="description"
                    >
                        <Input.TextArea />
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

export default FormUpdateDate