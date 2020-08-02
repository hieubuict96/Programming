import React, { Component } from 'react';
import styled from "styled-components"
import { Link } from "react-router-dom"

class Product extends Component {
    constructor(props) {
        super(props);
    }

    clickButton() {
    }

    render() {
        return (
            <DivWrapper className="col-sm-9 col-md-5 mx-md-1 col-lg-3 mx-lg-2 col-xl-2 mx-xl-4 p-0 my-4">
                <div className="card">
                    <div className="img-container">
                        <Link to="/Detail">
                            <img src={this.props.img} alt="store" className="card-img-top p-4" />
                        </Link>
                        <button className="cart-btn py-1 px-2" onClick={this.clickButton()}>
                            {(this.props.inCart === true) ? "InCart" : <i className="fas fa-cart-plus" />}
                        </button>
                    </div>
                    <div className="card-footer p-0">
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
transition: all 0.5s linear 0s;

.img-container {
    position: relative;
    overflow: hidden;
}

.card-img-top {
    transition: all 0.5s linear;
}

&:hover .card-img-top {
    transform: scale(1.2);
}

&:hover {
    box-shadow: 3px 3px 8px 0 rgb(230, 145, 255);
    cursor: pointer;
}

.cart-btn {
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: 10px 0 0;
    background-color: blue;
    color: white;
    border-width: 0.1px;
    transition: all 0.5s linear;
    transform: translate(100%, 100%);
}

&:hover .cart-btn {
    transform: translate(0, 0);
}

.cart-btn:hover {
    background: rgb(177, 122, 122);
    color: blue;
    cursor: pointer;
    border-color: transparent;
}
`

export default Product;