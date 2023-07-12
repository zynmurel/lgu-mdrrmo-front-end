"use client";

import ThemeProvider from "@/theme/themeProvider";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Card, Form, Input, Button, Checkbox } from "antd";

import theme from "./theme/theme.json";

const App = () => {
  const loginRules = {
    username: [
      {
        required: true,
        message: "Please input your Username!",
      },
    ],
    password: [
      {
        required: true,
        message: "Please input your Password!",
      },
    ],
  };
  const loginInputIcons = {
    username: <UserOutlined className="site-form-item-icon" />,
    password: <LockOutlined className="site-form-item-icon" />,
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className=" bg-white w-full h-screen flex justify-center items-center">
        <Card
          style={{ width: 300 }}
          bodyStyle={{ height: "100%" }}
          className=" drop-shadow-xl"
        >
          <p className=" text-2xl w-full text-center font-bold m-0">LOGIN</p>

          <Form
            name="normal_login"
            className="login-form flex flex-col justify-center items-center"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              labelCol={{ span: 24 }}
              className=" mb-0"
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon w-full" />}
                placeholder="Username"
                size="large"
              />
            </Form.Item>
            <Form.Item
              labelCol={{ span: 24 }}
              className=" mb-5"
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                size="large"
              />
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button w-full mb-2"
              size="large"
            >
              Log in
            </Button>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form>
        </Card>
      </div>
    </ThemeProvider>
  );
};
export default App;
