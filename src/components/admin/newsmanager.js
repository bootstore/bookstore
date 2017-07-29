/**
 * Created by WTF on 2017/7/19.
 */
import React from 'react';
import {Table, Pagination, Modal, Upload, Icon, Tabs, Form, Input, Button, Radio, message} from 'antd';
import Editor from './editor';
const {TabPane} = Tabs;
const RadioGroup = Radio.Group;
const FormItem = Form.Item;
class AddForm extends React.Component {
    constructor() {
        super();
        this.state = ({
            cate: [],
            f: '',
            h: ''
        })
        this.submit = this.submit.bind(this);
        this.change = this.change.bind(this);
        this.editorChange = this.editorChange.bind(this)
    }

    componentDidMount() {
        this.props.form.setFieldsValue({cate: '1'});
    }

    editorChange(html) {
        this.setState({
            h: html
        })

    }

    change(v) {
        if (v.file.status === 'done') {
            this.setState({f: v.file.response})
        }
        //    当图片传上去后拿到回应写在state里
    }

    submit(e) {
        e.preventDefault()
        this.props.form.validateFieldsAndScroll((err, values) => {
            values.thumbnail = this.state.f;
            values.content = this.state.h;
            fetch('/react/index.php/home/addNews', {
                method: 'post',
                header: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(values)
            })
        })
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        //相当于表单里定义它的name
        const style = {
            labelCol: {
                sm: {
                    span: 4
                }
            },
            wrapperCol: {
                sm: {
                    span: 5
                }
            }
        }
        const radioStyle = {
            labelCol: {
                sm: {
                    span: 4
                }
            },
            wrapperCol: {
                sm: {
                    span: 13
                }
            }
        }
        const submitStyle = {
            wrapperCol: {
                sm: {
                    span: 6,
                    offset: 4
                }
            },
        }
        const editorStyle = {
            labelCol: {
                sm: {
                    span: 4
                }
            },
            wrapperCol: {
                sm: {
                    span: 18
                }
            }
        }
        return (
            <Form onSubmit={this.submit}>
                <FormItem {...style} label='新闻标题'>
                    {
                        getFieldDecorator('title')(
                            <Input type="text"/>
                        )
                    }
                </FormItem>
                <FormItem {...style} label="图片">
                    <div className="clearfix">
                        <Upload withCredentials={true}
                                action="/react/index.php/home/upload"
                                listType="picture-card"
                                onChange={this.change}>
                            <div>
                                <Icon type="plus"/>
                                <div className="ant-upload-text">点击上传</div>
                            </div>
                        </Upload>
                    </div>
                </FormItem>

                <FormItem  {...radioStyle} label="分类">
                    {
                        getFieldDecorator('cate')(
                            <RadioGroup>
                                {this.props.cate.map((v) => <Radio key={v.id} value={v.id}>{v.name}</Radio>)}
                            </RadioGroup>
                        )
                    }

                </FormItem>

                <FormItem {...editorStyle} label="正文">
                    <Editor action="/react/index.php/home/process"
                            onChange={this.editorChange}
                    />
                </FormItem>
                <FormItem {...submitStyle}>
                    <Button type='primary' htmlType="submit">提交</Button>
                </FormItem>
            </Form>
        )
    }
}
const Add = Form.create()(AddForm);
class Newsmanager extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            cate: []
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        fetch('/react/index.php/home/news?id=' + 1)
            .then(res => res.json())
            .then(r => this.setState({
                data: r
            }))
        fetch('/react/index.php/home/toutiao')
            .then(res => res.json())
            .then(r => this.setState({
                cate: r
            }))
    }

    handleChange(key) {
        if (key != 'add') {
            fetch('/react/index.php/home/getNewsById?id=' + key)
                .then(res => res.json())
                .then(r => this.setState({data: r}))
        }
    }

    render() {
        const data = this.state.data.map(v => {
            v.key = v.id;
            return v;
        });
        const colums = [
            {
                title: 'title', render: (v) => (
                <a href={v.url} target='_blank'> {v.title}</a>
            ), key: '2'
            },
            {
                title: 'thumbnail', key: '4', render: (v) => (
                <img src={v.thumbnail} style={{width: '120px'}} alt=""/>
            )
            },
            {title: '类别', dataIndex: 'cate', key: '5'},
        ];
        const els = this.state.cate.map(v => (
            <TabPane tab={v.name} key={v.id}>
                <Input />
                <Table pagination={{defaultPageSize: 5, showQuickJumper: true}}
                       columns={colums}
                       dataSource={data}/>
            </TabPane>
        ))
        return (
            <Tabs style={{maxWidth: '1000px'}} onChange={this.handleChange} defaultActiveKey="1">
                <TabPane tab="新增" key="add">
                    <Add cate={this.state.cate}/>
                </TabPane>
                {els}
            </Tabs>
        )
    }
}
export default Newsmanager;