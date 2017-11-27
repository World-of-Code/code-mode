'use strict'

import '../chrome/style/index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store, {fetchQuestions} from './store'
import DrawerWrapper from './components/Drawer'
import './socket'

const body = document.body
const app = document.createElement('div')
app.id = 'app'
body.prepend(app)

ReactDOM.render(
  <Provider store={ store }>
    <DrawerWrapper />
  </Provider>,
  document.getElementById('app')
)

