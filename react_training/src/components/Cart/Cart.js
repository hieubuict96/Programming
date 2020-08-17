import React, { Component } from "react";
import { ProductConsumer } from "../context";
import CartItem from "./CartItem";

export default class Cart extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 className="text-uppercase text-center mt-5">your cart</h1>
                <ProductConsumer>
                    {context => {
                        if (context.cart.length > 0) {
                            return(
                                context.cart.map(value => {
                                    return <CartItem {...value} />
                                })
                            )
                        } else {
                            return <h5 className="text-capitalize text-center mt-5">your cart is empty</h5>
                        }
                    }}
                </ProductConsumer>
            </React.Fragment>
        );
    }
}
