import React from 'react';
import {Link} from 'react-router';

import ToDoItem from './todoitems';
import AddItem from './addItem';

import './index.css';
class Home extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			ToDo : ["Eat", "Sleep", "Code", "Repeat"],
			Greetings:"To Do Application"
		}
	}
	render() {
		var todoList = this.state.ToDo.map(function(items, index){
			return (
				<ToDoItem items = {items} key={index} onDelete={this.onDelete.bind(this)} />
			);
		}.bind(this));
		return (
			<div id="todo-list">
				<Link to={'/about'}>About</Link>
				<h1>{this.state.Greetings}</h1>				
				<ul>
					{todoList}
				</ul>
				<AddItem onAdd={this.onAdd.bind(this)}/>
			</div>
		);
	}
	onDelete(item) {
		var updatedTodos = this.state.ToDo.filter(function(val, index) {
			//Compare the value with item passed and stored in updatedTodos..
			return item !== val;
		});
		this.setState({
			ToDo : updatedTodos
		});
	}
	onAdd(item){
		var updatedTodos = this.state.ToDo;
		updatedTodos.push(item);
		this.setState({
			ToDo : updatedTodos
		});
	}
};

module.exports = Home;