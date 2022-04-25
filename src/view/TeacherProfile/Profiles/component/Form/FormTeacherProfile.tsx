import { Col, DatePicker, Form, Input, Row } from "antd";
import React from "react";
import { ImAttachment } from "react-icons/im";
import { MdDateRange } from "react-icons/md";
import Button from "../../../../../shared/component/Button/Button";

interface IFormTeacherProfileProps {
  title: 'Tạm nghỉ' | 'Nghỉ hưu' | 'Nghỉ việc';
  setIsModalVisible: any
}

const FormTeacherProfile: React.FC<IFormTeacherProfileProps> = ({ title, setIsModalVisible }) => {
  return (
    <div className="form-layout">
      <h2 className="title-28 j-center mb-24"> Cập Nhật {title}</h2>
      <div className="form-input-required">
        <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>

          <Form.Item label="Ngày nghỉ:" name="date" rules={[{ required: true }]}>
            <DatePicker allowClear={false} style={{ background: '#F2F2F2', width: '100%' }} suffixIcon={<MdDateRange className="select__calendar-icon" />} />
          </Form.Item>
          <Form.Item label="Ghi chú:" name="note" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            label="Quyết định nghỉ việc:"
            name=""
            rules={[{ required: true }]}
          >
            <Row className="form-export__file">
              <Col span="12">
                <Input suffix={<ImAttachment className="attach-icon" />} />
                <h3 className="title-16-note">
                  Kiểu file .pdf .jpeg .jpg. Dung lượng tối đa 100MB.
                </h3>
              </Col>
              <Col >
                <div className="form-export__file__upload">
                  Chọn tệp tải lên...
                </div>
              </Col>
            </Row>
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
    </div>
  );
};

export default FormTeacherProfile;
