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


// var newdiv = document.createElement('div');
// newdiv.id = "alignToBottomDIV";
// $(newdiv).html("Bottom Toolbar");
// $("body").append(newdiv);

const initApp = (event) => {
  // const youtube = document.getElementById('content')
  const youtube = document.body
  const app = document.createElement('div')
  app.id = 'app'
  youtube.append(app)

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
