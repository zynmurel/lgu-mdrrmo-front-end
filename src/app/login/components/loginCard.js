import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Card, Form, Input, Button, theme } from "antd";

const LoginCard = () => {
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
    <Card
      style={{ width: 400 }}
      bodyStyle={{ height: "100%" }}
      className="  shadow-2xl p-4  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <p
        className=" text-3xl text-center font-bold m-0 mb-3"
        style={styles.textLinkColor}
      >
        LOGIN
      </p>

      <Form
        name="normal_login"
        className="login-form flex flex-col justify-center items-center"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <p className=" text-base w-full m-0 mb-1">Username</p>
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
          />
        </Form.Item>
        <p className=" text-base w-full mb-1 -mt-1">Password</p>
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
    </Card>
  );
};

export default LoginCard;
