import React from 'react';
import {Link, Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Main from "./main";
import Footer from "./footer";

class Home extends React.Component {
    render(){
        let props = this.props;
        let data = props.data;
        let pathName = props.router.location
            .pathname;
        return (
            <div>
                <header>
                    <h2 className="title">
                        { pathName === "/"?"播放":"收藏"}列表
                        <Link to="/add" className="addLink">添加歌曲</Link>
                    </h2>
                </header>
                <Route path="/" exact component = {Main}/>
                <Route path="/like" render={(e)=> {
                        if(data.filter((item)=>item.like).length < 1){
                            return <Redirect to="/" />
                        }
                        return <Main location={e.location} />
                    }
                }/>
                <Footer
                    pathName = {pathName}
                />
            </div>
        )
    }
}
export default connect((state) => state)(Home);