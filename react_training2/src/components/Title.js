import React, {Component} from 'react'

export default class Title extends Component{
    render(){
        return(
            <div className="text-center font-weight-bold text-uppercase my-5">
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}