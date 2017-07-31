import React from 'react';
import {
    Link
} from 'react-router-dom';
import './payorder.css';

import gift from './gift.jpg';
import Header from '../comment/header';

class PayList extends React.Component {
    render() {
        console.log(this.props.data)
        return (
            <div className="d-content">
                <ul className="con">
                    <li>
                        <div></div>
                        <div>
                            {
                                this.props.data.map(v=>(
                                    <ul key={1}>
                                        <li>
                                            <h1>{v.name}</h1>
                                            <h2>￥{v.price}</h2>
                                        </li>
                                        <li>
                                            {/*<p>女款10#</p>*/}
                                            <p>x{v.number}</p>
                                        </li>

                                    </ul>
                                ))
                            }
                        </div>
                    </li>
                </ul>

            </div>
        )
    }
}


class PayOrder extends React.Component {
    constructor() {
        super();
        this.state = {
            arr: []
        }
        this.onClick = this.onClick.bind(this)
    }

    componentDidMount() {
        if (localStorage.gj) {
            this.setState({
                arr: JSON.parse(localStorage.gj)
            })
        }
    }

    onClick() {
        this.el.innerHTML = '去支付'
    }

    render() {

        let title1 = '待付款的订单';
        return (
            <div>
                <Header title={title1}/>

                <div className="add">
                    <Link to="/address"></Link>
                    <div className="shouhuo">
                        <div>收货人 :</div>
                        <div>杜帅</div>
                        <div>18435106215</div>
                    </div>
                    <div className="address">
                        <div>收货方式 :</div>
                        <div>山西省长治市武乡县</div>
                    </div>
                    {/*<div><img src={add} alt=""/></div>*/}
                    {/*<div>新增收货地址</div>*/}
                    {/*<div><img src={right} alt=""/></div>*/}
                </div>
                <div className="tiaowen"></div>
                <div className="title">
                    <img src={gift} alt=""/>
                    <p>基路书店</p>
                </div>
                <PayList data={this.state.arr}/>
                <div className="peisong">
                    <div>配送方式</div>
                    <div>免邮费</div>
                </div>
                <div className="message">
                    <span>留言</span>
                    <input type="text" placeholder="点击给商家留言"/>
                </div>

                <div className="footers">
                    <div>
                        <span className="heji">合计 : </span>
                        <p className="price"><span className="rmb">￥</span>888.00</p>
                    </div>
                    <div onClick={this.onClick} ref={(el)=>this.el=el}>
                        <a href="/zjtpay" onClick={this.onClick} ref={(el) => this.el = el}>
                            提交订单
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default PayOrder;
