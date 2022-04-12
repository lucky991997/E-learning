import React, { useState, useEffect } from "react";

import { Form, Input, Button, message } from "antd";

import { BiUserCircle } from "react-icons/bi";
import { AiOutlineLeft } from "react-icons/ai";

import "../../../styles/main-styles/auth.scss";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [userName, setUserName] = useState<string>('')
  const [code, setCode] = useState<string>('')
  useEffect(() => {

  }, []);
  const onFinish = () => { };
  return (
    <div className="auth-form">
      <div className="auth-logout">
        <h3 className="main-title" style={{ marginBottom: "80px" }}>
          Cấp lại mật khẩu
        </h3>
        <Form
          name="form_login"
          className="auth-logout-form"
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item>
            <span className="auth-logout-form__title">Tên đăng nhập</span>
            <Input
              className={`${userName !== '' ? '#fff' : 'gray-input'}`}
              style={{ background: `${userName !== '' ? '#fff' : '#f2f2f2'}` }} 
              onChange={e => setUserName(e.target.value)}
              onFocus={() => console.log(123)}
              prefix={
                <BiUserCircle className="site-form-item-icon auth-logout-form__icon" />
              }
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item>
            <span className="auth-logout-form__title">Mã xác thực</span>

            <Input
              style={{ height: "52px", background: `${userName !== '' ? '#fff' : '#f2f2f2'}` }}

              onChange={e => setCode(e.target.value)}
              type="text" />
          </Form.Item>
          <Form.Item>
            <Link to="/login" className="auth-logout-form__link">
              <AiOutlineLeft /> Quay lại trang chủ
            </Link>
          </Form.Item>
          <Form.Item>
            <Button
              className="login-form-button auth-login-form__btn"
              style={{
                background: `${userName === '' && code === ''
                  ? "#C9C4C0 "
                  : "linear-gradient(270deg, #FF5400 0%, #F17F21 80.56%) "
                  }`,
              }}
              type="primary"
              htmlType="submit"
            >
              Cấp lại mật khẩu
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPassword;
