import React, {Component} from 'react';
import './zjt_orderlist.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

const zjt_header = (
    <div className="zjt_header">
        <div className="zjt_header_wrap">
            <div className="zjt_header_back">
                <Link to='/' className="zjt_back_img"></Link>
                <div className="zjt_word">基路书店</div>
            </div>
            <div className="zjt_header_more"></div>
        </div>
    </div>
)

// 头部 选项卡
class Zjt_Navlist extends Component {
    render() {
        return (
            <div className="zjt_navlist">
                {
                    this.props.data.map(
                        v => (<a href={`#app=${v.name}`}  key={v.id}
                                 onClick={()=>this.props.onChange(v.id)}
                                 className={`${this.props.currentChane == v.id ? 'zjt_list_word active':'zjt_list_word'}`}
                        > {v.name} </a>)
                    )
                }
            </div>
        )
    }
}

// 全部

class Zjt_Conlist extends Component {
    render() {
        return (
            <div className="zjt_conlist" style={{display:`${this.props.currentChane== 1?'block':'none'}`}}>
                <div className="zjt_conwrap">
                    <div className="zjt_conbox1">
                        <div className="zjt_conleft">
                            <p>店铺：基路商城</p>
                            <p className="zjt_conleftp">等待买家付款</p>
                        </div>
                        <div className="zjt_conleftb">
                            订单编号：E201707272200240074316170
                        </div>
                    </div>
                </div>
                <div className="zjt_conbox2">
                    <div className="zjt_conbox2wrap">
                        <img className="zjt_conbox2left" src="/img/zjt1_03.png"></img>
                        <div className="zjt_conbox2cent">
                            <span className="zjt_conbox2span">【包邮】</span>
                            <span className="zjt_conbox2span2">0-12岁儿童圣经点读笔</span>
                            <p>（荣耀版）有声圣经8g升级版...</p>
                        </div>
                        <div className="zjt_conbox2rightw">
                            <p className="zjt_conbox2right">
                                ￥599.00
                            </p>
                            <p className="zjt_conbox2r2"> × 1</p>
                        </div>
                    </div>
                </div>
                <div className="zjt_conbox3">
                    <div className="zjt_conbox3_wrap">
                        合计：<span className="zjt_conbox3_count">￥599.00</span>
                    </div>
                </div>
                <div className="zjt_conbox4">
                    <div className="zjt_conbox4wrap">
                        <a className="zjt_conbox4left" href="">
                            取消订单
                        </a>
                        <a className="zjt_conbox4right" href="/zjtpay">
                            确认付款
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

// 待付款
class Zjt_fuk extends Component {
    render() {
        return (
            <div className="zjt_conlist" style={{display:`${this.props.currentChane== 2?'block':'none'}`}}>
                <div className="zjt_conwrap">
                    <div className="zjt_conbox1">
                        <div className="zjt_conleft">
                            <p>店铺：基路商城</p>
                            <p className="zjt_conleftp">等待买家付款</p>
                        </div>
                        <div className="zjt_conleftb">
                            订单编号：E201707272200240074316170
                        </div>
                    </div>
                </div>
                <div className="zjt_conbox2">
                    <div className="zjt_conbox2wrap">
                        <img className="zjt_conbox2left" src="/img/zjt1_03.png"></img>
                        <div className="zjt_conbox2cent">
                            <span className="zjt_conbox2span">【包邮】</span>
                            <span className="zjt_conbox2span2">0-12岁儿童圣经点读笔</span>
                            <p>（荣耀版）有声圣经8g升级版...</p>
                        </div>
                        <div className="zjt_conbox2rightw">
                            <p className="zjt_conbox2right">
                                ￥599.00
                            </p>
                            <p className="zjt_conbox2r2"> × 1</p>
                        </div>
                    </div>
                </div>
                <div className="zjt_conbox3">
                    <div className="zjt_conbox3_wrap">
                        合计：<span className="zjt_conbox3_count">￥599.00</span>
                    </div>
                </div>
                <div className="zjt_conbox4">
                    <div className="zjt_conbox4wrap">
                        <a className="zjt_conbox4left" href="">
                            取消订单
                        </a>
                        <a className="zjt_conbox4right" href="">
                            确认付款
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

//发货
class Zjt_Fahuo extends Component {
    render() {
        return (
            <div className="zjt_conlist" style={{display:`${this.props.currentChane== 3 ?'block':'none'}`}}>
                <div className="zjt_conwrap">
                    <div className="zjt_conbox1">
                        <div className="zjt_conleft">
                            <p>店铺：基路商城</p>
                            <p className="zjt_conleftp">买家已付款</p>
                        </div>
                        <div className="zjt_conleftb">
                            订单编号：E201707272200240074316170
                        </div>
                    </div>
                </div>
                <div className="zjt_conbox2">
                    <div className="zjt_conbox2wrap">
                        <img className="zjt_conbox2left" src="/img/zjt1_03.png"></img>
                        <div className="zjt_conbox2cent">
                            <span className="zjt_conbox2span">【包邮】</span>
                            <span className="zjt_conbox2span2">0-12岁儿童圣经点读笔</span>
                            <p>（荣耀版）有声圣经8g升级版...</p>
                        </div>
                        <div className="zjt_conbox2rightw">
                            <p className="zjt_conbox2right">
                                ￥599.00
                            </p>
                            <p className="zjt_conbox2r2"> × 1</p>
                        </div>
                    </div>
                </div>
                <div className="zjt_conbox3">
                    <div className="zjt_conbox3_wrap">
                        合计：<span className="zjt_conbox3_count">￥599.00</span>
                    </div>
                </div>
                <div className="zjt_conbox4">
                    <div className="zjt_conbox4wrap">
                        <a className="zjt_conbox4left" href="">
                            查看物流
                        </a>
                        <a className="zjt_conbox4right" href="">
                            提醒发货
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

// 收货
class Zjt_Shouhuo extends Component {
    render() {
        return (
            <div className="zjt_shouhuo" style={{display:`${this.props.currentChane== 4 ?'block':'none'}`}}>
                <div className="zjt_shouhuowrap">
                    <img src="/img/zjt1_03.png" alt="" className="zjt_shouhuoimg"/>
                    <div className="zjt_shouhuocenter">
                        <p className="zjt_shouhuop1">
                            快件已从合肥总部发出
                        </p>
                        <p className="zjt_shouhuop2">
                            2017-07-28 09:15:36
                            <a className="zjt_shouhuoa">查看物流明细</a>
                        </p>
                    </div>
                    <div className="zjt_shouhuo3">
                        <div className="zjt_shouhuo3text">
                            查看物流
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

//已完成

class Zjt_wanc extends Component {
    render() {
        return (
            <div className="zjt_conlist" style={{display:`${this.props.currentChane== 5?'block':'none'}`}}>
                <div className="zjt_conwrap">
                    <div className="zjt_conbox1">
                        <div className="zjt_conleft">
                            <p>店铺：基路商城</p>
                            <p className="zjt_conleftp">等待买家付款</p>
                        </div>
                        <div className="zjt_conleftb">
                            订单编号：E201707272200240074316170
                        </div>
                    </div>
                </div>
                <div className="zjt_conbox2">
                    <div className="zjt_conbox2wrap">
                        <img className="zjt_conbox2left" src="/img/zjt1_03.png"></img>
                        <div className="zjt_conbox2cent">
                            <span className="zjt_conbox2span">【包邮】</span>
                            <span className="zjt_conbox2span2">0-12岁儿童圣经点读笔</span>
                            <p>（荣耀版）有声圣经8g升级版...</p>
                        </div>
                        <div className="zjt_conbox2rightw">
                            <p className="zjt_conbox2right">
                                ￥599.00
                            </p>
                            <p className="zjt_conbox2r2"> × 1</p>
                        </div>
                    </div>
                </div>
                <div className="zjt_conbox3">
                    <div className="zjt_conbox3_wrap">
                        合计：<span className="zjt_conbox3_count">￥599.00</span>
                    </div>
                </div>
                <div className="zjt_conbox4">
                    <div className="zjt_conbox4wrap">
                        <a className="zjt_conbox4left" href="">
                            去晒评价
                        </a>
                        <a className="zjt_conbox4right" href="">
                           再次购买
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}


const data=[
    {id:1,name:'全部'},
    {id:2,name:'待付款'},
    {id:3,name:'待发货'},
    {id:4,name:'待收货'},
    {id:5,name:'已完成'}
];

class Zjt_OrderList extends Component {
    constructor(){
        super();
        this.state={
            data:data,
            currentChane:1,
            o:[],
            page:1
        }
        this.changeChanel=this.changeChanel.bind(this);
    }

    changeChanel(id){
        this.setState({
            currentChane:id,
        })
    }
    render() {
        return (
            <div className="zjt_orderlist_app">
                {zjt_header}
                <Zjt_Navlist data={this.state.data} currentChane={this.state.currentChane} onChange={this.changeChanel}/>
                <Zjt_Conlist currentChane={this.state.currentChane}/>
                <Zjt_fuk currentChane={this.state.currentChane}/>
                <Zjt_Fahuo currentChane={this.state.currentChane}/>
                <Zjt_Shouhuo currentChane={this.state.currentChane}/>
                <Zjt_wanc currentChane={this.state.currentChane}/>
            </div>
        )
    }
}


export default Zjt_OrderList;


//
// <a href="#" className="zjt_list_word active">
//     全部
// </a>
// <a href="#fk" className="zjt_list_word">
//     待付款
//     </a>
//     <a href="#fh" className="zjt_list_word">
//     待发货
//     </a>
//     <a href="#sh" className="zjt_list_word">
//     待收货
//     </a>
//     <a href="#wc" className="zjt_list_word">
//     已完成
//     </a>
