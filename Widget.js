import React from 'react';
import { Component } from 'react';

export default class Widget extends Component {
    console.log('render()Widget')
        //{this.props.name} --> create property variable called name and put it to the <p> tag.
        //As you  see on the App.js, we can pass an argument with a name="xx" to the <p> tag.
    render() {
        return ( < div >
            < h1 > Widget < /h1> < p > { this.props.name } < /p> < /div>
        )
    }
}
