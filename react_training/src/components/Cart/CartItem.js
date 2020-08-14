import React, { Component } from "react";

export default class CartItem extends Component {
    render() {
        return (
            <div className="d-flex">
                <img src={this.props.img} className="col-2" />
                <span className="col-2">{this.props.title}</span>
                <span className="col-2">{this.props.price}</span>
                <span className="col-2">
                    <button className="p-2">-</button>
                    <span className="p-2">{this.props.count}</span>
                    <button className="p-2">+</button>
                </span>
                <span className="p-2">
                    <i class="fas fa-trash"></i>
                </span>
                <span className="p-2">
                    <span className="text-capitalize">item total: </span>
                    <span>{this.props.total} $</span>
                </span>
            </div>
        );
    }
}
