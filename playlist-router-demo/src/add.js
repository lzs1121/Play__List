import React from "react";

export default class Header extends React.Component {
    constructor(){
        super(...arguments);
        this.state = {
            title: "",
            singer: ""
        };
    }
    render(){
        return (
            <header>
                <h2 className="title">
                    添加音乐
                    <a
                        className="backLink"
                        onClick={()=>{
                            this.props.local.history.goBack();
                        }}
                    >返回</a>
                </h2>
                <input
                    type="text"
                    placeholder="输入歌曲名字"
                    value={this.state.title}
                    onChange={
                        (e)=>{
                            this.setState({
                                title: e.target.value
                            });
                        }
                    }
                />
                <input
                    type="text"
                    placeholder="输入歌手名字"
                    value={this.state.singer}
                    onChange={(e)=>{
                        this.setState({
                            singer: e.target.value
                        });
                    }}
                />
                <input
                    type="button"
                    value="确认添加"
                    onClick={()=>{
                        this.props.onAdd(this.state.title,this.state.singer);
                        this.setState({
                            title: "",
                            singer: ""
                        });
                        this.props.local.history.push("/");
                    }}
                />
            </header>
        );
    }
}