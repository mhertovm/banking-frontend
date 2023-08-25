import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CreditCardOutlined,
  FieldTimeOutlined,
  AppstoreAddOutlined,
  SwapOutlined

} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';


const { Sider, Content} = Layout;

function Home(){

    const navigate = useNavigate()


    const items1 = [{
        key: `addcard`,
        icon: <AppstoreAddOutlined />,
        label: `Add Card`,
    }];

    const items2 = [{
        key: `transfer`,
        icon: <SwapOutlined />,
        label: `Transfer`,
    }];

    const items4 = [{
        key: `banking`,
        icon: <CreditCardOutlined />,
        label: `Cards`,
    }]
    const items3 = [{
        key: `history`,
        icon: <FieldTimeOutlined />,
        label: `History`,
    }]
    return (
        <Layout style={{height:"100vh", padding:"1px 0", backgroundColor:"rgb(222, 222, 222)"}}>
        <Sider trigger={null}  theme={'light'}>
            <Menu
            selectable={false}
            mode="inline"
            onClick={(item)=>{navigate(`/${item.key}`)}}
            items={items4}
            />
            <Menu
            selectable={false}
            mode="inline"
            onClick={(item)=>{navigate(`/${item.key}`)}}
            items={items1}
            />
            <Menu 
            selectable={false}
            mode="inline"
            onClick={(item)=>{navigate(`/${item.key}`)}}
            items={items2}
            />
            <Menu 
            selectable={false}
            mode="inline"
            onClick={(item)=>{navigate(`/${item.key}`)}}
            items={items3}
            />
        </Sider>
        <Layout>
            <Content
            style={{
                minHeight: 280,
         
            }}
            >
            <Outlet/>
            </Content>
        </Layout>
        </Layout>
    );

}

export default Home;