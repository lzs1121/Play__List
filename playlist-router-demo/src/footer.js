import React from "react";
import {Link} from "react-router-dom";


export default class Footer extends React.Component {
    render(){
        let length = this.props.length;
        let selectLength = this.props.selectLength;
        let likeLength = this.props.likeLength;
        let pathName = this.props.local.location.pathname;
        return (
            <footer style={{
                display: length?"block":"none"
            }}>
                <div className="info">
                    <span
                        className="align-right"
                        style={{
                            display: this.props.selectLength?"block":"none"
                        }}
                    >当前选中{selectLength}首歌曲</span>
                    <span>共{length}首歌曲</span>
                </div>
                <input
                    type="button"
                    value="删除选中歌曲"
                    style={{
                        display: selectLength?"inline-block":"none"
                    }}
                    onClick={()=>{
                        this.props.removeSelect();
                    }}
                />
                <input
                    type="button"
                    value="收藏选中歌曲"
                    style={{
                        display: selectLength?"inline-block":"none"
                    }}
                    onClick={()=>{
                        this.props.likeSelect();
                    }}
                />
                <input
                    type="button"
                    value="取消收藏选中歌曲"
                    style={{
                        display: selectLength?"inline-block":"none"
                    }}
                    onClick={()=>{
                        this.props.cancelLikeSelect()
                    }}
                />
                {pathName === "/"&&likeLength?(<Link to="/likelist" >查看收藏清单</Link>):""}
                {pathName === "/likelist"?(<Link to="/" >查看所有清单</Link>):""}
            </footer>
        );
    }
}