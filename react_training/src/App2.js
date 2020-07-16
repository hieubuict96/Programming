import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App2.css';
import Navbar from './components/Navbar';
import Default from './components/Default';
import Details from './components/Details';
import Productlist from './components/Productlist';
import Cart from './components/Cart';

class App2 extends Component{
    render(){
        return(
            <React.Fragment>
                <Navbar></Navbar>
                <Switch>
                    <Route path="/" exact component={Productlist} />
                    <Route path="/detail" component={Details} />  
                    <Route path="/cart"  component={Cart} />
                    <Route component={Default} />
                </Switch>
            </React.Fragment>
        )
    }   
}

export default App2;