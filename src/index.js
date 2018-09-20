
import React from 'react';
import ReactDOM from 'react-dom';
// import 'antd/dist/antd.css';
// import './index.css';
// import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Menu from './component/Menu';
import SubMenu from './component/SubMenu';
import MenuItem from './component/MenuItem';
import TestMenu from './component/TestMenu/Test';
// import "./component/style.css"
// const { SubMenu } = Menu;
// const { Header, Content, Footer, Sider } = Layout;

ReactDOM.render(
  <div>
    <TestMenu />
    <Menu>
          <SubMenu title="工单管理">
            <MenuItem key="1">工单设定</MenuItem>
            <MenuItem key="2">工单查询</MenuItem>
          </SubMenu>
          <SubMenu title="成品管理">
            <MenuItem key="3">成品抽检</MenuItem>
            <MenuItem key="4">维修管理</MenuItem>
            <SubMenu title="半成品管理">
              <MenuItem key="5">半成品抽检</MenuItem>
              <MenuItem key="6">半成品维修</MenuItem>
            </SubMenu>
          </SubMenu>
		    </Menu>
  </div>,
  // <Layout>
  //   <Header className="header">
  //     <div className="logo" />
  //     <Menu
  //       theme="dark"
  //       mode="horizontal"
  //       defaultSelectedKeys={['2']}
  //       style={{ lineHeight: '64px' }}
  //     >
  //       <Menu.Item key="1">nav 1</Menu.Item>
  //       <Menu.Item key="2">nav 2</Menu.Item>
  //       <Menu.Item key="3">nav 3</Menu.Item>
  //     </Menu>
  //   </Header>
  //   <Content style={{ padding: '0 50px' }}>
  //     <Breadcrumb style={{ margin: '16px 0' }}>
  //       <Breadcrumb.Item>Home</Breadcrumb.Item>
  //       <Breadcrumb.Item>List</Breadcrumb.Item>
  //       <Breadcrumb.Item>App</Breadcrumb.Item>
  //     </Breadcrumb>
  //     <Layout style={{ padding: '24px 0', background: '#fff' }}>
  //       <Sider width={200} style={{ background: '#fff' }}>
  //         <Menu
  //           mode="inline"
  //           defaultSelectedKeys={['1']}
  //           defaultOpenKeys={['sub1']}
  //           style={{ height: '100%' }}
  //         >
  //           <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
  //             <Menu.Item key="1">option1</Menu.Item>
  //             <Menu.Item key="2">option2</Menu.Item>
  //             <Menu.Item key="3">option3</Menu.Item>
  //             <Menu.Item key="4">option4</Menu.Item>
  //           </SubMenu>
  //           <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
  //             <Menu.Item key="5">option5</Menu.Item>
  //             <Menu.Item key="6">option6</Menu.Item>
  //             <Menu.Item key="7">option7</Menu.Item>
  //             <Menu.Item key="8">option8</Menu.Item>
  //           </SubMenu>
  //           <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
  //             <Menu.Item key="9">option9</Menu.Item>
  //             <Menu.Item key="10">option10</Menu.Item>
  //             <Menu.Item key="11">option11</Menu.Item>
  //             <Menu.Item key="12">option12</Menu.Item>
  //           </SubMenu>
  //         </Menu>
  //       </Sider>
  //       <Content style={{ padding: '0 24px', minHeight: 280 }}>
  //         Content
  //       </Content>
  //     </Layout>
  //   </Content>
  //   <Footer style={{ textAlign: 'center' }}>
  //     Ant Design ©2018 Created by Ant UED
  //   </Footer>
  // </Layout>,
  document.getElementById('container'));
          