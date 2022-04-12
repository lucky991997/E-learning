import { Form, Input, Switch, Typography } from 'antd'
import React from 'react'
import Button from '../../../../shared/component/Button/Button'

const FormConfig = () => {
    return (
        <div className="form-layout">
            <h2 className="title-28 j-center mb-24">Thiệt lập người dùng</h2>
            <div className="form-input-required">
                <Form
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
                >
                    <Form.Item
                        label="Tên người dùng:"
                        name="name"
                        rules={[{ required: true, message: "please enter " }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email:"
                        name="email"
                        rules={[{ required: true, message: "please enter " }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Nhóm người dùng:"
                        name="user"
                        rules={[{ required: true, message: "please enter " }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 6, span: '18' }}
                        valuePropName="checked">
                        <div className="form-switch">

                            <Switch />
                            <Typography>Đang hoạt động</Typography>
                        </div>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 4, span: '16' }}
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

export default FormConfig