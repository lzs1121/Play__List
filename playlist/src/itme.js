import React from "react";

export default class Itme extends React.Component {
    render(){
        let data = this.props.data;
        let className = data.like?"like":"";
        className += data.selected?" selected":"";
        return (
            <tr className={className}>
                <td>
                    <input
                        type="checkbox"
                        checked={data.selected}
                        onChange={(e)=>{
                            this.props.onCheck(this.props.index,e.target.checked);
                        }}
                    />
                </td>
                <td>{data.title}</td>
                <td>{data.singer}</td>
                <td>
                    <input
                        type="checkbox"
                        checked={data.like}
                        onChange={(e)=>{
                            this.props.onLike(this.props.index,e.target.checked);
                        }}
                    />
                </td>
                <td>
                    <a onClick={()=>{
                        this.props.onRemove(this.props.index);
                    }}>X</a>
                </td>
            </tr>
        );
    }
}