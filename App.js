import React from 'react';
import { Component } from 'react';
import Widget from './Widget';
import Header from './Header';

export default class App extends Component {
	render() {
		const data = 'asdfasdf';
		console.log('render()');
		return (
			<div>
			<h1> Hello Nextzy</h1>
			<h2>ssss</h2>
			<Widget name={data}/>
			<Header/>
			</div>
		)
	}


}

