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
        const product = this.state.products.find(item => item.id === id)
        product.inCart = 
        this.setState(
            {
            cart: [...this.cart, product]
        })
    }

    increment = (id) => {

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