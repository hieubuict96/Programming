import React, {Component} from 'react'
import Title from './Title'
import Product from './Product'
import {ProductConsumer} from '../context'
import styled from 'styled-components'

export default class Trangchu extends Component{
    render(){
        return(
            <React.Fragment>
                
                <Title name="our product" />
                <div className="container">
                    <div className="row justify-content-center">
                        <ProductConsumer>
                            {value=>(
                                value.map(product=>(
                                    <Product img={product.img} title={product.title} price={product.price}></Product>
                                ))
                            )}
                        </ProductConsumer>
                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}