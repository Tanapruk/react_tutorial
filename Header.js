import React from 'react';
import { Component } from 'react';
//export default -> make this class importable.
export default class Header extends Component {
    constructor() {
            super();
            //init state object which have 2 fields called name and value.
            this.state = {
                    name: 'New Nextzy',
                    value: 0
                }
                //bind onClick which is below this line
            this.onClick = this.onClick.bind(this);
        }
        //create a method for on click to change the state
    onClick() {
            this.setState({
                name: 'Yoohoo!! is clicked for ',
                value: this.state.value + 1
            })
        }
        //required override method called render
    render() {
        console.log('render() in Header');
        //make this one a header1 and set onClick to it.
        //show the state of the name and state of the value.
        //bracklet {} means calling variable.
        return ( < h1 onClick = { this.onClick } > { this.state.name } { this.state.value } < /h1>)
    }
}
