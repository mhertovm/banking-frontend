import React from 'react';
import { Layout, Space } from 'antd';

function FooterApp() {
    
    return (
        <Space direction="vertical" style={{ width: '100%', color:"black",  backgroundColor: '#7dbcea'}} size={[0, 48]}>
            <Layout>
            <article style={{padding:"0px 10px", textDecoration: "none"}}>
                <footer>
                    <p>© 2023 </p>
                </footer>
            </article>
            </Layout>
        </Space>
    );
  }
  
  export default FooterApp;