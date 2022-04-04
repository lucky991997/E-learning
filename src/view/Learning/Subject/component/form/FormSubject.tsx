import { Col, Form, Input, Row, Select } from "antd";
import React, { useState } from "react";
import Button from "../../../../../shared/component/Button/Button";

import "./subject.scss";
const FormSubject = () => {
  const { Option } = Select;
  const typeSubject = ["Môn học bắt buộc", "Môn học tự chon"];
  const department = ["Khoa học tự nhiên", "Văn hóa xã hội"];
  const [value, setValue] = useState("");
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  const changeColor = () => {
    const background = value !== "" ? "#fff" : "#F2F2F2";
    return background;
  };

  return (
    <div className="form-layout form-subject">
      <h1 className="title-28 mb-24 j-center">Thêm môn học mới</h1>
      <Form labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
        <div className="form-input">
          <Form.Item label="Tổ - Bộ môn:">
            <Select
              onChange={(e) => handleChange(e)}
              style={{
                background: `${changeColor()}`,
              }}
            >
              {department.map((item, index) => (
                <Option key={index}>{item}</Option>
              ))}
            </Select>
          </Form.Item>
        </div>
        <div className="form-input">
          <Form.Item label="Tên môn học:">
            <Input
              onChange={(e) => handleChange(e)}
              style={{
                background: `${changeColor()}`,
              }}
            />
          </Form.Item>
        </div>
        <div className="form-input">
          <Form.Item label="Mã môn:">
            <Input
              onChange={(e) => handleChange(e)}
              style={{ background: `${changeColor()}`, width: "269px" }}
            />
          </Form.Item>
        </div>
        <div className="form-input">
          <Form.Item label="Loại môn học:">
            <Select
              onChange={(e) => handleChange(e)}
              style={{
                background: `${changeColor()}`,
              }}
            >
              {typeSubject.map((item, index) => (
                <Option key={index}>{item}</Option>
              ))}
            </Select>
          </Form.Item>
        </div>
        <div className="border-bottom"></div>
        <h3 className="title-18-orange mb-24">Số tiết/Học kì</h3>
        <div className="form-subject__semester form-input mb-48">
          <Row>
            <Col span="12">
              <Form.Item label="Học kì I:" name="sem1">
                <Input
                  style={{ background: `${changeColor()}`, width: "171px" }}
                  onChange={(e) => handleChange(e)}
                />
              </Form.Item>
            </Col>
            <Col span="12">
              <Form.Item
                label="Học kì 2:"
                name="sem2"
                style={{ float: "right" }}
              >
                <Input
                  style={{ background: `${changeColor()}`, width: "171px" }}
                  onChange={(e) => handleChange(e)}
                />
              </Form.Item>
            </Col>
          </Row>
        </div>
        <div style={{ marginLeft: "25%" }}>
          <Form.Item>
            <div className="form-layout-btn">
              <Button variant="secondary" styles="mr-32">
                Hủy
              </Button>
              <Button variant="primary">Lưu</Button>
            </div>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default FormSubject;
