import {storeProducts} from '../data.js'
import React from 'react'

const ContextProduct = React.createContext(storeProducts);

const ContextConsumer = ContextProduct.Consumer;

export {ContextProduct, ContextConsumer};