
import { useState, useEffect } from 'react';
import {
  Button,
  Form,
  Input,
  InputNumber,
  Cascader,
} from 'antd';

const Transfer = () => {

    const user_id = localStorage.getItem("user_id");
    const token = localStorage.getItem("token");

    const [cards, setCards] = useState();
    const [response, setResponse] = useState()
    
    useEffect(()=>{
        fetch('/cards', {
        method: 'POST',
        body: JSON.stringify({
            user_id: user_id 
        }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        "Authorization": token,
        },
    })
    .then((res)=> res.json())
    .then((data)=>{
        setCards(data)
    });
    }, [user_id, token])

  function onFinish(values){
    console.log(values)
    try{
      fetch('/transfer', {
      method: 'POST',
      body: JSON.stringify({
        sourceCard: values.selectCart[0],
        destinationCard: values.destinationCard,
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
    <>
      <Form
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600, padding:"50px" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item 
          label="Select Cart"
          name="selectCart"
          rules={[{ required: true, message: 'Please select cart!' }]}
          >
          <Cascader
            style={{ width: "290px" }}
            placeholder="Select Card"
            options={cards? cards.map((item)=>{
              return {
                key: item.id,
                label: ['Card Number: ', item.cardNumber,", ",'Sum: ',  item.sum, " AMD"],
                value: item.cardNumber
              }
            }): false}
          />
        </Form.Item>
        <Form.Item 
          label="Card Number"
          name="destinationCard"
          rules={[{ required: true, message: 'Please input card number!' }]}
          >
          <Input />
        </Form.Item>
        <Form.Item 
          label="Sum"
          name="sum"
          rules={[{ required: true, message: 'Please input sum!' }]}
          >
          <InputNumber />
        </Form.Item>
        <Form.Item label="Transfer">
          <Button style={{width:"290px"}} htmlType="submit">Transfer</Button>
        </Form.Item>
        <p>{response}</p>
      </Form>
    </>
  );
};
export default Transfer;