import React, { useState } from 'react';
import {
  Button,
  Form,
  Input
} from 'antd';

function AddCart(){
    const [response, setResponse] = useState()
    const token = localStorage.getItem("token");
    const user_id = localStorage.getItem("user_id");

    const onFinish = (values) =>{
        try{
            fetch('/addcard', {
            method: 'POST',
            body: JSON.stringify({
                user_id: user_id,
                cardName: values.cardName
            }),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            "Authorization": token,
            },
            })
            .then((res)=> res.json())
            .then((data)=>{
                setResponse(data.response)
            });
       } catch(err){
            console.log(err)
       }
    }

  return (
    <Form
    labelCol={{ span: 4 }}
    wrapperCol={{ span: 14 }}
    layout="horizontal"
    style={{ maxWidth: 600, padding:"50px" }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    autoComplete="off"
    >
      <Form.Item
        label="Card Name"
        name="cardName"
        rules={[{ required: true, message: 'Please input your card name!' }]}
        >
        <Input />
        </Form.Item>
      <Form.Item label="Add cart">
        <Button style={{width:"90px"}} htmlType="submit">Add Cart</Button>
      </Form.Item>
      <p>{response}</p>
    </Form>
  );
}

export default AddCart;