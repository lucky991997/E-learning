import { Col, DatePicker, Form, Input, Row, Select, Upload } from "antd";
import React from "react";
import Button from "../../../../shared/component/Button/Button";
import { FiSearch } from "react-icons/fi";
import { MdDateRange } from "react-icons/md";
import { ImAttachment } from "react-icons/im";
const FormReserve = () => {
  const { Option } = Select;
  const curClass = ["Lớp 10A1", "Lớp 10A2"];
  return (
    <div className="form-layout">
      <h2 className="title-28 j-center mb-24">Cập nhật bảo lưu</h2>
      <div className="form-input-required">
        <Form labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
          <Form.Item label="Lớp hiện tại:" name="curr">
            <Select>
              {curClass.map((item, index) => (
                <Option key={index}>{item}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Tên học viên:"
            name="name"
            rules={[
              {
                required: true,
                message: "please enter",
              },
            ]}
          >
            <Input
              suffix={
                <FiSearch
                  style={{ width: "24px", height: "24px", color: "#FF7506" }}
                />
              }
            />
          </Form.Item>
          <Form.Item
            label="Ngày bảo lưu:"
            name="date"
            rules={[
              {
                required: true,
                message: "please enter",
              },
            ]}
          >
            <Row>
              <Col span="8">
                <DatePicker
                  style={{ width: "180px" }}
                  suffixIcon={<MdDateRange className="select__calendar-icon" />}
                />
              </Col>
              <Col span="8">
                <Input
                  style={{
                    height: "32px",
                    width: "100px",
                    background: "#F2F2F2",
                  }}
                />
              </Col>
            </Row>
          </Form.Item>
          <Form.Item
            label="Lý do bảo lưu:"
            name="reason"
            rules={[
              {
                required: true,
                message: "please enter",
              },
            ]}
          >
            <Input.TextArea />
            <h3 className="title-16-note">
              Kết quả học tập của viên sẽ được bảo lưu trong hồ sơ học viên.
            </h3>
          </Form.Item>
          <Form.Item
            label="Tệp đính kèm:"
            name="file"
            rules={[
              {
                required: true,
                message: "please enter",
              },
            ]}
          >
            <Row className="form-export__file">
              <Col span="12">
                <Input suffix={<ImAttachment className="attach-icon"/>} />
                <h3 className="title-16-note">
                  Kích thước tệp không vượt quá 250MB.
                </h3>
              </Col>
              <Col span="12">
                <Upload>
                  <div className="form-export__file__upload">Chọn tệp tải lên...</div>
                </Upload>
              </Col>
            </Row>
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
  );
};

export default FormReserve;
