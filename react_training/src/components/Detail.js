import React, { Component } from "react"
import { detailProduct } from "../data"
import {ButtonContainer} from "./ButtonContainer"

export default class Detail extends Component {
    render() {
        return (
            <div className="container">
                <div className="d-flex">
                    <img src={detailProduct.img} alt="image" className="col-sm-10 col-md-5 mb-auto" />
                    <div className="col-sm-10 col-md-5 mb-auto">
                        <p><span className="text-capitalize">product name: </span><span>{detailProduct.title}</span></p>
                        <p className="text-uppercase"><span>company: </span><span>{detailProduct.company}</span></p>
                        <p><span className="text-capitalize">price: </span><span>{detailProduct.price} $</span></p>
                        <p className="text-capitalize">some info about product: </p>
                        <p className="text-capitalize">{detailProduct.info}</p>
                    </div>
                </div>
            </div>
        )
    }
}
