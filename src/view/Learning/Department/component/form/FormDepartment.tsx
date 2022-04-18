import { Form, Input, Select } from "antd";
import React, { useState } from "react";
import Button from "../../../../../shared/component/Button/Button";
import { IModal } from "../../../../../shared/component/Modal/Modal";

import "./department.scss";

const FormDepartment = ({setIsModalVisible} : IModal) => {
  const [valueId, setValueId] = useState("");
  const [valueDept, setValueDept] = useState("");
  const handleChangeId = (e: any) => {
    setValueId(e.target.value);
  };
  const handleChangeDept = (e: any) => {
    setValueDept(e.target.value);
  };
  return (
    <div className="form-layout form-department">
      <h1 className="title-28 mb-24 j-center">Thêm Khoa-khối mới</h1>
      <div className="form-input">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          //   onFinish={onFinish}
          //   onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item label="Mã khoa - khối:">
            <Input
              style={{
                background: `${valueId !== "" ? "#fff" : "#F2F2F2"}`,
              }}
              onChange={(e) => handleChangeId(e)}
            />
          </Form.Item>
          <Form.Item label="khoa - khối:">
            <Input
              style={{
                background: `${valueDept !== "" ? "#fff" : "#F2F2F2"}`,
              }}
              onChange={(e) => handleChangeDept(e)}
            />
          </Form.Item>
          <Form.Item label="Trưởng khoa - khối:">
            <Select></Select>
          </Form.Item>
          <div style={{ marginLeft: "25%" }} >
            <Form.Item>
              <div className="form-layout-btn mt-32">
                <Button variant="secondary" styles="mr-32"
                  onClick={() => setIsModalVisible(false)}
                >
                  Hủy
                </Button>
                <Button
                  variant={`${
                    valueId !== "" || valueDept !== "" ? "primary" : "gray"
                  }`}
                >
                  Lưu
                </Button>
              </div>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default FormDepartment;
