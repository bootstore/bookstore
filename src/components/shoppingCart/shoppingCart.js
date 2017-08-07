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
                            <h3><a href="#">博雅书城</a></h3>
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

                {

                    this.props.data.map((v,i) => (
                        <div className="goodsList">
                            <div className="pic"><img src={v.img} alt=""/></div>
                            <div className="substance">
                                <div className="top"><i>{v.title}</i></div>
                                <span className="kuanshi"><i>女款10#</i></span>
                                <span className="price">
                                <i>￥ {v.price}</i>
                                <div className="detail">
                                    <li className="operate">
                                        <div className="jian" onClick={() => this.props.number('-', v.id,i)}>

                                        </div>
                                        <div className="num1">{
                                            (this.props.data.filter(value => value.id === v.id))[0].num}</div>
                                        <div className="jia" onClick={() => this.props.number('+', v.id)}>

                                        </div>
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


class shoppingCart extends React.Component {
    constructor() {
        super();
        this.state = {
            total: 0,
            arr: [],
        }
        this.number = this.number.bind(this);
    }

    componentDidMount() {
        if (localStorage.wtfbk) {
            this.setState({
                arr: JSON.parse(localStorage.wtfbk)
            })

        } else {
            this.setState({
                arr: []
            })
        }


    }

    number(m, id,i) {

        var number = (this.state.arr.filter((v,i) => id === v.id))[0].num;
        if (m === "+") {
            number++;
            var arr = this.state.arr.map(v => {
                if (v.id === id) {
                    v.num = number;
                }
                return v;
            })
            this.setState({
                arr: arr
            })
            localStorage.wtfbk = JSON.stringify(arr)
        } else if (m === "-") {
            number--;
            if (number <= 0) {
                number = 0;
                let a=this.state.arr;
                a.splice(i,1)
                this.setState({
                    arr:a
                })
            }
            var arr = this.state.arr.map(v => {
                if (v.id === id) {
                    v.num = number;
                }
                return v;
            })
            this.setState({
                arr: arr
            })
            localStorage.wtfbk = JSON.stringify(arr)
        }

        let arrs = this.state.arr;
        let total = 0;
        arrs.forEach((v) => {
            total += v.price * v.num;
        })
        this.setState({
            total: total
        })

    }

    render() {
        let title1 = '购物车';
        let arrs = this.state.arr;

        return (
            <div className="shoppingCarts">
                <FirstHeader title={title1}/>
                <ShopBox/>
                <Content data={arrs} number={this.number}/>
                <div className="balance">
                    <div className="ding">
                        {/*<div className="right"></div>*/}
                        {/*<div className="center"><i>全选</i></div>*/}
                        <div className="youBox">
                            <div className="jiage">
                                <span className="hejis"><i>合计:￥ {this.state.total}</i></span>
                                <span className="yunfei"><i>不含运费</i></span>
                            </div>
                            <Link to="/payorder" className="over"><i>结算</i></Link>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default shoppingCart;
