"use client";

import ThemeProvider from "@/theme/themeProvider";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input } from "antd";
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
      <Card>Login Page</Card>
    </ThemeProvider>
  );
};
export default App;
