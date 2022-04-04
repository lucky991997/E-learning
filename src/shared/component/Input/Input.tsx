import React, { useState } from "react";
import { Form, Input } from "antd";

import "./input.scss";

interface IInputProps {
  styles?: string;
}

const InputForm: React.FC<IInputProps> = ({ styles }: IInputProps) => {
  const [changeColor, setChangeColor] = useState(false);
  const handleChangeColor = () => {
    setTimeout(() => {
      setChangeColor(true);
    }, 500);
  };
  const handleChange = (e: any) => {
    if (e.target.value === "") {
      setTimeout(() => {
        setChangeColor(false);
      }, 500);
    }
  };

  return (
    <div className={`${styles} input`}>
      <Input
        onClick={() => handleChangeColor()}
        onChange={(e) => handleChange(e)}
        placeholder="Enter"
        style={{
          background: `${changeColor === true ? "#fff" : "#f2f2f2"}`,
        }}
      />
    </div>
  );
};

const InputFormRequired: React.FC<IInputProps> = ({ styles }: IInputProps) => {
  const [changeColor, setChangeColor] = useState(false);
  const handleChangeColor = () => {
    setTimeout(() => {
      setChangeColor(true);
    }, 500);
  };
  const handleChange = (e: any) => {
    if (e.target.value === "") {
      setTimeout(() => {
        setChangeColor(false);
      }, 500);
    }
  };

  return (
    <div className={`${styles} input`}>
      <Form.Item
        label="Tổ - Bộ môn:"
        name="dept"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input
          onClick={() => handleChangeColor()}
          onChange={(e) => handleChange(e)}
          placeholder="Enter"
          style={{
            background: `${changeColor === true ? "#fff" : "#f2f2f2"}`,
          }}
        />
      </Form.Item>
    </div>
  );
};

export {InputFormRequired, InputForm} ;
