import React, { Component } from 'react'
import {ContextConsumer} from './context.js'
import Product from './Product.js';


class Index extends Component {
    render(){
        return(
            <div className="container">
                {ContextConsumer.forEach(element => {
                    <Product img={element.img} title={element.title} price={element.price} company={element.company} />
                })}
            </div>
        )
    }
}

export default Index;