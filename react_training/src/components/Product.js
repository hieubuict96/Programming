import React, { Component } from 'react';

class Product extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="card">
                <img src={this.props.img} className="card-img-top" />
                <div className="card-body">
                    <div>
                        <span className="mr-auto">{this.props.title}</span><span>{this.props.price} $</span>
                    </div>
                    <div>
                        <span>Company</span>
                        <span className="ml-auto">{this.props.company}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;