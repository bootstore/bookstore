import React, {Component} from 'react';
import './footer.css';
import {Carousel, Icon} from 'antd';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


class Footter extends React.Component {
    constructor() {
        super();
        this.state = ({
            types: 1
        });
        this.change = this.change.bind(this);
    }

    change(v) {
        console.log(this);
        // this.setState({
        //     types:v
        // })
    }

    render() {
        return (
            <div className="dibu">
                <Link to='/' className='page active' onClick={this.change(1)}>
                    <Icon className="icon pics" type="home"/>
                    <div className="tiao">
                        <div className="ye"><i>首页</i></div>
                    </div>
                </Link>
                <Link to='/shoppingCart' className='page' onClick={this.change(2)}>
                    <Icon className="icon gouChe" type="shopping-cart"/>
                    <div className="tiao">
                        <div className="ye"><i className="active">购物车</i></div>
                    </div>
                </Link>
                <Link to='/my' className='page' onClick={this.change(3)}>
                    <Icon className="icon min" type="user"/>
                    <div className="tiao">
                        <div className="ye"><i>我的</i></div>
                    </div>
                </Link>
            </div>
        )
    }
}



class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Footter/>
            </div>
        )
    }
}

export default Footer;



