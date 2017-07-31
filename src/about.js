import React from 'react';
import {Link} from 'react-router';

var About = React.createClass({
	render: function() {
		return (
			<div><Link to={'/'}>Home</Link>
			<h1>About us page</h1>
			</div>
		)
	}
});

module.exports = About;