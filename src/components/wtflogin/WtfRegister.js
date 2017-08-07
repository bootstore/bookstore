/**
 * Created by WTF on 2017/7/30.
 */
import React  from 'react';

import "./wtflogin.css";
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
const FormItem = Form.Item;




class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                var hide=message.loading('正在注册',0.1);
                fetch('/jiluphp/index.php/wtfhome/wtfregister',{
                    method:'post',
                    header:{
                        'Content-type':'application/json'
                    },
                    body:JSON.stringify(values)
                }).then(res=>res.text())
                    .then(r=>{
                        if(r==='ok'){
                            var log=message.loading('注册成功,2秒后返回登陆页面',0.8);
                            setTimeout(()=>{
                                window.location='/wtflogin'
                            },2000)
                        }else if(r==='have') {
                            var have = message.loading('此账号已存在', 0.5);
                        }
                    })
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '请输入您的账号！' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入您的账号" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入您的密码！' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入您的密码" />
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        注册
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
class Wtflogin extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="wtflogin">
                <img className="wtflogo" src="../../img/wtflogo.png" alt=""/>
                <p className="wtfbt">博雅书城</p>
                <div className="wtflog">
                    <WrappedNormalLoginForm />
                </div>

            </div>
        )
    }
}






export default Wtflogin;