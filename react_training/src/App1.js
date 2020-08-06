 import React,  { Component } from "react"

export default class App1 extends Component {
    state = {
        a: "abcd",
        b: "efgh"
    }

    abc = () => {
        this.setState(
            function abcd() {
                console.log("ahgfk")
                return {a: "iklm"}
            }
        )
    }

    render() {
        return (
            <div>
                <p>{this.state.a}</p>
                <button onClick={this.abc}>Click</button>
            </div>
        )
    }
}