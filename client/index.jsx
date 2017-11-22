'use strict'

import '../public/style/index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Routes from './routes'
import DrawerWrapper from './components/Drawer'
import './socket'
import '../public/style/main.css'
import registerServiceWorker from './registerServiceWorker'

// Get the element to prepend our app to. This could be any element on a specific website or even just `document.body`.

const viewport = document.getElementById('viewport');
const app = document.createElement('div')
app.id = 'app' 
if (viewport) viewport.prepend(app)

ReactDOM.render(
  <Provider store={ store }>
  <h1>hello</h1>
</Provider>,
document.getElementById('app')
)


// window.addEventListener('load', () => {
//   const injectDOM = document.createElement('div')
//   injectDOM.className = 'inject-react-example'
//   injectDOM.style.textAlign = 'center'
//   document.body.appendChild(injectDOM)
//   render(<DrawerWrapper />, injectDOM)
// })

registerServiceWorker();

//if (viewport) viewport.prepend(document.getElementById('app'));


// Create a div to render the <App /> component to.
// const app = document.createElement('div');

// Set the app element's id to `root`. This is the same as the element that create-react-app renders to by default so it will work on the local server too.
// app.id = 'root';

// Prepend the <App /> component to the viewport element if it exists. You could also use `appendChild` depending on your needs.
