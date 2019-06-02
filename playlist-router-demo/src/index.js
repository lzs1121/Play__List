import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "./main";
import Footer from "./footer";
import {Link , Redirect} from "react-router-dom";
import Add from "./add";
/*
* header
* main
* footer
* */
/*
* [
*   {
*       title: "空白格",
*       singer: "蔡健雅",
*       selected: false,
*       like: false
*   }
* ]
*
*
* */
class App extends React.Component {
    constructor(){
        super(...arguments);
        this.now = 4;
        this.state={
          data:[
              {
                  id: 0,
                  title: "空白格",
                  singer: "蔡健雅",
                  selected: true,
                  like: false
              },
              {
                  id: 1,
                  title: "空白格222",
                  singer: "蔡健雅222",
                  selected: true,
                  like: true
              },
              {
                  id: 2,
                  title: "空白格3333",
                  singer: "蔡健雅3333",
                  selected: true,
                  like: true
              },
              {
                  id: 3,
                  title: "空白格333",
                  singer: "蔡健雅333",
                  selected: true,
                  like: false
              }
          ]
        };
        this.add = this.add.bind(this);
        this.setCheckAll = this.setCheckAll.bind(this);
        this.setCheck = this.setCheck.bind(this);
        this.setLike = this.setLike.bind(this);
        this.remove = this.remove.bind(this);
        this.removeSelect = this.removeSelect.bind(this);
        this.likeSelect = this.likeSelect.bind(this);
        this.cancelLikeSelect = this.cancelLikeSelect.bind(this);
    }
    add(title,singer){
        let data = this.state.data;
        data.push({
            id: this.now,
            title: title,
            singer: singer,
            selected: false,
            like: false
        });
        this.now++;
        this.setState({
            data
        })
    }
    isCheckAll(){
        let data = this.state.data;
        for(let i = 0; i < data.length; i++){
            if(!data[i].selected){
                return false;
            }
        }
        return true;
    }
    setCheckAll(checked){
        let data = this.state.data.map((val)=>{
           val.selected = checked;
           return val;
        });
        this.setState({
            data
        })
    }
    setCheck(index,checked){
        let data = this.state.data;
        data.forEach((val)=>{
            if(val.id === index){
                val.selected = checked;
            }
        });
        this.setState({
            data
        })
    }
    setLike(index,checked){
        let data = this.state.data;
        data.forEach((val)=>{
            if(val.id === index){
                val.like = checked;
            }
        });
        this.setState({
            data
        })
    }
    remove(index){
        let data = this.state.data.filter((val)=>val.id!==index);
        this.setState({
            data
        })
    }
    removeSelect(){
        let data = this.state.data.filter((val)=>!val.selected);
        this.setState({
            data
        })
    }
    likeSelect(){
        let data = this.state.data.map((val)=>{
            if(val.selected){
                val.like = true;
            }
            return val;
        });
        this.setState({
            data
        })
    }
    cancelLikeSelect(){
        let data = this.state.data.map((val)=>{
            if(val.selected){
                val.like = false;
            }
            return val;
        });
        this.setState({
            data
        })
    }
    shouldComponentUpdate(nextProps,nextState){
        if(!nextState.listState){
            let likeData = nextState.data.filter((val)=>val.like);
            if(!likeData.length){
                this.setState({
                    listState: true
                });
                return false;
            }
        }
        return true;
    }
    render(){
        let data = this.state.data;
        let selectData = data.filter((val)=>val.selected);
        let likeData = data.filter((val)=>val.like);
        return (
        <BrowserRouter>
            <div id="musicApp">
                <Switch>
                    <Route path="/add" render={(e)=>{
                       return ( <Add
                            onAdd = {this.add}
                            local = {e}
                        />)
                    }}>
                    </Route>
                    <Route path="/" strict>
                        <div>
                            <header>
                                <h2 className="title">
                                    播放列表
                                    <Link to="/add" className="addLink">添加歌曲</Link>
                                </h2>
                            </header>
                            <Route path="/" exact render={()=>{
                                return (<Main
                                    data={data}
                                    isCheckAll = {this.isCheckAll()}
                                    checkAll = {this.setCheckAll}
                                    setCheck = {this.setCheck}
                                    setLike = {this.setLike}
                                    remove = {this.remove}
                                />)
                            }} />
                            <Route path="/likelist" exact render={()=>{
                                if(likeData.length < 1){
                                    return <Redirect to="/" />
                                }
                                return (<Main
                                    data={likeData}
                                    isCheckAll = {this.isCheckAll()}
                                    checkAll = {this.setCheckAll}
                                    setCheck = {this.setCheck}
                                    setLike = {this.setLike}
                                    remove = {this.remove}
                                />)
                            }} />
                            <Route path="/" render={(e)=>{
                                return (
                                    <Footer
                                        length = {data.length}
                                        selectLength = {selectData.length}
                                        listState = {this.state.listState}
                                        likeLength = {likeData.length}
                                        removeSelect = {this.removeSelect}
                                        likeSelect = {this.likeSelect}
                                        cancelLikeSelect = {this.cancelLikeSelect}
                                        showLikeList = {this.showLikeList}
                                        local = {e}
                                    />
                                );
                            }}/>
                        </div>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
