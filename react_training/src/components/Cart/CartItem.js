import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

class CartItem extends Component {
    render() {
        return (
            <ProductConsumer>
                {(context) => (
                    <div className="d-flex mb-3">
                        <img src={this.props.img} className="col-2 text-center" alt="img" />
                        <span className="col-2 text-center align-self-center">{this.props.title}</span>
                        <span className="col-2 text-center align-self-center">{this.props.price} $</span>
                        <span className="col-2 text-center align-self-center">
                            <button className="px-2 py-0" onClick={() => context.decrement(this.props.id)}>
                                -
                            </button>
                            <span className="p-2">{this.props.count}</span>
                            <button className="px-2 py-0" onClick={() => context.increment(this.props.id)}>
                                +
                            </button>
                        </span>
                        <span className="col-2 text-center align-self-center">
                            <Link to="/cart" onClick={() => context.removeItem(this.props.id)}>
                                <i className="fas fa-trash"></i>
                            </Link>
                        </span>
                        <span className="col-2 text-center align-self-center">
                            <span className="text-capitalize">item total:</span>
                            <span>{this.props.total} $</span>
                        </span>
                    </div>
                )}
            </ProductConsumer>
        );
    }
}

export default CartItem;
