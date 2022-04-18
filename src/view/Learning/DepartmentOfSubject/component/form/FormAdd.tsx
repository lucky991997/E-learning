import { Col, Form, Input, Row, Select } from "antd";
import React, { useState } from "react";
import Button from "../../../../../shared/component/Button/Button";
import { IconAdd, IconMinus } from "../../../../../shared/component/Icon/Icon";
import { IModal } from "../../../../../shared/component/Modal/Modal";

import "./index-form.scss";



const FormDept = ({setIsModalVisible}: IModal) => {
  const { Option } = Select;
  const [value, setValue] = useState("");
  const select = ["Trần Quốc Tuấn", "Nguyễn Văn A"];

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <div className="form-layout form-dept">
      <h1 className="title-28 j-center mb-24">Thêm Tổ - Bộ môn mới</h1>
      <div className="form-dept-add">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
         
          autoComplete="off"
        >
          <div className="form-input-required">
            <Form.Item
              label="Tổ - Bộ môn:"
              name="dept"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                onChange={(e) => handleChange(e)}
                style={{
                  background: `${value !== "" ? "#fff" : "#F2F2F2"}`,
                }}
              />
            </Form.Item>
          </div>

          <div className="form-input-required">
            <Form.Item
              label="Trưởng tổ - Bộ môn:"
              name="lead"
              rules={[
                { required: true, message: "Please input your department!" },
              ]}
            >
              <Select>
                {select.map((item, index) => (
                  <Option key={index}>{item}</Option>
                ))}
              </Select>
            </Form.Item>
          </div>

          <div className="border-bottom"></div>

          <h3 className="title-18-orange mb-24">Danh sách môn học</h3>
          <Row>
            <Col span="8">
              <div className="mb-16">
                <IconMinus />
              </div>
            </Col>

            <Col span="8">
              <div className="mb-16">
                <IconMinus />
              </div>
            </Col>
            <Col span="8">
              <div className="mb-16">
                <IconMinus title="toán" />
              </div>
            </Col>

            <Col span="8">
              <div className="mb-16">
                <IconMinus title="toán" />
              </div>
            </Col>
            <Col span="8">
              <div className="mb-16">
                <IconMinus title="toán" />
              </div>
            </Col>
            <Col span="8">
              <div className="mb-16">
                <IconMinus title="toán" />
              </div>
            </Col>
          </Row>

          <IconAdd />
          <div style={{ marginLeft: "-50%" }}>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <div className="form-layout-btn mt-51">
                <Button variant="secondary" styles="mr-32"
                  onClick={() => setIsModalVisible(false)}
                >
                  Hủy
                </Button>
                <Button variant="primary">Thêm</Button>
              </div>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default FormDept;
