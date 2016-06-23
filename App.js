import React from 'react';
import { Component } from 'react';
import Widget from './Widget';
import Header from './Header';

//export default = allow other classes to import like above
export default class App extends Component {
    //render() is a required override method for component.

    render() {
        const data = 'This is data for widget object.';
        console.log('render()App')
            //render can only return one dom object, so we have to pack it inside <div>
        return ( < div >
                < h1 > Hello Nextzy < /h1> < h2 > This is header2 < /h
                2 > < Widget name = { data }
                /> < Header / >
                < /div>
            )
            //the Widget is an object which takes a parameter call name.
            //Header is another imported object. You have to look inside Header.js to see what it consists of.
            //in javascript, we use bracket when referring to a variable.
    }


}
