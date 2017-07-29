import React from 'react';
import './dizhi.css';
import './liandong.js';
import Header from '../comment/header';

class Dizhi extends React.Component {

    componentDidMount(){

    }

    render() {
        let title1 = '选择收获地址';
        return (
            <div>
                <div className="aaa">
                    <Header title={title1}/>

                    {/*<div className="head">
                        <div className="close">
                            <img src="img/11.jpg" alt=""/>
                        </div>
                        <div className="xian"></div>
                        <div className="choose">
                            选择收货地址
                        </div>
                        <div className="menu">
                            <img src="img/13.jpg" alt=""/>
                        </div>
                    </div>*/}

                    <div className="xiahuaxian">

                    </div>
                    <div className="names">
                        <h1>收货人</h1>
                        <input type="text" placeholder="名字" id="name1"/>
                    </div>
                    <div className="xiahuaxian1">

                    </div>
                    <div className="name">
                        <h1>收货地区</h1>
                        <form action="" name="myform" id="form">
                            <select name="province" id="province">
                                <option value="">请选择省份</option>
                            </select>
                            <select name="city" id="city">
                                <option value="">请选择城市</option>
                            </select>
                            <select name="area" id="area">
                                <option value="">请选择地区</option>
                            </select>
                        </form>
                    </div>
                    <div className="xiahuaxian1">

                    </div>

                    <div className="name">
                        <h1>联系电话</h1>
                        <input type="text" placeholder="手机或固定电话" id="phone" autocomplete="on"/>
                    </div>
                    <div className="xiahuaxian1">

                    </div>


                    <div className="name">
                        <h1>详细地址</h1>
                        <input type="text" placeholder="街道门牌信息" id="phone" autocomplete="on"/>
                    </div>
                    <div className="xiahuaxian1">

                    </div>


                    <div className="name">
                        <h1>邮政编码</h1>
                        <input type="text" placeholder="邮政编码(选填)" id="phone" autocomplete="on"/>
                    </div>
                    <div className="xiahuaxian">

                    </div>

                    <div className="save">
                        保存
                    </div>
                    <div className="cancel">
                        取消
                    </div>

                    <div className="zhezhao1"></div>
                    <div className="zhezhao2"></div>
                    <div className="zhezhao3"></div>
                    <div className="zhezhao4"></div>

                </div>
            </div>
        )
    }
}
export default Dizhi;
