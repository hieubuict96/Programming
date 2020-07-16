import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App2 from './App2.js';
import {ProductProvider} from './context';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'public/fontawesome-free-5.13.0-web/css/all.min.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<ProductProvider>
		<Router>
			<App2 />
		</Router>
	</ProductProvider>
  ,
  	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
