<<<<<<< HEAD
import React, { Component } from "react";
import {Switch, Route} from 'react-router-dom'
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart/";
import Default from "./components/Default";
import Modal from './components/Modal';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
=======
import React, { Component } from 'react';
import NavBar from './components/NavBar.js'
import Index from './components/Index'
import Detail from './components/Detail'
import Cart from './components/Cart'
import Contact from './components/Contact'
import { Switch, Route } from 'react-router-dom'
import 'project_react/bootstrap.min.css'

class App extends Component {
	render(){
		return(
			<React.Fragment>
				<NavBar />
				<Switch>
					<Route exact path=""  component= {Index} />
					<Route exact path="/detail"  component={Detail} />
					<Route exact path="/cart"   component={Cart} />
					<Route exact path="/contact"  component={Contact} />
				</Switch>
			</React.Fragment>
		)
	}
>>>>>>> c1e0ac482f41ec62139ac5bc73dd8760fa31623d
}

export default App;
