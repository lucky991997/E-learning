import React, { useState, useEffect } from "react";

import { Form, Input, Button } from "antd";

import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

import "../../../styles/main-styles/auth.scss";


import { Link } from "react-router-dom";

const Login = () => {

  const [userName, setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  useEffect(() => {

  }, []);

  const onFinish = () => { };
  const handleLogin = () => {
    const storage = {
      username: userName,
      password: password,
    }

    if(userName !== '' && password !== '') {
      localStorage.setItem('storage', JSON.stringify(storage))
    }
  }
  return (
    <div className="auth-form">

      <div className="auth-login">
        <h3 className="main-title" style={{ marginBottom: "80px" }}>
          Đăng Nhập
        </h3>
        <Form
          name="form_login"
          className="auth-login-form"
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item>
            <span className="auth-login-form__title">Tên đăng nhập</span>
            <Input
              className={`${userName !== '' ? '#fff' : 'gray-input'}`}
              onChange={e => setUserName(e.target.value)}
              style={{ background: `${userName !== '' ? '#fff' : '#f2f2f2'}` }}
              onFocus={() => console.log(123)}
              prefix={
                <AiOutlineUser className="site-form-item-icon auth-login-form__icon" />
              }
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item>
            <span className="auth-login-form__title">Mật khẩu</span>

            <Input
              className={`${password !== '' ? '#fff' : 'gray-input'}`}
              onChange={e => setPassword(e.target.value)}
              style={{ background: `${password !== '' ? '#fff' : '#f2f2f2'}` }}
              prefix={
                <BsFillShieldLockFill className="site-form-item-icon auth-login-form__icon" />
              }
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Link to="/forgot" className="auth-login-form__link">
              Quên Mật khẩu
            </Link>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button auth-login-form__btn"
              style={{
                background: `${password === '' && userName === ''
                  ? "#C9C4C0 "
                  : "linear-gradient(270deg, #FF5400 0%, #F17F21 80.56%) "
                  }`,
              }}
              onClick={() => handleLogin()}
            >
              Log in
            </Button>
          </Form.Item>

        </Form>
      </div>
    </div>
  );
};

export default Login;
