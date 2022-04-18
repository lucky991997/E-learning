import { Form, Input, Switch, Typography } from 'antd'
import React from 'react'
import Button from '../../../shared/component/Button/Button'
import {IModal} from '../../../shared/component/Modal/Modal'

const FormSettingCourse = ({setIsModalVisible}: IModal) => {
    return (
        <div className="form-layout" style={{width: '884px'}}>
            <h2 className="title-28 j-center mb-24">Thiệt lập môn học</h2>
            <div className="form-input">
                <Form
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
                >
                    <Form.Item
                        label="Loại môn học:"
                        name="name"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Trạng thái:"
                        name="status"
                    >
                        <div className="form-switch">
                            <Switch />
                            <Typography>Đang hoạt động</Typography>
                        </div>

                    </Form.Item>

                    <Form.Item
                        label="Ghi chú:"
                        name="note"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: "12" }}>
                        <div className="form-layout-btn mt-32">
                            <Button variant="secondary" onClick={() => setIsModalVisible(false)}>Hủy</Button>
                            <Button variant="primary">Lưu</Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default FormSettingCourse