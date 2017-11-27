'use strict'

import '../chrome/style/index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store, {fetchQuestions} from './store'
//import Routes from './routes'
import DrawerContainer from './components/Drawer'
import './socket'
import registerServiceWorker from './registerServiceWorker'
import { Store } from 'react-chrome-redux'

// window.addEventListener('load', () => {
//const request = new XMLHttpRequest()
//request.open('GET', 'http://localhost:8080/api/questions')  // sync
//request.send()
//})

const body = document.body
const app = document.createElement('div')
app.id = 'app'
body.prepend(app)

ReactDOM.render(
  <Provider store={ store }>
    <DrawerContainer />
  </Provider>,
  document.getElementById('app')
)

