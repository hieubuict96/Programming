import React, { Component } from "react";
import { ProductConsumer } from "../context";
import CartItem from "./CartItem";

export default class Cart extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 className="text-uppercase text-center mt-5">your cart</h1>
                <ProductConsumer>
                    {(context) =>
                        context.cart.length > 0 ? (
                            context.cart.map((value) => <CartItem {...value} />)
                        ) : (
                            <h2 className="text-uppercase text-center">
                                your cart is empty
                            </h2>
                        )
                    }
                </ProductConsumer>
            </React.Fragment>
        );
    }
}
