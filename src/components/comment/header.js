/**
 * Created by WTF on 2017/7/16.
 */
import React, { Component } from 'react';
import './header.css'
import {
    // BrowserRouter as Router,
    // Route,
    Link
} from 'react-router-dom'

class Headder extends React.Component {
    render() {
        return (
            <div>
                <div className="hheader">
                    <a href="javascript:history.back()" className="back"></a>
                    <h1>{this.props.title}</h1>
                    <div className="xinxi"></div>
                </div>
            </div>
        )
    }
}

class Header extends Component{
    render(){
        return(
            <div className="head">
                <Headder title = {this.props.title}/>
            </div>
        )
    }
}
export default Header;
