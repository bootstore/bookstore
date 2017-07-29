// /**
//  * Created by WTF on 2017/7/18.
//  */
import React from 'react';
import {Table,Pagination, Tabs, Form, Input, Button, Radio,message} from 'antd';
const {TabPane} = Tabs;
const {Item} = Form;
const RadioGroup = Radio.Group;
class AddForm extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                var hide=message.loading('正在写入数据',0.1);
                fetch('/react/index.php/home/toutiaoadd',{
                    method:'post',
                    header:{
                        'Content-type':'application/json'
                    },
                    body:JSON.stringify(values)
                }).then(res=>res.text())
                    .then(r=>{
                        if(r==='ok'){
                            message.success('写入成功',0.2)
                        }
                        this.props.form.setFieldsValue({name:''});
                    })
            }
        })
    }
    check(rules, value, callback) {
        if (value && value.length < 2) {
            callback('长度最小为2')
        } else {
            callback();
        }
    }
    render() {
        this.props.form.setFieldsInitialValue({type:1});
        const formItemLayout = {
            labelCol: {
                sm: {span: 3},
            },
            wrapperCol: {
                sm: {span: 6},
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                sm: {
                    span: 14,
                    offset: 3,
                },
            },
        };
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit}>
                <Item {...formItemLayout} label="分类名称">
                    {getFieldDecorator('name', {
                        rules: [
                            {required: true, message: '类名不能为空'},
                            {validator: this.check}
                        ]
                    })
                    (<Input/>)
                    }
                </Item>
                <Item {...formItemLayout} label="是否显示">
                    {getFieldDecorator('type', {
                        rules: [
                            {required: true, message: '类型不能为空'}
                        ]
                    })
                    (
                        <RadioGroup {...tailFormItemLayout}>
                            <Radio value={1}>显示</Radio>
                            <Radio value={0}>不显示</Radio>
                        </RadioGroup>
                    )
                    }
                </Item>
                <Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">提交</Button>
                </Item>
            </Form>
        )
    }
}
const Add = Form.create()(AddForm)
class AdminCate extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
        this.fetchData=this.fetchData.bind(this);
        this.tableChange=this.tableChange.bind(this);
    }
    fetchData(){
        fetch('/react/index.php/home/toutiaoadmin')
            .then(res => res.json())
            .then(r => this.setState({data: r}))
    }
    tableChange(key){
        if(key==='list'){
            this.fetchData()
        }
    }
    componentDidMount() {
        this.fetchData();
    }

    render() {
        const {data} = this.state;
        const columns = [
            {key: 1, title: 'id', dataIndex: 'id'},
            {key: 2, title: '名字', dataIndex: 'name'},
            {key: 3, title: '是否默认显示', render:(v)=>(
                <RadioGroup>
                    <Radio value={1} checked={v.type=='1'?true:false} onClick={()=>{
                        fetch(`/react/index.php/home/toutiaotype?id=${v.id}&&type=1`)
                    }}>显示</Radio>
                    <Radio value={0} checked={v.type=='0'?true:false} onClick={()=>{
                        if(v.id!=1){
                            fetch(`/react/index.php/home/toutiaotype?id=${v.id}&&type=0`)
                        }
                    }} >不显示</Radio>
                </RadioGroup>
            )},
            {key: 4, title: '操作', render: (v) => (<a href="#" onClick={() =>{
                fetch('/react/index.php/home/toutiaodel?id='+v.id)
                    .then(res=>res.text())
                    .then(r=>{
                        if(r==='ok'){
                            message.success('删除成功',0.2)
                            this.fetchData();
                        }
                    })
            }}>删除</a>)}
        ];
        return (
                <Tabs onChange={this.tableChange} style={{textAlign: 'left'}} defaultActiveKey="list">
                    <TabPane tab="新增" key="add">
                        <Add/>
                    </TabPane>
                    <TabPane tab="分类" key="list">
                        <Table  pagination={{defaultPageSize:5,showSizeChanger:true,showQuickJumper:true}} columns={columns} dataSource={data}/>
                    </TabPane>
                </Tabs>
        )
    }
}
export default AdminCate;