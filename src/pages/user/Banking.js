import {useState, useEffect} from 'react';
import {
    CreditCardOutlined,
  } from '@ant-design/icons';
import { Button, Space, Table } from 'antd';
import { useNavigate } from 'react-router-dom';

function Banking () {
    const user_id = localStorage.getItem("user_id");
    const token = localStorage.getItem("token");

    const navigate = useNavigate()
    const [carts, setCarts]=useState();
    
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
        setCarts(data)
    });
    }, [user_id, token]) 

    const columns = [
        {
            key: 'card',
            render: (_, record) => (
                    <CreditCardOutlined />
            ),
        },
        {
            title: 'Card Nume',
            dataIndex: 'cardName',
            key: 'cardNume',
            
        },
        {
            title: 'Card Number',
            dataIndex: 'cardNumber',
            key: 'cardNumber',
            
        },
        {
            title: 'Sum',
            key: 'sum',
            render: (_, record) => (
                <p>{record.sum} AMD</p>
            ),
        },
        {
            key: 'action',
            render: (_, record) => (
                <Space key={record.id} size="middle">
                    <Button onClick={()=>navigate(`/plus/${record.cardNumber}`)}>+</Button>
                </Space>
            ),
        },
    ];
    return(
        <>
            <Table columns={columns} dataSource={carts} />
        </>
    )
};

export default Banking;