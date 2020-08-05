import React, {Component} from "react"

export default class App1 extends Component {
        state = {
            a: "abcd",
            b: "efgh"
        }

    abc = () => {
        this.setState(
            function abcd(){
                return {a: "iklm"}
            }
        )
    }

    render() {
        return (
            <div>
                <p>{this.state.a}</p>
                <button onClick={this.abc}>click</button>
            </div>
        )
    }
}

