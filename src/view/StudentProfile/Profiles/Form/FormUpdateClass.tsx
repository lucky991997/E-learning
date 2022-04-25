import React from "react";
import { Col, DatePicker, Form, Input, Row, Select, Upload } from "antd";
import { ImAttachment } from "react-icons/im";
import { MdDateRange } from "react-icons/md";
import Button from "../../../../shared/component/Button/Button";
import { IModal } from "../../../../shared/component/Modal/Modal";
const FormUpdateClass = ({setIsModalVisible}: IModal) => {
  const { Option } = Select;
  const nameClass = ["10A3", "10A4", "10A5"];
  return (
    <div className="form-layout form-profile">
      <h2 className="title-28 j-center mb-24">Cập nhật chuyển lớp</h2>
      <div className="form-input-required">
        <Form labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
          <Form.Item label="Tên học viên:">
            <h3 className="title-16">Trần Quốc Tuấn</h3>
          </Form.Item>
          <Form.Item label="Lớp hiện tại:">
            <h3 className="title-16">10A1</h3>
          </Form.Item>

          <Form.Item
            label="Ngày chuyển lớp:"
            name="date"
            rules={[
              {
                required: true,
                message: "please enter date",
              },
            ]}
          >
            <Row>
              <Col span="6" style={{ marginRight: "12px" }}>
                <DatePicker
                  suffixIcon={<MdDateRange className="select__calendar-icon" />}
                  picker="date"
                  className="select__calendar"
                />
              </Col>
              <Col span="6" style={{ marginLeft: "18px" }}>
                <Input style={{ height: "32px", width: "100px" }} />
              </Col>
            </Row>
          </Form.Item>

          <Form.Item
            label="Chuyển đến lớp:"
            name="change"
            rules={[{ required: true, message: "please enter " }]}
          >
            <Select>
              {nameClass.map((item, index) => (
                <Option key={index}>{item}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Lý do chuyển lớp:"
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
            <Row className="mb-32 form-export__file">
              <Col span="12">
                <Input suffix={<ImAttachment className="attach-icon" />} />
                <h3
                  className="title-16 mt-8"
                  style={{
                    opacity: 0.5,
                    width: 400,
                    fontWeight: 400,
                    fontStyle: "italic",
                  }}
                >
                  Kiểu file .pdf .jpeg .png .jpg với dung lượng tối đa là 100
                  MB.
                </h3>
              </Col>
              <Col>
                <Upload>
                  <div className="form-export__file__upload">
                    Chọn tệp tải lên...
                  </div>
                </Upload>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item>
            <div className="form-layout-btn" style={{ marginLeft: "25%" }}>
              <Button variant="secondary"
              onClick={() => setIsModalVisible(false)}>Hủy</Button>
              <Button variant="primary">Lưu</Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

const FormUpdateSchool = ({setIsModalVisible}: IModal) => {
  return (
    <div className="form-layout form-profile">
      <h2 className="title-28 j-center mb-24">Cập nhật chuyển Trường</h2>
      <div className="form-input-required">
        <Form labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
          <Form.Item label="Tên học viên:">
            <h3 className="title-16">Trần Quốc Tuấn</h3>
          </Form.Item>
          <Form.Item label="Lớp hiện tại:">
            <h3 className="title-16">10A1</h3>
          </Form.Item>

          <Form.Item
            label="Ngày chuyển trường:"
            name="date"
            rules={[
              {
                required: true,
                message: "please enter date",
              },
            ]}
          >
            <Row>
              <Col span="6" style={{ marginRight: "12px" }}>
                <DatePicker
                  suffixIcon={<MdDateRange className="select__calendar-icon" />}
                  picker="date"
                  className="select__calendar"
                />
              </Col>
              <Col span="6" style={{ marginLeft: "18px" }}>
                <Input style={{ height: "32px", width: "100px" }} />
              </Col>
            </Row>
          </Form.Item>

          <Form.Item
            label="Chuyển đến trường:"
            name="change"
            rules={[{ required: true, message: "please enter " }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Địa chỉ trường:" name="address">
            <Input />
          </Form.Item>
          <Form.Item
            label="Lý do chuyển trường:"
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
            <Row className="mb-32 form-export__file">
              <Col span="12">
                <Input suffix={<ImAttachment className="attach-icon" />} />
                <h3
                  className="title-16-note mt-8"
                 
                >
                  Kiểu file .pdf .jpeg .png .jpg với dung lượng tối đa là 100
                  MB.
                </h3>
              </Col>
              <Col>
                <Upload>
                  <div className="form-export__file__upload">
                    Chọn tệp tải lên...
                  </div>
                </Upload>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item>
            <div className="form-layout-btn" style={{ marginLeft: "25%" }}>
              <Button variant="secondary"
              onClick={() => setIsModalVisible(false)}>Hủy</Button>
              <Button variant="primary">Lưu</Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export { FormUpdateSchool, FormUpdateClass };
