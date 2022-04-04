import { Col, Form, Input, Row, Select } from "antd";
import React from "react";
import Button from "../../../../../shared/component/Button/Button";

const FormPoint = () => {
  const { Option } = Select;
  const point = [1, 2, 3];
  return (
    <div className="form-layout form-point">
      <h2 className="title-28 j-center mb-24">Thêm loại điểm mới</h2>
      <Form labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
        <Row>
          <Col span="16">
            <div className="form-input-required">
              <Form.Item
                label="Tên loại điểm:"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "please enter name point",
                  },
                ]}
              >
                <Input style={{ width: "336px" }} />
              </Form.Item>
            </div>
          </Col>
          <Col span="8">
            <div className="form-input">
              <Form.Item label="Hệ số:" name="number">
                <Select>
                  {point.map((item, index) => (
                    <Option key={index}>{item}</Option>
                  ))}
                </Select>
              </Form.Item>
            </div>
          </Col>
        </Row>
        <div className="border-bottom" style={{ marginTop: 0 }}></div>
        <h3 className="title-18-orange mb-24">Số cột điểm tối thiểu</h3>
        <div className="form-input">
          <Row className="mb-48">
            <Col span="8">
              <Form.Item label="Học kì I:" name="sem1">
                <Input style={{width:"96px", marginLeft:'16px'}}/>
              </Form.Item>
            </Col>
            <Col span="8">
              <Form.Item label="Học kì II:" name="sem2">
                <Input style={{width:"96px", marginLeft:'16px'}}/>
              </Form.Item>
            </Col>
          </Row>
        </div>

        <Form.Item>
          <div className="form-layout-btn">
            <Button variant="secondary" styles="mr-32">
              Hủy
            </Button>
            <Button variant="primary">Lưu</Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormPoint;
