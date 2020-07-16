import React, {Component} from 'react'
import styled from 'styled-components'

export default class Product extends Component{

    render(){
        return(
            <Card className="mb-4 col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card">
                    <div className="card-top p-5">
                        <img src={this.props.img} className="card-img-top" />
                        <button className="cart-btn">
                            <i className="fas fa-cart-plus"></i>
                        </button>
                    </div>
                    <div className="card-footer d-flex font-weight-bold align-items-end">
                        <span className="ml-1 mr-auto">{this.props.title}</span>
                        <span className="font-italic">{this.props.price} $</span>
                    </div>
                </div>
            </Card>
        )
    }
}

const Card = styled.div`
    .card{
        transition: all 0.5s linear;
        background: transparent;
    }
    .card:hover{
        box-shadow: 0 0 0.3rem 0.01rem red;
    }
    .card-footer:hover{
        background-color: rgb(255, 255, 225);
    }
    .card-top{
        position: relative;
        overflow: hidden;
        cursor: pointer;
    }
    .card-img-top{
        transition: all 0.5s linear;
    }
    .cart-btn{
        background: violet;
        color: blue;
        border-color: transparent;
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0.4rem;
        transform: translate(100%, 100%);
        border-radius: 0.6rem 0 0;
        transition: all 0.5s linear;
    }
    .card-footer{
        transition: all 1s linear;
        background: transparent;
        border-top: 0.02rem solid black;
    }
    .card-top:hover .card-img-top{
        transform: scale(1.2)
    }
    .card-top:hover .cart-btn{
        transform: translate(0, 0)
    }
    .cart-btn:hover{
        color: black;
        border-color: transparent;
    }
`