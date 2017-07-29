import React from 'react';
import '../../../node_modules/swiper/dist/js/swiper'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css';
class Slide extends React.Component {
    constructor() {
        super();
    }
    //组件更新完成之后调用该函数
    componentDidUpdate() {
        if (this.props.source.length) {
            if (this.swiper) {
                return;
            }
            this.swiper = new Swiper(`#${this.props.id} .swiper-container`, {
                pagination: `#${this.props.id} .swiper-pagination`,
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                coverflow: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true
                }
            });
        }
    }
    render() {
        var els = this.props.source.map(v => (
            <div key={v.id}
                 className="swiper-slide"
                 style={{backgroundImage: `url(${v.src})`,width: '300px',
                     height: '300px'}}/>
        ));
        return (
            <div id={this.props.id}>
                <div ref={(el) => {
                    this.swiperContainer = (el)
                }} className="swiper-container">
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
