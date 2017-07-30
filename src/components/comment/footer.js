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

    componentDidMount() {


        //   判断hash
        if (window.location.pathname) {
            switch (window.location.pathname) {
                case '/':
                    this.setState({
                        types: 1
                    });
                    break;
                case '/shoppingCart':
                    this.setState({
                        types: 2
                    });
                    break;
                case '/my':
                    this.setState({
                        types: 3
                    });
                    break;
            }
        }
    }

    change(v) {
        this.setState({
            types: v
        })
    }

    render() {
        return (
            <div className="dibu">
                <Link to='/' className={this.state.types === 1 ? 'page active' : 'page'} >
                    <Icon className="icon pics" type="home"/>
                    <div className="tiao">
                        <div className="ye"><i>首页</i></div>
                    </div>
                </Link>
                <Link to='/shoppingCart' className={this.state.types === 2 ? 'page active' : 'page'}
                      onClick={() => this.change(2)}>
                    <Icon className="icon gouChe" type="shopping-cart"/>
                    <div className="tiao">
                        <div className="ye"><i className="active">购物车</i></div>
                    </div>
                </Link>
                <Link to='/my' className={this.state.types === 3 ? 'page active' : 'page'}
                      onClick={() => this.change(3)}>
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



