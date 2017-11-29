'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store, { fetchQuestions } from './store'
import DrawerComponents from './components/Drawer'


const initApp = event => {
  const youtube = document.body
  const app = document.createElement('div')
  app.id = 'app'
  youtube.append(app)

  ReactDOM.render(
    <Provider store={ store }>
      <DrawerComponents />
    </Provider>,
    document.getElementById('app')
  )
}

switch (document.readyState) {
  case "loading":
  case "complete":
  document.addEventListener("DOMContentLoaded", initApp(event))
    break

  case "interactive":
    initApp(event)
    break
}
