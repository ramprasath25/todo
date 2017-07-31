// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, Link} from 'react-router';
//import Home from './todocomponent';
import Home from './home';
import About from './about';


//Main Component
class App extends React.Component {
	render() {
		return(
			<Router history={browserHistory}>
				<Route path={'/'} component={Home}></Route>
				<Route path={'/about'} component={About}></Route>
			</Router>
		)
	}
};



// Render the component to HTML...
ReactDOM.render(<App />, document.getElementById('app'));