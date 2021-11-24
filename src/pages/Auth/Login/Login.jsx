import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authorizeLogin } from "../../../redux/auth/actions";
import { Form, Input, Button, Typography } from "antd";
import { Redirect } from "react-router-dom";

const { Title } = Typography;


const Login = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authorizeLogin({ username, password }));
  };

  const isAuth = useSelector((state) => state.login.isAuth);

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  if (isAuth) {
    return <Redirect to="/home" />;
  }
  return (
    <Form {...layout} onSubmit={handleSubmit}>
      <br />
      <Title level={4}>Login</Title>
      <br />
      <Form.Item
        label="Username"
        name="username"
        value={username}
        onChange={handleUsernameChange}
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        value={password}
        onChange={handlePasswordChange}
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Login;
