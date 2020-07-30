import React, { Component } from 'react';
import styled from "styled-components"
import {Link} from "react-router-dom"

class Product extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <DivWrapper className="col-sm-9 col-md-5 mx-md-1 col-lg-3 mx-lg-2 col-xl-2 mx-xl-4 p-0 my-4">
                <div className="card">
                    <Link to="/Detail">
                    <img src={this.props.img} className="card-img-top p-3" />
                    </Link>
                    <button className="p-2 cart-btn">
                        {(this.props.inCart == true) ? "InCart" : <i className="fas fa-cart-plus" />}
                    </button>
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

.cart-btn {
    display: inline;
    border-radius: 10px 0 0;
    background-color: blue;
    color: white;
    border-width: 0.1px;
    position: relative;
    left: 100%;
    top: 100%;
}

&:hover .cart-btn {

}
`

export default Product;