import React from "react";
import Item from "./itme";
export default class Table extends React.Component {
    render(){
        // console.log(this.props);
        return (
        <table className="main"  style={{
            display:this.props.data.length?"table":"none"
        }}>
            <thead>
                <tr>
                    <th>
                        <input
                            type="checkbox"
                            id="checkAll"
                            checked={this.props.isCheckAll}
                            onChange={(e)=>{
                                this.props.onCheckAll(e.target.checked);
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
                {this.props.data.map((val, index) =>{
                    return <Item
                        key={index}
                        index={index}
                        data={val}
                        onCheck = {this.props.onCheck}
                        onLike = {this.props.onLike}
                        onRemove = {this.props.onRemove}
                    />
                })}
            </tbody>
        </table>
        );
    }
}