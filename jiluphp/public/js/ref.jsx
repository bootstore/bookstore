/**
 * Created by WTF on 2017/7/14.
 */
// class Login extends React.Component{
//     constructor(){
//         super();
//         this.state=({
//             name:'123',
//             password:'456'
//         })
//         this.addname=this.addname.bind(this)
//         this.addpassword=this.addpassword.bind(this)
//         this.addsubmit=this.addsubmit.bind(this)
//     }
//     addname(v){
//         if(v.length>=10){
//             return;
//         }
//         this.setState({
//             name:v
//         })
//     }
//     addpassword(v){
//         this.setState({
//             password:v
//         })
//     }
//     addsubmit(){
//         console.log(this.state.name,this.state.password)
//     }
//     render(){
//         return (
//             <div className="container">
//                 <form>
//                     <div className="form-group">
//                         <label>账号</label>
//                         <input type="email" onChange={(e)=>this.addname(e.target.value)} value={this.state.name}  className="form-control"/>
//                     </div>
//                     <div className="form-group">
//                         <label>密码</label>
//                         <input type="text" onChange={(e)=>this.addpassword(e.target.value)} value={this.state.password} className="form-control"/>
//                     </div>
//                     <button type="submit"
//                             onClick={(e)=>{e.preventDefault(),this.addsubmit()}}
//                             className="btn btn-default">
//                         Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }
// ReactDOM.render(<Login/>,document.querySelector('#root'));

//第二个
// class Login extends React.Component{
//     constructor(){
//         super();
//     }
//     handleSubmit(){
//         fetch('/react/index.php/home/aa',{
//             method:'post',
//             body:new FormData(this.formEl)
//         }).then(res=>res.json())
//             .then(r=>console.log(r))
//     }
//     render(){
//         return(
//             <div className="container">
//                 <form ref={(el)=>this.formEl=el}>
//                     <div className="form-group">
//                         <label>歌手</label>
//                         <input  ref={(el)=>this.nameEl=el}
//                                 type="text"
//                                 name="name"
//                                 className="form-control"/>
//                     </div>
//                     <div className="form-group">
//                         <label>专辑</label>
//                         <input ref={(el)=>this.zjEl=el}
//                                type="text"
//                                name="zj"
//                                className="form-control"/>
//                     </div>
//                     <button type="submit"
//                             onClick={(e)=>{
//                                 e.preventDefault();
//                                 this.handleSubmit()}}
//                             className="btn btn-default">
//                         Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }
// ReactDOM.render(<Login/>,document.querySelector('#root'));

// class Editor extends React.Component{
//     constructor(){
//         super();
//     }
//     componentDidMount(){
//         var E = window.wangEditor;
//         var editor=new E(this.el);
//         editor.create()
//     }
//     render(){
//         return (
//             <div id="editor" ref={(el)=>this.el=el}></div>
//         )
//     }
// }
// ReactDOM.render(<Editor/>,document.querySelector('#root'));