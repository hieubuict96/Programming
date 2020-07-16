import React, {Component} from 'react'

const ThemeContext = React.createContext('dark');

class App1 extends Component{
	render(){
		return(
			<ThemeContext.Consumer>
				{(context)=> <input value={context} />}
			</ThemeContext.Consumer>
		)
	}
}

export default App1;