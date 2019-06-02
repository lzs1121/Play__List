import React from "react";

export default class Footer extends React.Component {
    render(){
        return (
            <footer style={{
                display: this.props.length?"block":"none"
            }}>
                <div className="info">
                    <span
                        className="align-right"
                        style={{
                            display: this.props.selectLength?"block":"none"
                        }}
                    >当前选中{this.props.selectLength}首歌曲</span>
                    <span>共{this.props.length}首歌曲</span>
                </div>
                <input
                    type="button"
                    value="删除选中歌曲"
                    onClick={()=>{this.props.removeSelect()}}
                />
                <input
                    type="button"
                    value="收藏选中歌曲"
                    onClick={()=>{
                        this.props.onSelectLike();
                    }}
                />
                <input
                    type="button"
                    value="取消收藏选中歌曲"
                    onClick={()=>{
                        this.props.cancelLikeSelect()
                    }}
                />
                <input
                    type="button"
                    value="查看收藏清单"
                    style={{
                        display: (this.props.showList&&this.props.likeLength > 0)?"inline-block":"none"
                    }}
                    onClick={()=>{
                        this.props.changeShowAll()
                    }}
                />
                <input
                    type="button"
                    value="查看所有清单"
                    style={{
                        display: !this.props.showList?"inline-block":"none"
                    }}
                    onClick={()=>{
                        this.props.changeShowAll()
                    }}
                />
            </footer>
        );
    }
}