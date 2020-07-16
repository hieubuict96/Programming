import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Trangchu from './components/Trangchu'
import Giohang from './components/Giohang'
import Chitietsp from './components/Chitietsp'
import NotFound from './components/NotFound'

export default class App2 extends Component{
    render(){
        return(
            <React.Fragment>
                <Navbar></Navbar>
                <Switch>
                    <Route path="/" exact component={Trangchu} />
                    <Route path="/chitietsp" exact component={Chitietsp} />
                    <Route path="/giohang" exact component={Giohang} />
                    <Route path="" component={NotFound} />
                </Switch>
            </React.Fragment>
        )
    }
}
