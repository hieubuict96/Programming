import React, { Component } from "react";

export default class Component1 extends Component{
    constructor(props){
        super(props)
        this.state = {
            a: 1,
            b: 2
        }
    }

    handll(){
        console.log('ok')
    }

    handl(){
        return this.handll
    }

    render(){
        return(
            <div>
                <button onClick={this.handl}>{this.state.a}</button>
            </div>
        )
    }
   
}