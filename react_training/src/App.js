import React, { Component } from 'react';
import NavBar from './components/NavBar.js'
import Index from './components/Index'
import Detail from './components/Detail'
import Cart from './components/Cart/Cart.js'
import Contact from './components/Contact'
import { Switch, Route } from 'react-router-dom'
import 'project_react/Bootstrap4.1.3/css/bootstrap.min.css'
import 'project_react/fontawesome-free-5.13.0-web/css/all.min.css'
import { ProductProvider} from './components/context'
import Modal from './components/Modal'

class App extends Component {
	render(){
		return(
				<ProductProvider>
				<NavBar />
				<Switch>
					<Route exact path="/"  component= {Index} />
					<Route exact path="/detail"  component={Detail} />
					<Route exact path="/cart"   component={Cart} />
					<Route exact path="/contact"  component={Contact} />
				</Switch>
				<Modal />
				</ProductProvider>
		)
	}
}

export default App;
