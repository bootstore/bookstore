import React from 'react';
import './dizhi.css';

import $ from 'jquery';
class Add11 extends React.Component{
    componentDidMount(){
        var list=document.querySelector('.list');
        var content1=document.querySelector('.content1');
        var addlist;


        if(localStorage.addlist){
            addlist = JSON.parse(localStorage.addlist);
        }else {
            addlist = [];
        }
        console.log(addlist);
        addlist.forEach(function (v,i){
            let li=`
                   <a href="/payorder">   
                  <div class="list" id="${i}">
                            <div class="xingming">
                                <h1>姓名</h1>
                                <h1>${v.name1}</h1>
                            
                                 
                            </div>
                            <div class="dianhua">
                                <h1>电话</h1>
                                <h1>${v.name2}</h1> 
                                
                            </div>
                            <div class="dizhi">
                                <h1>邮箱</h1>
                                <h1>${v.name3}</h1>
                            </div>
                            <div class="youxiang">
                                <h1>地址</h1>
                                <h1>${v.name4}</h1>
                            </div>

                        </div>
            </a> 
            
            `
            $(li).appendTo(content1);
        })

    }



    render(){
        return(
            <div className="choose1">
                <div className="head">
                    <div className="close">
                        <img src="img/11.jpg" alt=""/>
                    </div>
                    <div className="xian"></div>
                    <div className="choose">
                        请选择收货地址
                    </div>
                    <div className="menu">
                        <img src="img/13.jpg" alt=""/>
                    </div>

                </div>
                <div className="xiahuaxian">

                </div>
                <div className="content1">

                </div>
                <div className="foot">
                    <a href="/address">
                    <div className="more1">
                        <img src="img/15.jpg" alt=""/>
                    </div>
                    </a>
                    <h1>新增收货地址</h1>
                    <div className="jiantou">
                        <img src="img/16.jpg" alt=""/>
                    </div>
                </div>

            </div>

        )
    }








}

export default Add11;