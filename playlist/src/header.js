import React from "react";

export default class Header extends React.Component {
    constructor(){
        super(...arguments);
        this.state={
            title:"",
            singer: ""
        }
    }
    render (){
        return (
            <header>
                <h2 className="title">播放列表</h2>
                <input
                    type="text"
                    placeholder="请输入歌曲"
                    value={this.state.title}
                    onChange={(e)=>{
                        this.setState({
                            title:e.target.value
                        });
                    }}
                />
                <input
                    type="text"
                    placeholder="请输入歌手"
                    value={this.state.singer}
                    onChange={(e)=>{
                        this.setState(
                            {
                                singer:e.target.value
                            }
                        );
                    }}
                />
                <input
                    type="button"
                    value="确认添加"
                    onClick={()=>{
                        let title = this.state.title;
                        let singer = this.state.singer;
                        this.props.onAdd(title,singer);
                        title = "";
                        singer = "";
                        this.setState({
                            title,
                            singer
                        });
                    }}
                />
            </header>
        );
    }
}