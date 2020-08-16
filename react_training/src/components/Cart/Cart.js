import React, { Component } from "react";
import { ProductConsumer } from "../context";
import CartItem from "./CartItem";

export default class Cart extends Component {
    render() {
        return (
            <React.Fragment>
             <h1 className="text-uppercase text-center mt-5">your cart</h1>
            <ProductConsumer>
                {(context) =>{
                    if (context.cart.length > 0) {
                        console.log(context.cart);
                        context.cart.map((value, key) => {
                            return (
                                    <CartItem img={value.img} title={value.title} price={value.price} count={value.count} total={value.total} key={key} />
                            )
                        })
                    } else {
                        return(
                            <h2 className="text-uppercase text-center">your cart is empty</h2>
                        )
                    }
                }
                }
            </ProductConsumer>
            </React.Fragment>
        )
    }
}
