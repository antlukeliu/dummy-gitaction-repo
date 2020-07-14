import React, { FC } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { StyledLink } from "../Components";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const LoginForm: FC = () => {
  const onFinish = () => {};
  const onFinishFailed = () => {};
  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <StyledLink href="#">Register</StyledLink>
        <br></br>
        <StyledLink href="#">Forgot Password?</StyledLink>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
