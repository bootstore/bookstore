import React from 'react';
import {
    Link
} from 'react-router-dom';
import './payorder.css';
import back from './back.jpg'
import closed from './closed.jpg';
import more from './more.jpg';
import add from './add.jpg';
import right from './right.jpg';
import gift from './gift.jpg';
import Header from '../comment/header';

class PayList extends React.Component{
    render(){
        return(
            <div className="content">
                <ul className="con">
                    <li>
                        <div></div>
                        <div>
                            <ul>
                                <li>
                                    <h1>时尚拉丝十字架戒指对戒男女款</h1>
                                    <h2>￥888.00</h2>
                                </li>
                                <li>
                                    <p>女款10#</p>
                                    <p>x1</p>
                                </li>

                            </ul>
                        </div>
                    </li>
                </ul>

            </div>
        )
    }
}


class PayOrder extends React.Component {
    constructor(){
        super();
        this.onClick=this.onClick.bind(this)
    }
    onClick(){
        this.el.innerHTML='去支付'
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
                <PayList/>
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
                    <div>
                        <Link to="/zjtpay" onClick={this.onClick} ref={(el)=>this.el=el}>
                            提交订单
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default PayOrder;
