import React, {useState} from 'react';
import { Button, Form, Input, message } from 'antd';


function Register(){
    const [err, setErr] = useState();
    const [messageApi, contextHolder] = message.useMessage();

    const onFinish = async (values) => {
        try {
            const response = await fetch('/register', {
              method: 'POST',
              body: JSON.stringify({
                name: values.name,
                surname: values.surname,
                email: values.email ,
                password: values.password ,
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            });
            const data = await response.json();
            if (data.response === "registered") {
                messageApi.open({
                  type: 'loading',
                  content: 'Action in progress...',
                  duration: 1.5,
                }).then(() => message.success(data.response, 7))
            } else {
              setErr(data.response);
            }
          } catch (err) {
            console.log(err);
          }
        };

    return (
    <div className='Login-container' style={{height:"100vh"}}>
        <span style={{textAlign:"center", fontFamily:"sans-serif"}}>
            <h3>REGISTER</h3>
        </span>
    <Form className='Login-form'
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
    >
        
        <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input your name!' }]}
        >
        <Input />
        </Form.Item>

        <Form.Item
        label="Surname"
        name="surname"
        rules={[{ required: true, message: 'Please input your surname!' }]}
        >
        <Input />
        </Form.Item>

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
        <Button type="default" htmlType="submit" style={{width:"360px"}}>
            Submit
        </Button>
        </Form.Item>
        <p style={{color:"red"}}>{err}{contextHolder}</p>
        <span style={{ fontSize:"13px", color:"black", display:"flex", justifyContent:"flex-end"}}>
            Already a Member?
            <a href='/'> login</a>
        </span>
    </Form>
   
    </div>
)};


export default Register;