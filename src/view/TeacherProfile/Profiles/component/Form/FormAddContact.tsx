import React from 'react'
import { Form, Input } from 'antd'
import Button from '../../../../../shared/component/Button/Button'
const FormAddContact = () => {
    return (
        <div className="form-layout">
            <h2 className="title-28 j-center mb-24">
                Thêm người liên hệ
            </h2>
            <div className="form-input-required">
                <Form labelCol={{ span: 5 }} wrapperCol={{ span: 19 }}>
                    <Form.Item
                        label="Họ và tên:"
                        name="name"
                        rules={[{ required: true, message: "please enter " }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Địa chỉ:"
                        name="address"
                        rules={[{ required: true, message: "please enter " }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Số điện thoại:"
                        name="phone"
                        rules={[{ required: true, message: "please enter " }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item wrapperCol={{offset: 8 , span: "12" }}>
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

export default FormAddContact