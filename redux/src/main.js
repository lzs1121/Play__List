import React from "react";
import Itme from "./item";
import {connect} from "react-redux";
class Main extends React.Component {
    render(){
        let data = this.props.data;
        return (
            <table
                className="main"
                style={{
                    display: data.length?"table":"none"
                }}
            >
                <thead>
                <tr>
                    <th>
                        <input
                            type="checkbox"
                            id="checkAll"
                            checked={this.props.isCheckAll}
                            onChange={(e)=>{
                                console.log(e.target.checked);
                                this.props.dispatch({
                                    type: "CHECK_ALL",
                                    check: e.target.checked
                                })
                            }}
                        />
                        <label htmlFor="checkAll">全选</label>
                    </th>
                    <th>歌曲</th>
                    <th>歌手</th>
                    <th>收藏</th>
                    <th>删除</th>
                </tr>
                </thead>
                <tbody>
                {data.map((val)=>{
                    return (<Itme
                        key={val.id}
                        id = {val.id}
                    />)
                })}
                </tbody>
            </table>
        );
    }
}
/*
* 1. 根据pathname 判断当前应该显示什么列表
* 2. isCheckAll 判断当前是否是全选状态
* */
export default connect((state,props)=>{
    let isCheckAll = (function(){
        for(var i = 0; i < state.data.length; i++){
            if(!state.data[i].selected){
                return false;
            }
            return true;
        }
    })();
    console.log(props);
    let pathName = props.location.pathname;
    if(pathName === "/"){
        return Object.assign({},state,{isCheckAll});
    }
    if(pathName === "/like"){
        let data = {};
        data.data = state.data.filter((item)=>item.like);
        return Object.assign({},data,{isCheckAll});
    }


})(Main);