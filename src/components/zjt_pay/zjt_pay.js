import React, {Component} from 'react';
import './zjt_pay.css';

class Zjt_pay extends Component {
    render() {
        return (
            <div className="zjt_pay">
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
                            <input type="password" className="password" maxLength={6}/>
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