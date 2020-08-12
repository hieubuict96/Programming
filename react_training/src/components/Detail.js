import React, { Component } from "react";
import { ProductConsumer } from "./context";
import { ButtonContainer } from "./ButtonContainer";
import { Link } from "react-router-dom";

export default class Detail extends Component {
  render() {
    return (
      <div className="container">
        <ProductConsumer>
          {(value) => (
            <div className="d-flex">
              <img
                src={value.detailProduct.img}
                alt="image"
                className="col-sm-10 col-md-5 mb-auto"
              />
              <div className="col-sm-10 col-md-5 mb-auto">
                <p>
                  <span className="text-capitalize">product name: </span>
                  <span>{value.detailProduct.title}</span>
                </p>
                <p className="text-uppercase">
                  <span>company: </span>
                  <span>{value.detailProduct.company}</span>
                </p>
                <p>
                  <span className="text-capitalize">price: </span>
                  <span>{value.detailProduct.price} $</span>
                </p>
                <p className="text-capitalize font-w">
                  some info about product:{" "}
                </p>
                <p className="text-capitalize">{value.detailProduct.info}</p>
                <Link to="/">
                  <ButtonContainer className="text-capitalize mr-4">
                    back to products
                  </ButtonContainer>
                </Link>
                <Link to="/detail">
                  <ButtonContainer
                    className="text-capitalize"
                    disabled={value.detailProduct.inCart}
                    onClick={() => {
                      value.addToCart(value.detailProduct.id);
                      value.handleDetail(value.detailProduct.id);
                    }}
                  >
                    <div
                      className={
                        value.detailProduct.inCart ? "btn-disable" : "btn-able"
                      }
                    >
                      {value.detailProduct.inCart ? "in cart" : "add to cart"}
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
