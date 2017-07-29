import React from 'react';
import './shoppingCart.css' ;
import '../../base.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Footer from '../comment/footer';
import Header from '../comment/header';
import payorder from '../payorder/payorder';

class ShopBox extends React.Component {
    render() {
        return (
            <div>
                <div className="shopBox">
                    <h2 className="title">
                        {/*<div className="right"></div>*/}
                        <div className="center">
                            <span className="home"></span>
                            <h3><a href="#">基路书店</a></h3>
                        </div>
                        <i className="bianji">编辑</i>
                    </h2>
                </div>
            </div>
        )
    }
}


class Content extends React.Component {
    render() {
        return (
            <div className="goods">
                {/*<div className="right"></div>*/}
                <div className="goodsList">
                    <div className="pic"></div>
                    <div className="substance">
                        <div className="top"><i>时尚拉丝十字架戒指情侣对戒男女款灵语银戒指</i></div>
                        <span className="kuanshi"><i>女款10#</i></span>
                        <span className="price">
                                <i>￥ 139.00</i>
                                <div className="detail">
                                    <li className="operate">
                                        <div className="jian"></div>
                                        <div className="num1">7</div>
                                        <div className="jia"></div>
                                    </li>
                                </div>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

class Balance extends React.Component {
    render() {
        return (
            <div className="ding">
                {/*<div className="right"></div>*/}
                {/*<div className="center"><i>全选</i></div>*/}
                <div className="youBox">
                    <div className="jiage">
                        <span className="heji"><i>合计:￥ 452.80</i></span>
                        <span className="yunfei"><i>不含运费</i></span>
                    </div>
                    <Link to="/payorder" className="over"><i>结算</i></Link>
                </div>
            </div>
        )
    }
}

class shoppingCart extends React.Component {
    render() {
        let title1 = '购物车';
        return (
            <div className="shoppingCarts">
                <Header title={title1}/>
                <ShopBox/>
                <Content/>
                <div className="balance">
                    <Balance/>
                </div>
                    <Footer/>
            </div>
        )
    }
}

export default shoppingCart;
