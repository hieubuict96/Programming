import React, {Component} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import Button from './Button'

export default class Navbar extends Component{
    render(){
        return(
            <NavWrapper className="navbar bg-primary navbar-dark">
                <img src={logo} alt="store" className="navbar-brand ml-1" />
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="" className="nav-link">trang chủ</Link>
                    </li>
                </ul>
                <Button>
                    <i className="fas fa-cart-plus mr-2"></i>
                    <span>my cart</span>
                </Button>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
    text-transform: capitalize;
    
`