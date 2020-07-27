import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg'
import {ButtonContainer} from './ButtonContainer'

class NavBar extends Component {
    render(){
        return(
            <nav>
                <ul>
                    <li>
                        <img src={logo} />
                    </li>
                    <li>
                        <Link to="">Product</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/cart">
                            <ButtonContainer>My Cart</ButtonContainer>
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar;