import React, { Component } from 'react';

class Product extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="card col-sm-4 col-md-2 m-4 p-0">
                <img src={this.props.img} className="card-img-top p-3" />
                <div className="card-body p-0">
                    <div className="d-flex">
                        <span className="mr-auto">{this.props.title}</span>
                        <span>{this.props.price} $</span>
                    </div>
                    <div className="d-flex">
                        <span className="text-capitalize">company</span>
                        <span className="ml-auto">{this.props.company}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;