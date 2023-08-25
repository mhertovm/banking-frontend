import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

function Login(){
  
  const navigate = useNavigate();
  
  const [err, setErr] = useState();

  const onFinish = async (values) => {
    try {
        const response = await fetch('/login', {
            method: 'POST',
            body: JSON.stringify({
            email: values.email,
            password: values.password,
            }),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const data = await response.json();
        if(data.response === "login"){
            localStorage.setItem('token', data.jwt);
            localStorage.setItem('user_id', data.user_id);
            navigate("/banking");
            window.location.reload()
        } else {
            setErr(data.response)
        }
    } catch (err) {
        console.log(err);
    }
  };
  return (
    <div className="Login-container" style={{height:"80vh"}}>
      <span style={{ textAlign: 'center', fontFamily: 'sans-serif'}}>
        <h2>LOGIN</h2>
      </span>
      <Form
        className="Login-form"
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 900 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 1, span: 16 }}>
          <Button type="default" htmlType="submit" style={{ width: '360px' }}>
            Submit
          </Button>
        </Form.Item>
        <p style={{color:"red"}}>{err}</p>
        <span style={{ fontSize: '13px', color: 'black', display: 'flex', justifyContent: 'flex-end' }}>
          Not a Member?
          <a href="/register"> register</a>
        </span>
      </Form>
    </div>
  );
};

export default Login;