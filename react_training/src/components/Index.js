import React, { Component } from 'react'
import {ContextConsumer, ContextProduct} from './context.js'
import Product from './Product.js';

class Index extends Component {
    render(){
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <ContextConsumer>
                        {context => context.map(value => {
                            return <Product img={value.img} title={value.title} price={value.price} company={value.company} />
                        })}
                    </ContextConsumer>
                </div>
            </div>
        )
    }
}

export default Index;