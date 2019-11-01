import React from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import styled from "styled-components";
import SignUpForm from "./SignUpForm";

const MainLayout = styled.div`
  height: 100%;

  h1 {
    text-align: center;
  }
`;

class SignInForm extends React.Component {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <MainLayout>
        <h1>Sign In</h1>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item hasFeedback>
            {getFieldDecorator("username", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Input
                size="large"
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item hasFeedback>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                size="large"
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: false
              })(<Checkbox>Remember me</Checkbox>)}
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </div>
            <div>
              <Button
                size="large"
                type="primary"
                htmlType="submit"
                className="login-form-button"
                block
              >
                Log in
              </Button>
            </div>
          </Form.Item>
        </Form>
      </MainLayout>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: "sign_in" })(SignInForm);

export default WrappedNormalLoginForm;
