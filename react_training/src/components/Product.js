import React, { Component } from 'react';
import styled from "styled-components"
import { Link } from "react-router-dom"

class Product extends Component {
    constructor(props) {
        super(props);
    }

    addCart(id) {
        return "add product successfully";
    }

    render() {
        return (
            <DivWrapper className="col-sm-12 col-md-6 col-lg-3 col-xl-2 mx-md-1 mx-lg-2 mx-xl-4 p-0 my-4">
                <Link to="/detail" className="link">
                    <div className="card">
                        <div className="img-container">
                            <img src={this.props.img} alt="store" className="card-img-top p-4" />
                            {
                                (this.props.inCart === true) ?
                                    <button className="incart py-1 px-2 text-capitalize" disabled>
                                        in cart
                                    </button>
                                    :
                                    <button className="cart-btn py-1 px-2" onClick={() => this.addCart(this.props.id)}>
                                        <i className="fas fa-cart-plus" />
                                    </button>
                            }
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
                </Link>
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
    box-shadow: 0px 0px 5px 0 rgb(230, 145, 255);
    cursor: pointer;
}

.incart {
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: 10px 0 0;
    background-color: rgb(121, 121, 245);
    color: rgb(21, 21, 204);
    border: 0.1px solid transparent;
    transition: all 0.5s linear;
    transform: translate(100%, 100%);
}

.cart-btn {
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: 10px 0 0;
    background-color: rgb(121, 121, 245);
    color: rgb(21, 21, 204);
    border: 0.1px solid transparent;
    transition: all 0.5s linear;
    transform: translate(100%, 100%);
}

&:hover .cart-btn, &:hover .incart {
    transform: translate(0, 0);
}

.cart-btn:hover {
    background: rgb(21, 21, 204);
    color: white;
    cursor: pointer;
    border-color: transparent;
}

.link {
    text-decoration: none;
}
`

export default Product;