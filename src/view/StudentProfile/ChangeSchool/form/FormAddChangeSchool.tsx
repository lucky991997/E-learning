import React from "react";

import { Col, DatePicker, Form, Input, Row, Select, Upload } from "antd";
import { ImAttachment } from "react-icons/im";
import { MdDateRange } from "react-icons/md";
import Button from "../../../../shared/component/Button/Button";

const FormAddChangeSchool = () => {
  const { Option } = Select;
  const city = ["Lựa chọn", "Cần Thơ", "Đà Nẵng", "Cà Mau"];
  const province = ["Lựa chọn", "Quận 1", "Quận 2", "Quận 3"];
  return (
    <div className="form-layout">
      <h2 className="title-28 j-center mb-24">Tiếp nhận chuyển trường</h2>
      <div className="form-input-required">
        <Form labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
          <Form.Item
            label="Tên học viên:"
            name="name"
            rules={[{ required: true, message: "please enter " }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mã học viên:"
            name="id"
            rules={[{ required: true, message: "please enter " }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Ngày chuyển đến:"
            name="date"
            rules={[{ required: true, message: "please enter " }]}
          >
            <div className="select-__calendar">
              <DatePicker
                style={{ width: "100%", height: "40px", background: "#F2F2F2" }}
                picker="date"
                suffixIcon={<MdDateRange className="select__calendar-icon" />}
              />
            </div>
          </Form.Item>

          <Form.Item
            label="Học kỳ chuyển:"
            name="sem"
            rules={[{ required: true, message: "please enter " }]}
          >
            <h3 className="title-16">Học kỳ I</h3>
          </Form.Item>

          <Form.Item
            label="Tỉnh/Thành:"
            name="city"
            rules={[{ required: true, message: "please enter " }]}
          >
            <div className="select-gray">
              <Select placeholder="Lựa chọn" style={{ background: "#F2F2F2" }}>
                {city.map((item, index) => (
                  <Option key={index}>{item}</Option>
                ))}
              </Select>
            </div>
          </Form.Item>

          <Form.Item
            label="Quận/Huyện:"
            name="province"
            rules={[{ required: true, message: "please enter " }]}
          >
            <div className="select-gray">
              <Select placeholder="Lựa chọn">
                {province.map((item, index) => (
                  <Option key={index}>{item}</Option>
                ))}
              </Select>
            </div>
          </Form.Item>

          <Form.Item
            label="Chuyển từ:"
            name="from"
            rules={[{ required: true, message: "please enter " }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Lý do:"
            name="reason"
            rules={[{ required: true, message: "please enter " }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            label="Tệp đính kèm:"
            name="file"
            rules={[{ required: true, message: "please enter " }]}
          >
            <Row className="form-export__file">
              <Col span="12">
                <Input suffix={<ImAttachment className="attach-icon" />} />
                <h3 className="title-16-note">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </h3>
              </Col>
              <Col span="12">
                <Upload>
                  <div className="form-export__file__upload">
                    Chọn tệp tải lên...
                  </div>
                </Upload>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item>
            <div className="form-layout-btn mt-32" style={{marginLeft:"25%"}}>
                <Button variant="secondary">Hủy</Button>
                <Button variant="primary">Lưu</Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default FormAddChangeSchool;
