import React, { Component } from "react"
import { detailProduct } from "../data"
import {ButtonContainer} from "./ButtonContainer"
import { Link } from "react-router-dom"

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
                        <p className="text-capitalize font-w">some info about product: </p>
                        <p className="text-capitalize">{detailProduct.info}</p>
                        <Link to="/">
                            <ButtonContainer className="text-capitalize mr-4">
                                back to products
                            </ButtonContainer>
                        </Link>
                        <Link to="/">
                            <ButtonContainer className="text-capitalize" disabled={detailProduct.inCart}>
                                {detailProduct.inCart ? "in cart" : "add to cart"}
                            </ButtonContainer>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}