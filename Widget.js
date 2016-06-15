import React from 'react';
import { Component } from 'react';



export default class Widget extends Component {
	render() {
		return (
		<div>
			<h1> Widget </h1>
			<p>{this.props.name}</p>
		</div>
		)
	}
}




