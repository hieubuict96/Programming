import React, { Component } from "react";
import { ProductConsumer } from "../context";
import CartItem from "./CartItem";
import { ButtonContainer } from "../ButtonContainer";

export default class Cart extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="text-uppercase text-center mt-5">your cart</h1>
                <ProductConsumer>
                    {(context) => {
                        if (context.cart.length > 0) {
                            const totalItem = context.cart.map((value, key) => {
                                return <CartItem {...value} key={key} />;
                            });
                            return (
                                <>
                                    <div className="d-flex mb-2">
                                        <span className="text-uppercase col-2 text-center">
                                            products
                                        </span>
                                        <span className="col-2 text-uppercase text-center">
                                            name of product
                                        </span>
                                        <span className="col-2 text-uppercase text-center">
                                            price
                                        </span>
                                        <span className="col-2 text-uppercase text-center">
                                            quantity
                                        </span>
                                        <span className="col-2 text-uppercase text-center">
                                            remove
                                        </span>
                                        <span className="col-2 text-center">
                                            total
                                        </span>
                                    </div>
                                    {totalItem}
                                    <div className="col-3 ml-auto">
                                        <p className="text-right">
                                            <ButtonContainer className="text-uppercase" onClick={context.clearCart}>
                                                clear cart
                                            </ButtonContainer>
                                        </p>
                                        <p className="font-weight-bold text-right">
                                            <span className="text-uppercase">
                                                sub total : 
                                            </span>
                                            <span> {context.cartSubTotal} $</span>
                                        </p>
                                        <p className="font-weight-bold text-right">
                                            <span className="text-uppercase">
                                                tax :
                                            </span>
                                            <span> {context.cartTax} $</span>
                                        </p>
                                        <p className="font-weight-bold text-right">
                                            <span className="text-uppercase">
                                                total :
                                            </span>
                                            <span> {context.cartTotal} $</span>
                                        </p>
                                    </div>
                                </>
                            );
                        } else {
                            return (
                                <h5 className="text-capitalize text-center mt-5">
                                    your cart is empty
                                </h5>
                            );
                        }
                    }}
                </ProductConsumer>
            </div>
        );
    }
}
