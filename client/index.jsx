'use strict'

import '../public/style/index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
//import Routes from './routes'
import DrawerWrapper from './components/Drawer'
import './socket'
import registerServiceWorker from './registerServiceWorker'

const body = document.body;
const app = document.createElement('div')
app.id = 'app'
if (body) body.prepend(app)

ReactDOM.render(
  <Provider store={ store }>
    <DrawerWrapper />
</Provider>,
document.getElementById('app')
)

registerServiceWorker();
