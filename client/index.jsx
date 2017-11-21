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

if (viewport) viewport.prepend(document.getElementById('app'));

ReactDOM.render(
  <Provider store={ store }>
  <DrawerWrapper />
  </Provider>,
  document.getElementById('app')
)

registerServiceWorker();

// if (viewport) viewport.prepend(document.getElementById('app'));


// Create a div to render the <App /> component to.
// const app = document.createElement('div');

// Set the app element's id to `root`. This is the same as the element that create-react-app renders to by default so it will work on the local server too.
// app.id = 'root';

// Prepend the <App /> component to the viewport element if it exists. You could also use `appendChild` depending on your needs.
