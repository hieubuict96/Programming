import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg'

class NavBar extends Component {
    render(){
        return(
            <nav>
                <ul>
                    <li>
                        <img src={logo} />
                    </li>
                    <li>
                        <Link 