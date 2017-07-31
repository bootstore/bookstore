import React, {Component} from 'react';
import './zjt_pay.css';
class Lyx_suc extends React.Component {
    render() {
        return (
            <div className="lyx_suc">
                <img src='/img/lyx_img/lyx_paysuc.png' alt=""/>
            </div>
        )
    }
}
class Lyx_err extends React.Component {
    render() {
        return (
            <div className="lyx_err">
                ! 密码错误，请重新输入
            </div>
        )
    }
}
class Zjt_pay extends Component {
    render() {
        return (
            <div className="zjt_pay">
                <Lyx_suc/>
                <Lyx_err/>
                <div className="zjt_wrap">
                    <div className="zjt_box">
                        <div className="zjt_payson">
                            <a href="javascript:history.back()"><img src="/img/zjt_back.png" alt="" className="zjt_payimg"/></a>
                            <img src="/img/zjt1_03.png" alt="" className="zjt_paypic"/>
                            <p className="zjt_payp">请输入支付密码</p>
                        </div>
                        <div className="zjt_payson2">
                            <div className="zjt_pay2wrap">
                                <div className="zjt_pay2word">基路书店</div>
                                <div className="zjt_payprice">
                                    ￥239.20
                                </div>
                                <hr className="zjt_payhr"/>
                            </div>
                        </div>
                        <div className="zjt_payhank">
                            <div className="zjt_payhankwrap">
                                <div className="zjt_payhankicon">
                                    <img src="/img/bank.png" alt="" className="zjt_payhankbank"/>
                                    <p className="zjt_paytext">招商银行储蓄卡 <span>(2176)</span></p>
                                </div>

                                <div className="zjt_payback">
                                    <a href="" className="zjt_paya">
                                        <img src="/img/zjt_back.png" alt="" className="zjt_payhankimg"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="zjt_payline">
                            <div className="zjt_payhrl">
                                <hr className="zjt_payhr"/>
                            </div>
                        </div>
                        <div className="zjt_payinput">
                            <input type="password" className="password" maxLength={6} onKeyUp={
                                (e)=>{
                                    var val=document.querySelector(".password").value.length;
                                    var con=document.querySelector(".password").value
                                    if(val==6){
                                        if(con=='123456'){
                                            setTimeout(()=>{
                                                var lyxsuc=document.querySelector(".lyx_suc")
                                                lyxsuc.style.display='block';
                                                var zjtpay=document.querySelector(".zjt_pay")
                                                zjtpay.style.background='#fff';
                                            },1000)
                                            setTimeout(()=>window.location.href='/',3500)
                                            var lyxerr=document.querySelector(".lyx_err")
                                            lyxerr.style.display='none';
                                        }else{
                                            setTimeout(()=>{
                                                var lyxerr=document.querySelector(".lyx_err")
                                                lyxerr.style.display='block';
                                                con=''
                                                document.querySelector(".password").value=null;
                                            },1000)
                                        }

                                    }
                                }
                            }/>
                            <ul className="pass">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Zjt_pay;