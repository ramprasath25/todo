import React from 'react';
import styles from './todo-item.css';
var ToDoItem = React.createClass({
	render: function() {
		return(
			<li>
				<div className="todo-item">
					<span className="item-name">{this.props.items}</span>
					<span className="item-delete" onClick={this.handleDelete}> X </span>
				</div>
			</li>
		);
	},
	handleDelete: function() {
		this.props.onDelete(this.props.items);
	}
});

module.exports = ToDoItem;