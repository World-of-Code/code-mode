'use strict'

import '../chrome/style/index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store, {fetchQuestions} from './store'
//import Routes from './routes'
import DrawerComponents from './components/Drawer'
// import registerServiceWorker from './registerServiceWorker'
import { Store } from 'react-chrome-redux'

const initApp = (event) => {
  const youtube = document.getElementById('content')
  const app = document.createElement('div')
  app.id = 'app'
  youtube.appendChild(app)

  ReactDOM.render(
    <Provider store={store}>
      <DrawerComponents />
    </Provider>,
    document.getElementById('app')
  )
};

switch (document.readyState) {
  case "loading":
  case "complete":
    document.addEventListener("DOMContentLoaded", initApp(event))
    break;
  case "interactive":
    initApp(event)
    break;
}
