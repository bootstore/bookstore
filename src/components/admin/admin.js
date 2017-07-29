/**
 * Created by WTF on 2017/7/17.
 */
import React from 'react';  //引入
import {
    Route,
    Link
} from 'react-router-dom'
import {Table, Layout, Menu, Icon, Alert} from 'antd';
import 'antd/dist/antd.min.css';
import './admin.css';
import Admincate from './admincate';
import Newsmanager from './newsmanager';
const {Header, Content, Footer, Sider} = Layout;


class Admin extends React.Component {
    render() {
        const path=window.location.pathname;
        var pa=path.split('/');
        var keys=Array(pa[pa.length-1]);
        return (
            <Layout id="admin">
                <Sider style={{overflow: 'auto', height: '100vh', position: 'fixed', left: 0}}>
                    <Link to="/admin">
                        <div className="logo"/>
                    </Link>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={keys}>
                        <Menu.Item key="admincate">
                            <Link to="/admin/admincate">
                                <Icon type="appstore-o"/>
                                <span className="nav-text">分类管理</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="newsmanager">
                            <Link to="/admin/newsmanager">
                                <Icon type="edit"/>
                                <span className="nav-text">新闻管理</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{marginLeft: 200}}>
                    <Header style={{background: '#fff', padding: 0}}>
                        <Alert message="欢迎来到后台管理系统" type="success"/>
                    </Header>
                    <Content style={{margin: '24px 16px 0', overflow: 'initial'}}>
                        <div style={{padding: 24, background: '#fff', textAlign: 'center',maxWidth:'80%'}} >
                            <Route exact path='/admin' render={ () => <div> 欢迎来到后台管理系统</div> }/>
                            <Route path='/admin/admincate' component={Admincate}/>
                            <Route path='/admin/newsmanager' component={Newsmanager}/>.
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}


export default Admin;





