import React from 'react';
import './App.css';
import WtfHome from './components/wtfhome/wtfhome'
import Admin from './components/admin/admin';
import {
    BrowserRouter as Router,
    Route,
    // Link
} from 'react-router-dom'
import shoppingCart from './components/shoppingCart/shoppingCart';
import My from "./components/lyx_my/lyx_my";
import PayOrder from "./components/payorder/payorder";
import Zjt_OrderList from "./components/zjt_orderlist/zjt_orderlist";
import Dizhi from "./components/dizhi/dizhi";
import GoodsDetails from "./components/goodsDetails/goodsDetails";

class App extends React.Component {
    constructor(){
        super();
        this.state={
            wtfnav1:'1',
            wtfnav2:'1',
            wtfnav3:'1',
            wtfnav4:'1',
            wtfcontent1:'',
            wtfcontent2:'',
            wtfcontent3:'',
            wtfcontent4:'',
            wtfbook1:'',
            wtfbook2:'',
            wtfbook3:'',
            wtfbook4:''
        }
        this.wtfhandelnav1=this.wtfhandelnav1.bind(this);
        this.wtfhandelnav2=this.wtfhandelnav2.bind(this);
        this.wtfhandelnav3=this.wtfhandelnav3.bind(this);
        this.wtfhandelnav4=this.wtfhandelnav4.bind(this);
    }
    componentDidMount(){
        fetch('/jiluphp/index.php/wtfhome/wtfnav?cid=1')
            .then(res=>res.json())
            .then(r=>{
                this.setState({
                    wtfcontent1:r
                })
            })
        fetch('/jiluphp/index.php/wtfhome/allbook?cid=1')
            .then(res=>res.json())
            .then(r=>{
                this.setState({
                    wtfbook1:r
                })
            })
        fetch('/jiluphp/index.php/wtfhome/wtfnav?cid=2')
            .then(res=>res.json())
            .then(r=>{
                this.setState({
                    wtfcontent2:r
                })
            })
        fetch('/jiluphp/index.php/wtfhome/allbook?cid=4')
            .then(res=>res.json())
            .then(r=>{
                this.setState({
                    wtfbook2:r
                })
            })
        fetch('/jiluphp/index.php/wtfhome/wtfnav?cid=3')
            .then(res=>res.json())
            .then(r=>{
                this.setState({
                    wtfcontent3:r
                })
            })
        fetch('/jiluphp/index.php/wtfhome/allbook?cid=6')
            .then(res=>res.json())
            .then(r=>{
                this.setState({
                    wtfbook3:r
                })
            })
        fetch('/jiluphp/index.php/wtfhome/wtfnav?cid=4')
            .then(res=>res.json())
            .then(r=>{
                this.setState({
                    wtfcontent4:r
                })
            })
        fetch('/jiluphp/index.php/wtfhome/allbook?cid=9')
            .then(res=>res.json())
            .then(r=>{
                this.setState({
                    wtfbook4:r
                })
            })

    }
    wtfhandelnav1(id,aa){
        this.setState({
            wtfnav1:id
        })
        fetch('/jiluphp/index.php/wtfhome/allbook?cid='+aa)
            .then(res=>res.json())
            .then(r=>{
                this.setState({
                    wtfbook1:r
                })
            })

    }
    wtfhandelnav2(id,aa){
        this.setState({
            wtfnav2:id
        })
        fetch('/jiluphp/index.php/wtfhome/allbook?cid='+aa)
            .then(res=>res.json())
            .then(r=>{
                this.setState({
                    wtfbook2:r
                })
            })
    }
    wtfhandelnav3(id,aa){
        this.setState({
            wtfnav3:id
        })
        fetch('/jiluphp/index.php/wtfhome/allbook?cid='+aa)
            .then(res=>res.json())
            .then(r=>{
                this.setState({
                    wtfbook3:r
                })
            })
    }
    wtfhandelnav4(id,aa){
        this.setState({
            wtfnav4:id
        })
        fetch('/jiluphp/index.php/wtfhome/allbook?cid='+aa)
            .then(res=>res.json())
            .then(r=>{
                this.setState({
                    wtfbook4:r
                })
            })
    }
    render() {
        return (
            <Router>
                <div className="App" ref={(el)=>this.el=el}>
                    <Route  exact path='/' render={()=><WtfHome
                        navac1={this.state.wtfnav1}
                        navac2={this.state.wtfnav2}
                        navac3={this.state.wtfnav3}
                        navac4={this.state.wtfnav4}
                        wtfhandelnav1={this.wtfhandelnav1}
                        wtfhandelnav2={this.wtfhandelnav2}
                        wtfhandelnav3={this.wtfhandelnav3}
                        wtfhandelnav4={this.wtfhandelnav4}
                        nav1={this.state.wtfcontent1}
                        nav2={this.state.wtfcontent2}
                        nav3={this.state.wtfcontent3}
                        nav4={this.state.wtfcontent4}
                        wtfbook1={this.state.wtfbook1}
                        wtfbook2={this.state.wtfbook2}
                        wtfbook3={this.state.wtfbook3}
                        wtfbook4={this.state.wtfbook4}
                    />
                    }/>
                    <Route path="/shoppingCart" component={shoppingCart}/>
                    <Route path="/my" component={My}/>
                    <Route path="/payorder" component={PayOrder}/>
                    <Route path="/orderList" component={Zjt_OrderList}/>
                    {/*<Route path="/address" component={Dizhi}/>*/}
                    <Route path="/detail/:id" component={GoodsDetails}/>
                </div>
            </Router>
        );
    }
}
export default App;
