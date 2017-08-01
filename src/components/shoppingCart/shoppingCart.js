import React from 'react';
import './shoppingCart.css' ;
import '../../base.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Footer from '../comment/footer';
import FirstHeader from '../comment/firstheader';
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
                {
                    this.props.data.map(v => (
                    <div className="goodsList">
                        <div className="pic"><img src={v.img} alt=""/></div>
                        <div className="substance">
                            <div className="top"><i>{v.title}</i></div>
                            <span className="kuanshi"><i>女款10#</i></span>
                            <span className="price">
                                <i>￥ {v.price}</i>
                                <div className="detail">
                                    <li className="operate">
                                        <div className="jian"></div>
                                        <div className="num1">{v.num}</div>
                                        <div className="jia"></div>
                                    </li>
                                </div>
                        </span>
                        </div>
                    </div>
                    ))
                }
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
    constructor() {
        super();
        this.state = {
            arr: []
        }
    }
    componentDidMount() {
        console.log(localStorage.wtfbk);
        if (localStorage.wtfbk) {
            console.log(1);
            this.setState({
                arr: JSON.parse(localStorage.wtfbk)
            })
            let cc = JSON.parse(localStorage.wtfbk);
            console.log(cc.number)

        } else {
            console.log(2);
            this.setState({
                arr: []
            })
        }
        console.log(this.state.arr);
    }

    render() {
        let title1 = '购物车';
        console.log(this.state.arr);
        let arrs = this.state.arr;
        let prices = 0;
        let numss = 0;
        if(arrs.length){
            let a1 = arrs[0];
            console.log(this.state.arr);
            console.log(a1);
            prices = a1.price;
            numss = a1.num;
        }
        let total = prices * numss;
        console.log(total);
        return (
            <div className="shoppingCarts">
                <FirstHeader title={title1}/>
                <ShopBox/>
                <Content data={arrs}/>
                <div className="balance">
                    <Balance/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default shoppingCart;
