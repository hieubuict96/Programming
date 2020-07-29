import React, { Component } from 'react';
import styled from "styled-components"

class Product extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <DivWrapper className="card col-sm-4 col-md-2 m-4 p-0">
                <img src={this.props.img} className="card-img-top p-3" />
                <ButtonCart className="p-2">
                    {(this.props.inCart == true) ? "InCart" : <i className="fas fa-cart-plus"></i>}
                </ButtonCart>
                <div className="card-body p-0">
                    <div className="d-flex">
                        <span className="mr-auto ml-1">{this.props.title}</span>
                        <span className="mr-1">{this.props.price} $</span>
                    </div>
                    <div className="d-flex">
                        <span className="text-capitalize ml-1">company</span>
                        <span className="ml-auto text-capitalize mr-1">{this.props.company}</span>
                    </div>
                </div>
            </DivWrapper>
        )
    }
}

const DivWrapper = styled.div
`
background-color: rgb(230, 255, 255);
transition: all 1s linear 0s;
&:hover {
    box-shadow: 3px 3px 8px 0 rgb(230, 145, 255);
    cursor: pointer;
}
`

const ButtonCart = styled.button
`
    height: auto;
    width: auto;
    border-radius: 10px 0 0;
    background-color: blue;
    color: white;
    border-width: 0.1px;
`

export default Product;