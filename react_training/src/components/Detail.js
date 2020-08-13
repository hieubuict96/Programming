import React, { Component } from "react";
import { ProductConsumer } from "./context";
import { ButtonContainer } from "./ButtonContainer";
import { Link } from "react-router-dom";

export default class Detail extends Component {
  render() {
    return (
      <div className="container">
        <ProductConsumer>
          {(context) => (
            <div className="d-flex">
              <img
                src={context.detailProduct.img}
                alt="image"
                className="col-sm-10 col-md-5 mb-auto"
              />
              <div className="col-sm-10 col-md-5 mb-auto">
                <p>
                  <span className="text-capitalize">product name: </span>
                  <span>{context.detailProduct.title}</span>
                </p>
                <p className="text-uppercase">
                  <span>company: </span>
                  <span>{context.detailProduct.company}</span>
                </p>
                <p>
                  <span className="text-capitalize">price: </span>
                  <span>{context.detailProduct.price} $</span>
                </p>
                <p className="text-capitalize font-w">
                  some info about product:
                </p>
                <p className="text-capitalize">{context.detailProduct.info}</p>
                <Link to="/">
                  <ButtonContainer className="text-capitalize mr-4">
                    back to products
                  </ButtonContainer>
                </Link>
                <Link to="/detail">
                  <ButtonContainer
                    className="text-capitalize"
                    disabled={context.detailProduct.inCart}
                    onClick={() => {
                      context.addToCart(context.detailProduct.id);
                      context.openModal(context.detailProduct.id);
                    }}
                  >
                    <div
                      className={
                        context.detailProduct.inCart ? "btn-disable" : "btn-able"
                      }
                    >
                      {context.detailProduct.inCart ? "in cart" : "add to cart"}
                    </div>
                  </ButtonContainer>
                </Link>
              </div>
            </div>
          )}
        </ProductConsumer>
      </div>
    );
  }
}
