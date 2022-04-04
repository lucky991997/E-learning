import React from "react";
import { Checkbox, Col, Form, Input, Row, Select } from "antd";
import { IconAdd, IconMinus } from "../../../../../shared/component/Icon/Icon";
import Button from "../../../../../shared/component/Button/Button";

import "./form-class.scss";

const FormClass = () => {
  const { Option } = Select;
  const year = ["2020-2021"];
  const Class = ["Lớp cơ bản", "Lớp nâng cao"];
  const khoi = ["Khối 6", "Khối 7", "Khối 8", "Khối 9"];
  return (
    <div className="form-layout form-class">
      <h1 className="title-28 j-center mb-24">Thêm lớp học mới</h1>
      <div className="form-input-required">
        <Form labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
          <div className="form-input-required">
            <h3 className="title-18-orange mb-24">Thông tin chung</h3>
            <Row>
              <Col span="12">
                <div className="form-input-select__year">
                  <Form.Item label="Niên khoá:">
                    <Select style={{ width: "130px" }}>
                      {year.map((item, index) => (
                        <Option key={index}>{item}</Option>
                      ))}
                    </Select>
                  </Form.Item>
                </div>
              </Col>

              <Col span="12">
                <Form.Item
                  label="Khoa - Khối:"
                  name="dept"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select>
                    {khoi.map((item, index) => (
                      <Option key={index}>{item}</Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              label="Tên lớp:"
              name="name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Số lượng học viên:"
              name="quantity"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Phân loại lớp:"
              name="type"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select>
                {Class.map((item, index) => (
                  <Option key={index}>{item}</Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label="Giáo viên chủ nhiệm:">
              <Select></Select>
            </Form.Item>
            <Form.Item label="Mô tả:">
              <Input.TextArea value=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utnec augue quis
                 nulla dictum ornare eu vitae neque. In sodales tincidunt purus eget porttitor.">
               
              </Input.TextArea>
            </Form.Item>
          </div>
          <div className="border-bottom mt-16"></div>
          <h3 className="title-18-orange mb-24">Danh sách môn học</h3>

          <div className="form-class-inherit mb-24">
            <Checkbox />
            <h3
              className="title-16 "
              style={{ marginRight: "8px", marginLeft: "16px" }}
            >
              Kế thừa dữ liệu:{" "}
            </h3>
            <div className="form-input-select__year">
              <Select
                style={{ width: "144px", color: "#7C7C7C" }}
                placeholder="niên khóa"
              >
                {year.map((item, index) => (
                  <Option key={index}>{item}</Option>
                ))}
              </Select>
            </div>
          </div>
          <div className="form-class-course mb-24">
            <Row>
              <Col span="8" className="mb-24">
                <IconMinus title="toán" />
              </Col>
              <Col span="8" className="mb-24">
                <IconMinus title="toán" />
              </Col>
              <Col span="8" className="mb-24">
                <IconMinus title="toán" />
              </Col>
              <Col span="8" className="mb-24">
                <IconMinus title="toán" />
              </Col>
              <Col span="8" className="mb-24">
                <IconMinus title="toán" />
              </Col>
            </Row>
          </div>

          <IconAdd />
          <div style={{ marginLeft: "25%" }} className="mt-51">
            <Form.Item>
              <div className="form-layout-btn ">
                <Button variant="secondary" styles="mr-32">
                  Hủy
                </Button>

                <Button variant="primary">Lưu</Button>
              </div>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};





export default FormClass;
