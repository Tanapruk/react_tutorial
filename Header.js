import React from 'react';
import { Component } from 'react';



class Header extends Component {
	constructor(){
		super();
		this.state = {
			name: 'New Nextzy',
			value: 0
		}
		this.onClick = this.onClick.bind(this);
	}
	onClick(){
		this.setState({
			name:'Yoohoo!!',
			value: this.state.value +1
		})
	}
	render() {
		console.log('render() in Header');
		return (
<h1 onClick={this.onClick}>{this.state.name} {this.state.value}</h1>
			)
	}
}


export default Header
