import React from 'react'
import { Button, Form, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import "../Login/Login.css"
import Signup from "../../signup.svg"
import { Card } from 'antd';

function Login() {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values) => {
    axios
      .get("http://localhost:8080/attendance/" + values.username)
      .then(data => {
        sessionStorage.setItem("associateId", data.data.associate_Id)
        sessionStorage.setItem("associateName", data.data.associate_Name)
        sessionStorage.setItem("isLoggedin", "user")
        window.location.reload()
        navigate("/DailyAttendance")

      }
      )
      .catch(error => console.log(error));
    sessionStorage.setItem("isLoggedin", "user")
    window.location.reload()
    navigate("/DailyAttendance")

  };
  return (
    <div className='body login'>
      <img src={Signup} alt="signup"></img>

      <Card
        title="Login"
        style={{
          width: 300,
        }}
      >
        <Form form={form} name="horizontal_login" onFinish={onFinish}
          className="userform"
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Associate ID!',
              },
            ]}
          >
            <Input
              type='text'
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Associate Id" />
          </Form.Item>
          <Form.Item shouldUpdate>
            {() => (
              <Button
                type="primary"
                htmlType="submit"
                disabled={
                  !form.isFieldsTouched(true) ||
                  !!form.getFieldsError().filter(({ errors }) => errors.length).length
                }
              >
                Submit
              </Button>
            )}
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login
