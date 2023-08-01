"use client";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input, Button, theme } from "antd";
const LoginForm = () => {
  const { token } = theme.useToken();
  const loginRules = {
    username: [
      {
        required: true,
        message: "Please input your Username",
      },
    ],
    password: [
      {
        required: true,
        message: "Please input your Password",
      },
    ],
  };
  const loginInputIcons = {
    username: <UserOutlined className="site-form-item-icon" />,
    password: <LockOutlined className="site-form-item-icon" />,
  };
  const styles = {
    textLinkColor: { color: token.colorLink },
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Form
      name="normal_login"
      className="login-form flex flex-col justify-center items-center p-20 flex-1 bg-white rounded-3xl lg:rounded-none lg:rounded-l-3xl"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <p
        className=" text-6xl text-center font-bold m-0 mb-10"
        style={styles.textLinkColor}
      >
        LOGIN
      </p>
      <Form.Item
        labelCol={{ span: 24 }}
        name="username"
        rules={loginRules.username}
        className=" w-full"
      >
        <Input
          prefix={loginInputIcons.username}
          placeholder="Username"
          size="large"
          className=" rounded-full"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={loginRules.password}
        className=" w-full"
      >
        <Input.Password
          prefix={loginInputIcons.password}
          type="password"
          placeholder="Password"
          size="large"
          className=" rounded-full"
        />
      </Form.Item>
      <Button
        type="primary"
        htmlType="submit"
        className="login-form-button w-full my-3"
        style={{ borderRadius: 30 }}
        size="large"
      >
        Log in
      </Button>
      <a className="login-form-forgot" href="">
        Forgot password
      </a>
    </Form>
  );
};

export default LoginForm;
