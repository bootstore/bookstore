/**
 * Created by WTF on 2017/7/13.
 */
//react第二天    不要再晕了....

    //重点在80行以后！！！！！！！！！！！！！！！！！！！！！！！！！！！！

//问题    三元表达式加引号
//        样式里属性值加引号


//1 虚拟dom

//2 虚拟dom之组件
//3 组件  state
//4 组件  props
//5 组件  生命周期函数
//6 组件  事件系统



    // button点击更换样式
    // 思路   创建类   render()  返回创建的div   样式为btn   通过 三元运算符判断constructor  state
    //             里设置的属性 给添加不同的类名 ,添加点击事件，写函数前记得bind(this)，改变setState 里的样式属性
    //             样式添加style{{}}, 给button上添加小圆点    设置样式
    //             定义常量把 这个类整合起来   设置内容（通过this.props.children放入button中）
    //              属性(name)（this.props.name小圆点里的数字）
    //              渲染进页面
// const el=<h1>this is 哈哈</h1>
// class Button extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             active:false
//         }
//         this.handelClick=this.handelClick.bind(this);
//     }
//
//     handelClick(){
//         this.setState({
//             active:!this.state.active
//         })
//     }
//     render(){
//         var des={
//             width:20,
//             height:20,
//             background:'#ff6700',
//             borderRadius:'50%',
//             position:'absolute',
//             right:-10,
//             top:-10,
//             fontSize:16
//         }
//         return (
//             <div style={{position:'relative'}} className={`btn ${this.state.active?'btn-danger':'btn-info'} `}
//                  onClick={()=>this.handelClick()}>{this.props.children}
//                  <div className="dec" style={des}>
//                      {this.props.num}
//                  </div>
//             </div>
//         )
//     }
// }
// const page=(
//     <div>
//         {el}
//         <Button num="5">商品总数</Button>
//         <hr/>
//         <Button num="8">通知</Button>
//     </div>
// )
//
// // 渲染
// ReactDOM.render(page,document.querySelector('#root'));


// class Button extends React.Component{
//     constructor(){
//         super();
//     }
//     render(){
//         return(
//             <div onClick={()=>this.props.fn(this.props.children)}
//                 className={`${this.props.col? this.props.col:''} button `}>
//                 {this.props.children}
//             </div>
//         )
//     }
// }
// /*
//   props: data 按键列表      Array           ''
// */
// class KeyBoard extends React.Component{
//     render(){
//         var els=this.props.data.map((v,i)=>{
//             var fn;
//             if(v.type==1){
//                 fn=this.props.numberClick;
//             }else if(v.type==2){
//                 fn=this.props.oClick;
//             }else if(v.type==3){
//                 fn=this.props.equalClick
//             }else{
//                 fn=()=>{}
//             }
//             return(
//             <Button fn={fn}
//                 col={`${v.type==3?'col2':''}`} key={i} type={v.type}>
//                 {v.content}
//                 </Button>)
//             }
//         )
//         return <div className="keyboard">{els}</div>
//
//     }
// }
// const buttons=[
//     {type:4,content:'AC'},
//     {type:2,content:'('},
//     {type:2,content:')'},
//     {type:2,content:'/'},
//     {type:1,content:7},
//     {type:1,content:8},
//     {type:1,content:9},
//     {type:2,content:'*'},
//     {type:1,content:4},
//     {type:1,content:5},
//     {type:1,content:6},
//     {type:2,content:'+'},
//     {type:1,content:1},
//     {type:1,content:2},
//     {type:1,content:3},
//     {type:2,content:'-'},
//     {type:1,content:0},
//     {type:1,content:'.'},
//     {type:3,content:'='},
// ]
// //props    num   屏幕上要展示的数字    string
// class Screen extends React.Component{
//     render(){
//         return(
//             <div className="screen">
//                 <div className="num">{this.props.num}</div>
//             </div>
//         )
//     }
// }
// class Cal extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             num:0,
//             expression:''
//         }
//         this.numberClick=this.numberClick.bind(this);
//         this.oClick=this.oClick.bind(this);
//         this.equalClick=this.equalClick.bind(this);
//     }
//     numberClick(v){
//         var e=this.state.expression+v
//         this.setState({
//             expression:e,
//             num:e,
//         })
//     }
//     oClick(v){
//         var e=this.state.expression+v
//         this.setState({
//             expression:e,
//             num:e
//         })
//     }
//     equalClick(){
//         try{
//             var num=eval(this.state.expression);
//             this.setState({
//                 num:num,
//                 expression:''+num
//             })
//         }catch(e){
//             var num='非法表达式';
//             this.setState({
//                 num:num,
//                 expression:''
//             })
//         }
//     }
//     render(){
//         return(
//             <div id="cal">
//                 <Screen num={this.state.num}/>
//                 <KeyBoard numberClick={this.numberClick} data={buttons}
//                           oClick={this.oClick}
//                           equalClick={this.equalClick}/>
//             </div>
//         )
//     }
// }
//     ReactDOM.render(<Cal/>,document.querySelector('#root'));
