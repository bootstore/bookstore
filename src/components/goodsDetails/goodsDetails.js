/**
 * Created by gj on 2017/7/25.
 */
import React from 'react';
import './goodsDetails.css';
import Slide from '../swiper/Swiper.js'
import $ from 'jquery';
import {
    Link,
} from 'react-router-dom';

class Store extends React.Component {
    render() {
        if (this.props.data.banner) {
            var img = this.props.data.banner.split(' ')[0];
        }
        if (this.props.data.class) {
            var arr = this.props.data.class.split(' ');

            var list = arr.map((v, i) => <div key={i}
                                              onClick={() => this.props.class(v)}
                                              className={`${this.props.text===v ? "hot" : ''}`}
            >{v}</div>)
        }
        return (
            <div className="mask">
                <div onClick={() => this.props.open(document.querySelector(".mask"))}
                     className="masks"
                     style={{display: `${this.props.mask ? 'flex' : 'none'}`}}>
                    <div className={`prompt ${this.props.prompt ? "hot" : ''} `}>
                        请选择:{this.props.data.choice}
                    </div>
                </div>
                <div className={`store ${this.props.store ? 'hot' : ''}`}>
                    <div className="title">店铺活动</div>
                    <div className="activity">
                        <div className="fullcut">满减</div>
                        <h6>满199元, 包邮</h6>
                    </div>
                    <div className="close"
                         style={{display: `${this.props.mask ? 'flex' : 'none'}`}}
                         onClick={() => this.props.closes()}>{this.props.close}</div>
                </div>
                <div className={`cart ${this.props.cart ? 'hot' : ''}`}>
                    <div className="top">
                        <img className="img" src={img}></img>
                        <p>{this.props.data.name}</p>
                        <h3>￥{this.props.data.price}</h3>
                        <div className="closes" onClick={() => this.props.closecart()}>关闭</div>
                    </div>
                    <div className="editions" style={{display: `${this.props.data.class ? 'block' : 'none'}`}}>
                        <h3>系列</h3>
                        <div className="class">
                            {list}
                        </div>
                    </div>
                    <div className="number">
                        <div className="num">
                            <h1>购买数量:</h1>
                            <span>剩余{this.props.data.surplus}件</span>
                        </div>
                        <ul className="numbox">
                            <li className={`${this.props.number === 1 ? 'hot' : '' }`}
                                onClick={() => this.props.numbers('-')}>-
                            </li>
                            <li>{this.props.number}</li>
                            <li onClick={() => this.props.numbers('+')}>+</li>
                        </ul>
                    </div>
                    <div className="close"
                         style={{display: `${this.props.mask ? 'flex' : 'none'}`}}
                         onClick={() => this.props.closes()}>{this.props.close}
                    </div>
                </div>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <Link className="back" to=""></Link>
                <span>商品详情</span>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        )
    }
}

class Banner extends React.Component {
    render() {
        return (
            <div className="banner">
                <Slide banner={this.props.banner}/>
            </div>
        )
    }
}

class Con extends React.Component {
    render() {
        return (
            <div>
                <div className="con">
                    <div className="top">
                        <h1 className="name">{this.props.data.name}</h1>
                        <h3 className="price">￥{this.props.data.price}
                            <h6 className="oprice">{this.props.data.oprice}</h6>
                        </h3>

                    </div>
                    <div className="freight">
                        <p>运费：￥{this.props.data.freight}</p>
                        <p>剩余：{this.props.data.surplus}</p>
                    </div>
                    <div className="activity" onClick={() => this.props.activity()}>
                        <div className="left">
                            <div className="fullcut">满减</div>
                            <div className="fullcut">包邮</div>
                            <h6>满199元, 包邮</h6>
                        </div>
                        <div className="more"></div>
                    </div>
                </div>
                <div className="edition"
                     style={{display: `${this.props.data.choice ? 'flex' : 'none'}`}}
                     onClick={() => this.props.cart()}>
                    <h6>选择:{this.props.data.choice}</h6>
                    <div className="more"></div>
                </div>
                <div className="label">
                    <div>
                        <div className="img"></div>
                        <span>店铺确认</span>
                    </div>
                    <div>
                        <div className="img"></div>
                        <span>担保交易</span>
                    </div>
                    <div>
                        <div className="img"></div>
                        <span>线下门店</span>
                    </div>
                </div>
            </div>
        )
    }
}

class Details extends React.Component {
    render() {
        return (
            <div>
            <div className="details">
                <p>商品详情</p>
                <div dangerouslySetInnerHTML= {{__html: this.props.con.content }}></div>
            </div>
            <div style={{height:'1rem',width:'100%'}}></div>
            </div>
        )
    }
}

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <Link to="">首页</Link>
                <Link to="/shoppingCart">购物车</Link>
                <div onClick={() => this.props.addCart()}>加入购物车</div>
                <div onClick={() => this.props.pay()}>立即购买</div>
            </div>
        )
    }
}

class GoodsDetails extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [],
            content:[],
            mask: 0,
            store: 0,
            cart: 0,
            close: '关闭',
            number: 1,
            message: 0,
            prompt: 0,
            text:''
        }
        this.onActivity = this.onActivity.bind(this);
        this.onCart = this.onCart.bind(this);
        this.addCart = this.addCart.bind(this);
        this.closes = this.closes.bind(this);
        this.closecart = this.closecart.bind(this);
        this.open = this.open.bind(this);
        this.class = this.class.bind(this);
        this.numbers = this.numbers.bind(this);
    }

    componentDidMount() {
        fetch("/jiluphp/index.php/book/select?id=" + this.props.match.params.id)
            .then(res => res.json())
            .then(r => this.setState({
                data: r
            }))
        fetch("/jiluphp/index.php/book/con?cid=" + this.props.match.params.id)
            .then(res => res.json())
            .then(r => this.setState({
                content: r
            }))
    }

    onActivity() {
        this.setState({
            mask: 1,
            store: 1
        })
    }

    onCart() {
        this.setState({
            mask: 1,
            cart: 1,
            close: '下一步'
        })
    }

    addCart() {
        this.setState({
            mask: 1,
            cart: 1,
            close: '确定'
        })
    }

    closes() {
        if ($(".close").html() === '关闭') {
            this.setState({
                mask: 0,
                store: 0,
                cart: 0,
                close: '关闭'
            })
        }
        else if ($(".close").html() === '确定') {
            if (this.state.data.class) {
                if (this.state.text) {
                    this.setState({
                        message: 1,
                        mask: 0,
                        store: 0,
                        cart: 0,
                        close: '关闭'
                    })
                    var that = this
                    setTimeout(function () {
                        that.setState({
                            message: 0
                        })
                    }, 1500)
                } else {
                    this.setState({
                        prompt: 1
                    })
                }

            }
            else {
                this.setState({
                    message: 1,
                    mask: 0,
                    store: 0,
                    cart: 0,
                    close: '关闭'
                })
                var that = this
                setTimeout(function () {
                    that.setState({
                        message: 0
                    })
                }, 1500)
            }
            var arr=[];
            if(localStorage.wtfbk){
                arr=JSON.parse(localStorage.wtfbk);
            }
            let a={id:this.state.data.id,
                img:this.state.data.banner.split(' ')[0],
                price:this.state.data.price,
                cid:'',
                title:this.state.data.name,
                num:this.state.number,
            }
            let s=arr.filter(v=>{
                v.id!==a.id
            })
            if(!s.length){
                arr.unshift(a);
            }
            localStorage.wtfbk=JSON.stringify(arr);
        }
        else if ($(".close").html() === '下一步') {
            if (this.state.data.class) {
                if (this.state.text) {
                    this.setState({
                        mask: 0,
                        store: 0,
                        cart: 0,
                        close: '关闭',
                    })
                    window.location.href='/payorder';
                } else {
                    this.setState({
                        prompt: 1
                    })
                }
            } else {
                this.setState({
                    mask: 0,
                    store: 0,
                    cart: 0,
                    close: '关闭',
                })
                window.location.href='/payorder';
            }
            var arr=[];
            arr=[
                {name:this.state.data.name,
                price:this.state.data.price,
                number:this.state.number,
                class:this.state.text,
                img:this.state.data.banner.split(' ')[0]}
            ]
            localStorage.gj=JSON.stringify(arr);
        }
    }

    closecart() {
        this.setState({
            mask: 0,
            store: 0,
            cart: 0,
            close:'关闭',
            prompt:0
        })
    }

    open(t) {
        this.setState({
            mask: 0,
            store: 0,
            cart: 0,
            close: '关闭',
            prompt: 0,
            class: 0
        })
    }

    class(v) {
        var a;
        if(this.state.text!==v){
            this.setState({
                prompt: 0,
                text:v
            })
            a=1;
        }else if(this.state.text===v){
            this.setState({
                prompt: 0,
                text:0
            })
            a=0;
        }
        var ed= document.querySelector('.edition');
        var h = ed.getElementsByTagName('h6')[0];
        if (a) {
            h.innerHTML = `已选：${v}`;
        } else if (!a) {
            h.innerHTML = `选择：${this.state.data.choice}`;
        }
    }

    numbers(v) {
        var num = this.state.number;
        if (v === "+") {
            num++;
            this.setState({
                number: num
            })
        } else if (v === '-') {
            if (num !== 1) {
                num--;
                this.setState({
                    number: num
                })
            }

        }
    }

    render() {
        return (
            <div className="goodsDetails">
                <Header/>
                <Banner banner={this.state.data.banner}/>
                <Con data={this.state.data}
                     activity={this.onActivity} cart={this.onCart}/>
                <Details con={this.state.data}/>
                <Footer addCart={this.addCart} pay={this.onCart}/>
                <Store mask={this.state.mask}
                       store={this.state.store}
                       cart={this.state.cart}
                       close={this.state.close}
                       data={this.state.data}
                       text={this.state.text}
                       number={this.state.number}
                       prompt={this.state.prompt}
                       a={this.state.a}
                       closes={this.closes}
                       closecart={this.closecart}
                       open={this.open}
                       numbers={this.numbers}
                       class={this.class}/>
                <div className="message"
                     style={{display: `${this.state.message ? "flex" : 'none'}`}}>
                    成功添加到购物车
                </div>
            </div>
        )
    }
}

export default GoodsDetails;