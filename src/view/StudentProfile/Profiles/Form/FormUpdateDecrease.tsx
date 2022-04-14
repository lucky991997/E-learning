import React from "react";
import { Col, DatePicker, Form, Input, Row, Select, Upload } from "antd";
import { ImAttachment } from "react-icons/im";
import { MdDateRange } from "react-icons/md";
import Button from "../../../../shared/component/Button/Button";
const FormUpdateDecrease = () => {
  const { Option } = Select;
  const decrease = ["Con thương binh", "Sổ hộ nghèo", "sample"];
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
            label="Đối tượng miễn giảm:"
            name="decrease"
            rules={[{ required: true, message: "please enter " }]}
          >
            <Select>
              {
                decrease.map((item,index)=> (
                  <Option key={index}>{item}</Option>
                ))
              }
            </Select>
          </Form.Item>
          <Form.Item
            label="Hình thức miễn giảm::"
            name="numberDecrease"
            rules={[{ required: true, message: "please enter " }]}
          >
            <Input/>
          </Form.Item>
          <Form.Item>
            <div className="form-layout-btn mt-32" style={{ marginLeft: "25%" }}>
              <Button variant="secondary">Hủy</Button>
              <Button variant="primary">Lưu</Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default FormUpdateDecrease;
