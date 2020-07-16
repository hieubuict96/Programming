import {storeProducts} from './data.js'
import React, { Component } from 'react';


const Productcontext= React.createContext();

class ProductProvider extends Component{
    render(){
        return(
            <Productcontext.Provider value={storeProducts} >
                {this.props.children}
            </Productcontext.Provider>
        )
    }
} 
const ProductConsumer = Productcontext.Consumer;

export {ProductProvider, ProductConsumer};