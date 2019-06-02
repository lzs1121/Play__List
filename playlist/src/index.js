import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./header";
import Table from "./table";
import Footer from "./footer";
class App extends React.Component {
    constructor(){
        super(...arguments);
        this.state = {
           data:[
               {
                   title: "空白格",
                   singer: "蔡健雅",
                   selected: false,
                   like: false
               },
               {
                   title: "全世界失眠",
                   singer: "陈奕迅",
                   selected: false,
                   like: false
               }
           ],
            showAll: true
        };
        this.add = this.add.bind(this);
        this.setCheckAll = this.setCheckAll.bind(this);
        this.setCheck = this.setCheck.bind(this);
        this.setLike = this.setLike.bind(this);
        this.remove = this.remove.bind(this);
        this.setLikeSelect = this.setLikeSelect.bind(this);
        this.removeSelect = this.removeSelect.bind(this);
        this.cancelLikeSelect = this.cancelLikeSelect.bind(this);
        this.showList = this.showList.bind(this);
    }
    add(title,singer){
        let data = this.state.data;
        data.push({
            title: title,
            singer: singer,
            selected: false,
            like: false
        });
        this.setState({
            data
        });
    }
    showList(){
        this.setState({
           showAll: !this.state.showAll
        });
    }
    isCheckAll(){
        let data = this.state.data;
        for(let i = 0; i < data.length; i++){
            if(!data[i].selected){
                return  false;
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
        });
    }
    setCheck(index,checked){
        this.state.data[index].selected = checked;
        this.setState({
            data: this.state.data
        });
    }
    setLike(index,checked){
        this.state.data[index].like = checked;
        this.setState({
            data: this.state.data
        });
    }
    remove(index){
        let data = this.state.data.filter((val,i)=>{
            return i !== index;
        });
        this.setState({
            data
        });
    }
    removeSelect(){
        let data = this.state.data.filter((val)=>{
            return !val.selected;
        });
        this.setState({
            data
        });
    }
    setLikeSelect(){
        let data = this.state.data.map((val)=>{
            if(val.selected){
                val.like = true;
            }
            return val;
        });
        this.setState({
            data
        });
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
        });
    }
    render(){
        let data = this.state.data;
        let length = data.length;
        let selectData = data.filter((val)=>val.selected);
        let likeDate = data.filter((val)=>val.like);
        let selectLength = selectData.length;
        let likeLength = likeDate.length;
        return (
            <div id="musicApp">
                <Header
                    onAdd = {this.add}
                />
                <Table
                    data = {this.state.showAll?data:likeDate}
                    isCheckAll = {this.isCheckAll()}
                    onCheckAll = {this.setCheckAll}
                    onCheck = {this.setCheck}
                    onLike = {this.setLike}
                    onRemove = {this.remove}
                />
                <Footer
                    length = {length}
                    selectLength = {selectLength}
                    likeLength = {likeLength}
                    onSelectLike = {this.setLikeSelect}
                    removeSelect = {this.removeSelect}
                    cancelLikeSelect = {this.cancelLikeSelect}
                    showList = {this.state.showAll}
                    changeShowAll = {this.showList}
                />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
