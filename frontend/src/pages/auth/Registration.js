import React from "react";
import { Button, Card, Col, Form, Input, Row } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import "./Registration.scss";
import { useDispatch } from 'react-redux';
import { registrationUser } from "../../redux/auth/actions";




function Registration () {

  const dispatch = useDispatch();
  let history = useHistory();

  const onFinish = ( values ) => {
    console.log( values );

    dispatch( registrationUser( values, history ) )

  };



  const onFinishFailed = ( errorInfo ) => {
    console.log( "Failed:", errorInfo );
  };
  const style = {
    width: "100%",
    height: "100vh",
  };
  return (
    <Row justify="center" align="middle" style={ style } className="login-page">
      <Col
        xs={ { span: 20 } }
        sm={ { span: 20 } }
        md={ { span: 12 } }
        lg={ { span: 6 } }
      >
        <Card title="Registration" hoverable>
          <Form
            layout="vertical"
            name="basic"
            initialValues={ {
              email: "",
              password: "",
              remember: true,
            } }
            onFinish={ onFinish }
            onFinishFailed={ onFinishFailed }
          >
            <Form.Item
              label="Email"
              name="email"
              rules={ [
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ] }
            >
              <Input prefix={ <UserOutlined /> } />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={ [
                {
                  required: true,
                  message: "Please input your password!",
                },
              ] }
            >
              <Input.Password prefix={ <LockOutlined /> } />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                style={ { width: "100%" } }
                htmlType="submit"
              //   loading={loading}
              >
                Registration
              </Button>
              Or <Link to="/login">Login</Link>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}

export default Registration;
