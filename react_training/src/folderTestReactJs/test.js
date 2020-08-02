import React, {Component} from 'react'

class Test extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>Ten toi la {this.props.title}</div>
        )
    }
}
 
export default Test;