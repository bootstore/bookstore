/**
 * Created by WTF on 2017/7/19.
 */
import React from 'react';
import E from 'wangeditor';
class Editor extends React.Component{
    componentDidMount(){
        var editor=new E(this.el);
        var that=this;
        editor.customConfig.uploadImgServer=this.props.action;
        editor.customConfig.uploadFileName='file';
        editor.customConfig.onchange=function(html){
            that.props.onChange(html);
        };
        editor.customConfig.uploadImgHooks={
            customInsert:function(insertImg,result,editor){
                var url=result.url;
                insertImg(url)
            }
        };
        editor.create();
    }
    render(){
        return(
            <div id="editor" style={{width:'800px'}} ref={(el)=>this.el=el}></div>
        )
    }
}
export default Editor;