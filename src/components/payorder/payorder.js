import React from 'react';
import {
    Link
} from 'react-router-dom';
import './payorder.css';

import gift from './gift.jpg';
import Header from '../comment/header';
// import './aa'


class PayList extends React.Component {
    render() {
        // console.log(this.props.data)
        return (
            <div className="d-content">
                {
                    this.props.data.map(v=>(
                        <ul className="con">
                            <li>

                                <div>
                                    <img src={v.img} alt=""/>
                                </div>

                                <div>

                                    <ul key={1}>
                                        <li>
                                            <h1>{v.name}</h1>
                                            <h2 className="p">￥{v.price}</h2>
                                        </li>
                                        <li>
                                            {/*<p>女款10#</p>*/}
                                            <p className="n">x{v.number}</p>
                                        </li>

                                    </ul>

                                </div>
                            </li>
                        </ul>
                    ))
                }
                {/*
                <ul className="con">
                    <li>

                        <div></div>

                        <div>
                            {
                                this.props.data.map(v=>(
                                    <ul key={1}>
                                        <li>
                                            <h1>{v.name}</h1>
                                            <h2 className="p">￥{v.price}</h2>
                                        </li>
                                        <li>
                                            <p>女款10#</p>
                                            <p className="n">x{v.number}</p>
                                        </li>

                                    </ul>
                                ))
                            }
                        </div>
                    </li>
                </ul>
*/}
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
            let cc=JSON.parse(localStorage.gj);
            console.log(cc.number)

        }else {
            this.setState({
                arr: []
            })
        }

        let prices = localStorage.gj;
        var n=document.querySelector('#price');
        // var p=document.querySelector('.p').html();

        // var totle=Number(p)*Number(n);
        // console.log(n)



    }

    onClick() {
        this.el.innerHTML = '去支付'
    }

    render() {
        let arrs = this.state.arr;
        let prices = 0;
        let numss = 0;
        if(arrs.length){
            let a1 = arrs[0];
            console.log(this.state.arr);
            console.log(a1);
            prices = a1.price;
            numss = a1.number;
        }
        let total = prices * numss;
        console.log(total);


        // console.log(a1['name']);
        // let a2 = a1.name;
        // let a3 = arrs[0].price;
        // console.log(a2);
        // console.log(a3);
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

                        <p className="price"><span className="rmb">￥</span>{total}</p>


                        {/*<p className="price"><span className="rmb">￥</span>888.00</p>*/}
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
