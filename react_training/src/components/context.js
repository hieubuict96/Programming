import {storeProducts} from '../data.js'
import React, { Component } from 'react'

const ContextProduct = React.createContext(storeProducts);

class ProductProvider extends Component {
    state = {
        products: [],
        cart: [],
        detailProduct: [],
        cartTotal: 0,
        subTotal: 0
    }

    addToCart = () => {

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