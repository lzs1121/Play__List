import React from 'react';
import {connect} from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./home";
import Add from "./add";
class App extends React.Component {
    render(){
        return (
            <BrowserRouter >
                <div id="musicApp">
                    <Switch>
                        <Route path="/add" component={Add}/>
                        <Route path="/" render = {(e)=>{
                            if(this.props.data.length < 1){
                                return <Redirect to="/add" />
                            }
                            return <Home router = {e}/>
                        }}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
export default connect((state)=>state)(App);