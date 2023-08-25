import {useState, useEffect} from 'react';
import {
    FieldTimeOutlined,
  } from '@ant-design/icons';
import { Table } from 'antd';

function History () {
    const user_id = localStorage.getItem("user_id");
    const token = localStorage.getItem("token");

    const [transfers, setTransfers]=useState();
    
    useEffect(()=>{
        fetch('/transfers', {
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
        setTransfers(data)
        console.log(data)
    });
    }, [user_id, token]) 

    const columns = [
        {
            key: 'cartNumber',
            render: (_, record) => (
                <FieldTimeOutlined />
            ),
        },
        {
            title: 'sourceCard',
            key: 'sourceCard',
            render: (_, record) => (
                <p style={{color:"red"}}>{record.sourceCard}</p>
            ),
            
        },
        {
            title: 'destinationCard',
            key: 'destinationCard',
            render: (_, record) => (
                <p style={{color:"green"}}>{record.destinationCard}</p>
            ),
        },
        {
            title: 'Sum Transfer',
            dataIndex: 'sumTransfer',
            key: 'sumTransfer',
        },
        {
            title: 'Time Transfer',
            dataIndex: 'dateTransfer',
            key: 'timeTransfer',
        },
    ];
    return(
        <>
            <Table columns={columns} dataSource={transfers} />
        </>
    )
};

export default History;