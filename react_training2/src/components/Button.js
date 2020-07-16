import React, {Component} from 'react'
import styled from 'styled-components'

const Button = styled.button`
    text-transform: capitalize;
    width: 120px;
    height: 35px;
    background: transparent;
    border: 0.05rem solid white;
    border-radius: 0.4rem;
    color: black;
    padding: 0.2rem 0.5rem;
    transition: all 0.5s linear;
    &:hover{
        background: rgb(238, 130, 238);
        color: blue;
    }
`

export default Button;