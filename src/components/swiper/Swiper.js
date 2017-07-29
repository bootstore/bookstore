import React, { Component } from 'react';
import Swiper from 'swiper';
import './swiper-3.4.2.min.css';
import './swiper.css'
class Slide extends Component {
    constructor() {
        super();
    }
    componentDidUpdate() {
        if (this.props.banner) {
            if (this.swiper) {
                return;
            }
            this.swiper = new Swiper(`.swiper-container`, {
                pagination:`.swiper-pagination`,
                loop:true,
            });
        }
    }


    render() {
        if(this.props.banner){
            var arr=this.props.banner;
            var els =arr.split(' ').map((v,i) => (
                <div className="swiper-slide"
                     key={i}
                    style={{backgroundImage:`url(${v})`,backgroundSize:'cover', width:'100%'}}
                />
            ))
        }
        return (
            <div>
                <div style={{height: 300}} className="swiper-container">
                    <div className="swiper-wrapper">
                        {els}
                    </div>
                    <div className="swiper-pagination">

                    </div>
                </div>
            </div>
        )
    }
}
export default Slide;