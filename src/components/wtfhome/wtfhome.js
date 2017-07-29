/**
 * Created by WTF on 2017/7/25.
 */
import React, {Component} from 'react';
import {Carousel} from 'antd';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import "./wtfhome.css";
import Footer from '../comment/footer';
import Header from '../comment/header';


/*

class Header extends React.Component {
    render() {
        return (
            <div className="wtfhead">
                <div className="wtfout" onClick={
                    () => {
                        window.location.href = "about:blank";
                        window.close()
                    }}>
                    <img src="../../img/wtfout.png" alt=""/>
                </div>
                <div className="shu"></div>
                <p className="wtftitle">基路书店</p>
                <div className="wtfdiandian">
                    <img src="../../img/wtfdiandian.png" alt=""/>
                </div>
            </div>
        )
    }
}
*/

class Lunbo extends React.Component {
    render() {
        return (
            <div className="wtfbanner">
                <Carousel autoplay>
                    <div><img src="../../img/wtfbanner1.png" alt=""/></div>
                    <div><img src="../../img/wtfbanner2.png" alt=""/></div>
                    <div><img src="../../img/wtfbanner3.png" alt=""/></div>
                </Carousel>
            </div>
        )
    }
}
class Lib extends Component {
    constructor() {
        super();
    }

    getnum(v) {
        if (!localStorage.wtfbk) {
            let a = [];
            let c = v;
            c.num = 1;
            a.push(c);
            localStorage.wtfbk = JSON.stringify(a);
            document.querySelector('.wtfsuccess').style.display='block';
            setTimeout(()=>document.querySelector('.wtfsuccess').style.display='none',1000)
        } else {
            let r = JSON.parse(localStorage.wtfbk).filter((vv, i) => {
                return v.id == vv.id;
            })
            if (!r.length) {
                let b = JSON.parse(localStorage.wtfbk);
                let c = v;
                c.num = 1;
                b.push(c);
                localStorage.wtfbk = JSON.stringify(b);
                document.querySelector('.wtfsuccess').style.display='block';
                setTimeout(()=>document.querySelector('.wtfsuccess').style.display='none',1000)
            } else {
                document.querySelector('.wtfsucc').style.display='block';
                setTimeout(()=>document.querySelector('.wtfsucc').style.display='none',1000)
                // let b = JSON.parse(localStorage.wtfbk);
                // let c = b.map((vv, i) => {
                //     if (vv.id == v.id) {
                //         vv.num++;
                //     }
                //     return (vv)
                // });
                // localStorage.wtfbk = JSON.stringify(c);
            }
        }
    }

    render() {
        return (
            <div>
                <ul className="wtfnav1">
                    {
                        this.props.nav1 ? this.props.nav1.map((v, i) =>
                            <li key={v.id} className={`${(i + 1 + '') === this.props.navac1 ? 'active' : ''} wtfmain1`}
                                onClick={() => this.props.wtfhandelnav1(i + 1 + '',v.id)}>
                                {v.title}
                            </li>) : ''
                    }
                </ul>
                <ul className="wtflist1">
                    {
                        this.props.wtfbook1 ? this.props.wtfbook1.map((v, i) =>
                            <li key={v.id} className="wtfdeg1">
                                <Link to={`detail/${v.id}`}>
                                    <div className="wtfdeg11">
                                        <img src={v.img} alt=""/>
                                        <div className="wtfright">
                                            <p>{v.title}</p>
                                            <h3>￥{v.price}</h3>
                                            <div title={v.id} className="wtfgowu">
                                                <img src={`
                                                ${localStorage.wtfbk?
                                                    (JSON.parse(localStorage.wtfbk).filter(a=>a.id==v.id).length==0?
                                                        '../../img/wtfgoushop.png':'../../img/wtfgoushop1.png'):
                                                        '../../img/wtfgoushop.png'} `} alt=""
                                                     onClick={(e)=>{
                                                         e.preventDefault();
                                                         e.target.src="../../img/wtfgoushop1.png"
                                                         this.getnum(v,this)
                                                     }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ) : ''
                    }
                    {
                        this.props.wtfbook2 ? this.props.wtfbook2.map((v, i) =>
                            <li key={v.id} className="wtfdeg1">
                                <Link to={`detail/${v.id}`}>
                                    <div className="wtfdeg11">
                                        <img src={v.img} alt=""/>
                                        <div className="wtfright">
                                            <p>{v.title}</p>
                                            <h3>￥{v.price}</h3>
                                            <div title={v.id} className="wtfgowu">
                                                <img src={`
                                                ${localStorage.wtfbk?
                                                    (JSON.parse(localStorage.wtfbk).filter(a=>a.id==v.id).length==0?
                                                        '../../img/wtfgoushop.png':'../../img/wtfgoushop1.png'):
                                                    '../../img/wtfgoushop.png'} `} alt=""
                                                     onClick={(e)=>{
                                                         e.preventDefault();
                                                         e.target.src="../../img/wtfgoushop1.png"
                                                         this.getnum(v,this)
                                                     }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ) : ''
                    }
                    {
                        this.props.wtfbook3 ? this.props.wtfbook3.map((v, i) =>
                            <li key={v.id} className="wtfdeg1">
                                <Link to={`detail/${v.id}`}>
                                    <div className="wtfdeg11">
                                        <img src={v.img} alt=""/>
                                        <div className="wtfright">
                                            <p>{v.title}</p>
                                            <h3>￥{v.price}</h3>
                                            <div title={v.id} className="wtfgowu">
                                                <img src={`
                                                ${localStorage.wtfbk?
                                                    (JSON.parse(localStorage.wtfbk).filter(a=>a.id==v.id).length==0?
                                                        '../../img/wtfgoushop.png':'../../img/wtfgoushop1.png'):
                                                    '../../img/wtfgoushop.png'} `} alt=""
                                                     onClick={(e)=>{
                                                         e.preventDefault();
                                                         e.target.src="../../img/wtfgoushop1.png"
                                                         this.getnum(v,this)
                                                     }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ) : ''
                    }
                    {
                        this.props.wtfbook4 ? this.props.wtfbook4.map((v, i) =>
                            <li key={v.id} className="wtfdeg1">
                                <Link to={`detail/${v.id}`}>
                                    <div className="wtfdeg11">
                                        <img src={v.img} alt=""/>
                                        <div className="wtfright">
                                            <p>{v.title}</p>
                                            <h3>￥{v.price}</h3>
                                            <div title={v.id} className="wtfgowu">
                                                <img src={`
                                                ${localStorage.wtfbk?
                                                    (JSON.parse(localStorage.wtfbk).filter(a=>a.id==v.id).length==0?
                                                        '../../img/wtfgoushop.png':'../../img/wtfgoushop1.png'):
                                                    '../../img/wtfgoushop.png'} `} alt=""
                                                     onClick={(e)=>{
                                                         e.preventDefault();
                                                         e.target.src="../../img/wtfgoushop1.png"
                                                         this.getnum(v,this)
                                                     }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ) : ''
                    }
                </ul>
            </div>
        )
    }
}
class Wtftuijian extends Component {
    render() {
        return (
            <div>
                <div className="wtftuijaintitle">
                    <div className="wtffangkuai"></div>
                    <p>店长推荐</p>
                </div>
                <div className="wtftuijian">
                    <img src="../../img/wtftuijian1.png" alt=""/>
                    <img src="../../img/wtftuijian2.png" alt=""/>
                    <img src="../../img/wtftuijian3.png" alt=""/>
                    <img src="../../img/wtftuijian4.png" alt=""/>
                </div>
            </div>
        )
    }
}
class Wtflargepic extends Component {
    render() {
        return (
            <div className="Wtflargepic">
                <img src="../../img/wtflarge1.png" alt=""/>
                <img src="../../img/wtflarge2.png" alt=""/>
                <img src="../../img/wtflarge3.png" alt=""/>
                <img src="../../img/wtflarge4.png" alt=""/>
            </div>
        )
    }
}
class Wtffoot extends Component {
    render() {
        return (
            <div className="wtffoot">
                <h1>联系客服</h1>
                <p>
                    客服电话：173 4654 4873 <br/>
                    客服微信号： jiluinchrist <br/>
                    注明： 周六上午9：00至周日23:59的订单 <br/>
                    需要到周一发货，敬请谅解
                </p>
            </div>
        )
    }
}
class WtfHome extends Component {

    render() {
        let title1 = '基路书店';
        return (
            <div className="wtfhome">
                <Header title={title1}/>
                <Lunbo />
                <div className="wtfsuccess">
                    加入购物车成功
                </div>
                <div className="wtfsucc">
                    请在购物车中查看
                </div>
                <div className="wtfbig1">
                    <img src="../../img/wtfmainbig.png" alt=""/>
                </div>
                <div className="wtfbgtiao"></div>
                <Lib wtfbook1={this.props.wtfbook1} nav1={this.props.nav1} navac1={this.props.navac1}
                     wtfhandelnav1={this.props.wtfhandelnav1}/>
                <div className="wtfbgtiao"></div>
                <div className="wtfbig1">
                    <img src="../../img/wtfmainbig2.png" alt=""/>
                </div>
                <div className="wtfbgtiao"></div>
                <Lib wtfbook2={this.props.wtfbook2} nav1={this.props.nav2} navac1={this.props.navac2}
                     wtfhandelnav1={this.props.wtfhandelnav2}/>
                <div className="wtfbgtiao"></div>
                <Wtftuijian/>
                <div className="wtfbgtiao"></div>
                <Lib wtfbook3={this.props.wtfbook3} nav1={this.props.nav3} navac1={this.props.navac3}
                     wtfhandelnav1={this.props.wtfhandelnav3}/>
                <div className="wtfbgtiao"></div>
                <Wtflargepic/>
                <div className="wtfbgtiao"></div>
                <Lib wtfbook4={this.props.wtfbook4} nav1={this.props.nav4} navac1={this.props.navac4}
                     wtfhandelnav1={this.props.wtfhandelnav4}/>
                <div className="wtfbgtiao"></div>
                <Wtffoot/>
                <div className="wtfblue"></div>
                <Footer/>
            </div>
        )
    }
}
export default WtfHome;
