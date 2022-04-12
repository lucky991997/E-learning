import React from "react";
import { Col, DatePicker, Form, Input, Row, Upload } from "antd";
import { ImAttachment } from "react-icons/im";
import { MdDateRange } from "react-icons/md";
import Button from "../../../../../shared/component/Button/Button";
const FormUpdateReserve = () => {

  return (
    <div className="form-layout form-profile">
      <h2 className="title-28 j-center mb-24">Cập nhật Bảo Lưu</h2>
      <div className="form-input-required">
        <Form labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
          <Form.Item label="Tên học viên:">
            <h3 className="title-16">Trần Quốc Tuấn</h3>
          </Form.Item>
          <Form.Item label="Lớp hiện tại:">
            <h3 className="title-16">10A1</h3>
          </Form.Item>

          <Form.Item
            label="Ngày bảo lưu:"
            name="date"
            rules={[
              {
                required: true,
                message: "please enter date",
              },
            ]}
          >
            <Row>
              <Col span="5" style={{ marginRight: "12px" }}>
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
            label="Thời gian bảo lưu:"
            name="change"
            rules={[{ required: true, message: "please enter " }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Lý do bảo lưu:"
            name="reasonReserve"
            rules={[{ required: true, message: "please enter " }]}
          >
            <Input.TextArea />
            <h3
              className="title-16 mt-8"
              style={{
                opacity: 0.5,
                width: 500,
                fontWeight: 400,
                fontStyle: "italic",
              }}
            >
              Kết quả học tập của viên sẽ được bảo lưu trong hồ sơ học viên.
            </h3>
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
              <Button variant="secondary">Hủy</Button>
              <Button variant="primary">Lưu</Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default FormUpdateReserve;
