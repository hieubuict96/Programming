import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg'
import {ButtonContainer} from './ButtonContainer'

class NavBar extends Component {
    render(){
        return(
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
				<img src={logo} alt="store" className="navbar-brand mr-5" />
                <ul className="navbar-nav ml-5">
                    <li className="nav-item mx-5">
                        <Link to="" className="nav-link text-capitalize bg-success">product</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link text-capitalize bg-success">contact</Link>
                    </li>
				</ul>
				<Link className="ml-auto" to="/cart">
					<ButtonContainer className="px-2 py-1">
						<span className="mr-2">
						<i className="fas fa-cart-plus"></i>
						</span>
						<span className="text-capitalize">my cart</span>
					</ButtonContainer>
				</Link>
            </nav>
        )
    }
}

export default NavBar;