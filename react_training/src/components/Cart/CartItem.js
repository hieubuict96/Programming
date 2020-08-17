import React, { Component } from "react";
import {ProductConsumer} from "../context"

class CartItem extends Component {
    render() {
        return (
            <div>
            <ProductConsumer>
                {context => (
                    <div className="d-flex">
                    <img src={this.props.img} className="col-2" alt="img" />
                    <span className="col-2">{this.props.title}</span>
                    <span className="col-2">{this.props.price}</span>
                    <span className="col-2">
                        <button className="p-2" onClick={context.decrement}>-</button>
                        <span className="p-2">{this.props.count}</span>
                        <button className="p-2" onClick={context.increment}>+</button>
                    </span>
                    <span className="p-2">
                        <i class="fas fa-trash"></i>
                    </span>
                    <span className="p-2">
                        <span className="text-capitalize">item total: </span>
                        <span>{this.props.total} $</span>
                    </span>
                </div>
                )}
            </ProductConsumer>
            </div>
        )
    }
}

export default CartItem;