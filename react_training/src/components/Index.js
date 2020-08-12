import React, { Component } from 'react'
import { ProductConsumer } from './context.js'
import Product from './Product.js';

class Index extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                        <ProductConsumer>
                            {context => context.products.map(value => {
                                return (
                                    <Product {...value} />
                                )
                            })}
                        </ProductConsumer>
                </div>
            </div>
        )
    }
}

export default Index;