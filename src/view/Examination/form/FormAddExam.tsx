import { Col, Form, Input, Row, Select, Radio, Checkbox, DatePicker } from "antd";
import React, { useState } from "react";
import Button from "../../../shared/component/Button/Button";
import { IModal } from "../../../shared/component/Modal/Modal";

const FormAddExam = ({ setIsModalVisible }: IModal) => {
    const { Option } = Select;

    const [value, setValue] = useState("");
    const handleChange = (e: any) => {
        setValue(e.target.value);
    };
    const changeColor = () => {
        const background = value !== "" ? "#fff" : "#F2F2F2";
        return background;
    };

    return (
        <div className="form-layout" style={{ width: "884px" }}>
            <h1 className="title-28 mb-24 j-center">Thêm lịch thi mới</h1>
            <div className="form-input-required">
                <Form labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
                    <Form.Item
                        label="Niên khóa:"
                        name="nien khoa"
                    >
                        <Row>
                            <Col style={{ marginRight: '46px' }} span="14">

                                <Select
                                    onChange={(e) => handleChange(e)}
                                    style={{
                                        background: `${changeColor()}`,
                                        width: '170px',
                                    }}
                                >

                                </Select>
                            </Col>
                            <Col span="8">
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <h3 className="title-16-bold" style={{ marginRight: '24px' }}>Khối:</h3>
                                    <Select
                                        onChange={(e) => handleChange(e)}
                                        style={{
                                            background: `${changeColor()}`,
                                            width: '170px',
                                        }}
                                    >

                                    </Select>
                                </div>
                            </Col>
                        </Row>
                    </Form.Item>
                    <Form.Item
                        label="Lớp học"
                        name="class"
                        rules={[
                            { required: true, message: "Please chose class!" },
                        ]}
                    >
                        <Radio.Group onChange={handleChange} value={value}>
                            <Radio value={1}>Tất cả </Radio>
                            <Radio value={2} style={{ margin: '0 60px' }}>Lớp cơ bản </Radio>
                            <Radio value={3}>Lớp nâng cao</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{ offset: 6, span: 18 }}

                    >

                        <Radio value={4}>Tùy chọn </Radio>

                    </Form.Item>
                    <Form.Item
                        label="Môn thi"
                        name="subject"
                        rules={[
                            { required: true, message: "Please chose class!" },
                        ]}
                    >
                        <Select></Select>
                    </Form.Item>
                    <Form.Item
                        label="Tên kì thi"
                        name="sem"
                        rules={[
                            { required: true, message: "Please chose class!" },
                        ]}
                    >
                        <Input
                            onChange={(e) => handleChange(e)}
                            style={{ background: `${changeColor()}`, width: "269px" }}
                        />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{ offset: 6, span: 18 }}

                    >

                        <Checkbox >Học kì 1</Checkbox>
                        <Checkbox >Học kì 2</Checkbox>
                    </Form.Item>
                    <Form.Item
                        label="Thời lượng làm bài"
                        name="time"
                        rules={[
                            { required: true, message: "Please chose class!" },
                        ]}
                    >
                        <Row>

                            <Input
                                onChange={(e) => handleChange(e)}
                                style={{ background: `${changeColor()}`, width: "269px" }}
                            /> phút
                        </Row>
                    </Form.Item>
                    <Form.Item
                        label="Ngày làm bài"
                        name="date"
                        rules={[
                            { required: true, message: "Please chose class!" },
                        ]}
                    >
                        <DatePicker />
                    </Form.Item>

                    <Row>

                        <div className="border-bottom"></div>
                    </Row>

                    <Row>

                        <h3 className="title-18-orange mb-16">Phân công chấm thi</h3>
                    </Row>

                    <Form.Item
                        label={<Radio>Áp dụng cho tất cả lớp</Radio>}>
                        <Input
                            onChange={(e) => handleChange(e)}
                            style={{ background: `${changeColor()}`, width: "269px" }}
                        />
                    </Form.Item>
                    <Form.Item
                        label={<Radio>Tùy chọn</Radio>}>
                        <Input
                            onChange={(e) => handleChange(e)}
                            style={{ background: `${changeColor()}`, width: "269px" }}
                        />
                    </Form.Item>

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
    );
};

export default FormAddExam;
