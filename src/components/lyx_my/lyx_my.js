/**
 * Created by Administrator on 2017/7/25.
 */
import React, {Component} from 'react';
import './lyx_my.css';
import Footer from '../comment/footer';
import FirstHeader from '../comment/firstheader';
import {
    // BrowserRouter as Router,
    // Route,
    Link
} from 'react-router-dom'

class My extends Component {
    render() {
        let title1 = '个人中心';
        return (
            <div>
                <FirstHeader title={title1}/>
                <div className="lyx_img">
                    <div className="lyx_touxiang">
                        <img src="/img/lyx_img/lyx_img1.png" alt=""/>
                    </div>
                    <p>亲爱的一组宝宝</p>
                </div>
                <div className="lyx_dingdan">
                    <div className="lyx_myding">
                        <h1>我的订单</h1>
                        <Link to="/orderList">
                            <div className="lyx_link">
                                <span>查看全部订单</span>
                                <img src="/img/lyx_img/lyx_ding.png" alt=""/>
                            </div>
                        </Link>
                    </div>
                    <ul className="lyx_main">
                        <li>
                            <Link to="/orderList">
                                <img src="/img/lyx_img/lyx_main1.png" alt=""/>
                                <h4>待付款</h4>
                            </Link>
                        </li>
                        <li>
                            <Link to="/orderList">
                                <img src="/img/lyx_img/lyx_main2.png" alt=""/>
                                <h4>代发货</h4>
                            </Link>
                        </li>
                        <li>
                            <Link to="/orderList">
                                <img src="/img/lyx_img/lyx_main3.png" alt=""/>
                                <h4>待收货</h4>
                            </Link>
                        </li>
                        <li>
                            <Link to="/orderList">
                                <img src="/img/lyx_img/lyx_main4.png" alt=""/>
                                <h4>已完成</h4>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="lyx_shop">
                    <Link to="/shoppingCart">
                        <div>
                            <h3>购物车</h3>
                        </div>
                    </Link>
                </div>
                <Footer/>
            </div>
        )
    }
}


export default My;