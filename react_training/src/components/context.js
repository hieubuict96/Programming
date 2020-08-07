import {storeProducts} from '../data.js'
import React, { Component } from 'react'

const ContextProduct = React.createContext(storeProducts);

class ProductProvider extends Component {
    state = {
        products: storeProducts,
        cart: [],
        detailProduct: [],
        cartTotal: 0,
        subTotal: 0
    }

    addToCart = (id) => {
        const product = {...this.state.products.find(item => item.id === id)}
        product.inCart = true;
        product.count = 1;
        product.total = product.price;
        this.setState({
            cart: [...this.state.cart, product]
        })
    }

    incrementQty = (id) => {
        const product = {...this.state.cart.find(item => item.id === id)}
        product.count = product.count + 1;
        product.total = product.total + product.price;
        const index = {...this.state.cart.indexOf(product)};
        this.state.cart.splice(index);
        this.setState({
            cart: [...this.state.cart, product]
        })
    }

    decrementQty = (id) => {
        let cart = [...this.state.cart]
        const product = {...cart.find(item => item.id === id)}
        if (product.count >= 2) {
            product.count -= 1;
            product.total -= product.price;
            const index = {...cart.indexOf(product)}
            cart.splice(index)
            this.setState({
                cart: [...cart, product]
            })
        } else {
            const index = cart.indexOf(product)
            cart.splice(index)
            this.setState({
                cart: [...this.state.cart]
            })
        }
    }

    render() {
        return (
            <ContextProduct.Provider value={storeProducts

            }>

            </ContextProduct.Provider>
        )
    }
}

const ContextConsumer = ContextProduct.Consumer;

export {ProductProvider, ContextConsumer};