import React, { Component } from 'react';
import NavBar from './components/NavBar.js'
import Index from './components/Index'
import Detail from './components/Detail'
import Cart from './components/Cart'
import Contact from './components/Contact'
import { Switch, Route } from 'react-router-dom'
import 'project_react/Bootstrap 4.1.3/css/bootstrap.min.css'

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
}

export default App;
