import { render } from 'react-dom';
import App from './App';

//import the render function of react-dom
//use it to build App.js into the element of Html called 'app'

const node = document.getElementById('app')
render( < App / > , node)
