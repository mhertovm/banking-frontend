import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Button,
  Form,
  InputNumber,
} from 'antd';
function  Plus() {
    const [response, setResponse] = useState()
    const token = localStorage.getItem("token");
    const {cardNumber} = useParams();
    const onFinish = (values) =>{
        try{
            fetch('/plussum', {
            method: 'POST',
            body: JSON.stringify({
                cardNumber: cardNumber,
                sum : values.sum
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
        label="Sum"
        name="sum"
        rules={[{ required: true, message: 'Please input sum!' }]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item label="Add sum">
        <Button style={{width:"90px"}} htmlType="submit">Add</Button>
      </Form.Item>
      <p>{response}</p>
    </Form>
  );
};
export default Plus;