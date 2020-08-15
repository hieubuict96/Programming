import React, { Component } from "react";
import { ProductConsumer } from "../context";
import CartItem from "./CartItem";

export default class Cart extends Component {
    render() {
        return (
            <ProductConsumer>
                <h1 className="text-uppercase text-center mt-5">your cart</h1>
                {(context) =>{
                    if (context.cart.length > 0) {
                        context.cart.map((value) => {
                            return (
                                    <CartItem {...value} />
                            )
                        })
                    } else {
                        return(
                            <h2 className="text-uppercase">your cart is empty</h2>
                        )
                    }
                }
                }
            </ProductConsumer>
        )
    }
}
