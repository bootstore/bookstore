/**
 * Created by WTF on 2017/7/12.
 */
// react第一天         晕
//1虚拟DOM;
//  解决比对的问题，让页面更高效
//  解决一言不合就重绘,会以最小的代价解决改变
//2组件
//     const data = [1, 2, 3];
//     var el = (
//         <ul>{data.map((v,i)=><li key={i}>{v}</li>)}</ul>
//     );
//     //那种表达式里面不能注释
//     ReactDOM.render(
//         el, document.querySelector('#root')
//     );
//     // 等于document.createElement() 然后 appendChild   方便很多
//     setTimeout(function () {
//         var data = [1, 2];
//         el = (
//             <ul>
//                 {data.map((v,i)=><li key={i}>{v}</li>)}
//             </ul>
//         );
//         ReactDOM.render(
//             el,
//             document.querySelector('#root')
//         );
//     }, 1000);

//2 组件
// class Header extends React.Component {
//     // constructor(){
//     //     super();
//     // }
//     //这里的constructor如果不用this的话可以省略
//     render() {
//         return (
//             <ul>
//                 <li>123</li>
//             </ul>
//         )
//     }
// }
// class Footer extends React.Component {
//     // constructor(){
//     //     super();
//     // }
//     //这里的constructor可以省略
//     render() {
//         return (
//             <ul>
//                 <li>456</li>
//             </ul>
//         )
//     }
// }
// class Page extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Header/>
//                 <Footer/>
//             </div>
//         )
//     }
// }
// ReactDOM.render(<Page/>, document.querySelector('#root'));
// const header=(
//     <div>
//         欢迎
//     </div>
// );
// const footer=(
//     <div>
//         再见
//     </div>
// );
// class NewsList extends React.Component{
//     constructor(){
//         super();
//         //调用的原因是让父类的构造函数运行一下才能用this;
//         this.state={
//             data:[1,2,3]
//         }
//         this.delete=this.delete.bind(this);
//     }
//     componentDidMount(){
//
//         //当组件被渲染到页面的时候这个函数就会执行
//     }
//     delete(i){
//         this.state.data.splice(i,1);
//         this.setState({
//             data:this.state.data
//         })
//     }
//     render(){
//         var lis=this.state.data.map((v,i)=>(
//             <li key={i}>
//                 {v}
//                 <span onClick={()=>this.delete(i)}>X</span>
//             </li>))
//         return(
//             <ul>
//                 {lis}
//             </ul>
//         )
//     }
// }
// const page=(
//     <div>
//         {header}
//         <NewsList/>
//         {footer}
//     </div>
// )
// ReactDOM.render(page,document.querySelector('#root'));


    //4 生命周期函数 以下中有ajax链接数据库;
// class Music extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             data:[],
//             loading:true
//         }
//     }
//     componentDidMount(){
//         fetch('/react/index.php/home/x')
//             .then(res=>res.json())
//             .then(r=>this.setState({data:r,loading:false}))
//     }
//     render(){
//         var trs=this.state.data.map(v=>(
//             <tr key={v.id}>
//                 <td>{v.id}</td>
//                 <td>{v.name}</td>
//                 <td><img style={{height:'50px',width:'50px'}} src={v.pic} alt=""/></td>
//             </tr>
//         ))
//         return (
//             <div className="container">
//                 {this.state.loading? <div className="alert alert-success">加载中...</div>:null}
//             <table className="table">
//                 <thead>
//                 <tr>
//                     <th>id</th>
//                     <th>name</th>
//                     <th>pic</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {trs}
//                 </tbody>
//             </table>
//             </div>
//         )
//     }
// }
// const Page=(
//     <div>
//         <Music/>
//     </div>
// );
//
// ReactDOM.render(Page,document.querySelector('#root'));


class List extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        fetch(this.props.url)
            .then(res => res.json())
            .then(r => this.setState({loading: false, data: r}))
    }

    render() {
        var head, body;
        if (this.state.data) {
            var arr = Object.keys(this.state.data[0]);
            head = (
                <tr>
                    {arr.map((v, i) => <th key={i}>{v}</th>)}
                </tr>
            );
            body = this.state.data.map(v => (
                <tr key={v.id}>
                    {arr.map((key, i) => <td key={i}>{v[key]}</td>)}
                </tr>

            ))
        }
        return (
            <div className="container">
                {this.state.loading ? <div className="alert alert-success">加载中...</div> : null}
                <opacition>{this.props.name}</opacition>
                <table className="table">
                    <thead>
                    {head}
                    </thead>
                    <tbody>
                    {body}
                    </tbody>
                </table>
            </div>
        )
    }
}
const page = (
    <div>
        <List url="/react/index.php/home/x" name="歌手"/>
        <List url="/react/index.php/home/y" name="账号"/>
        <List url="/react/index.php/home/z" name="歌曲"/>
    </div>
);
ReactDOM.render(page, document.querySelector('#root'));


