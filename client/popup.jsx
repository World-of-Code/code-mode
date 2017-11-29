'use strict'
console.log('popup loading...')

import React from 'react'
import ReactDOM from 'react-dom'
import '../chrome/style/index.scss'
import PopupMain from './components/PopupMain'
import { Provider } from 'react-redux'
import store from './store'
// import { Store } from 'react-chrome-redux'

// const store = new Store({
//   portName: 'code-mode' // communication port name
// });
// console.log('store before render ', store)

const initPopup = event => {
  const popupBody = document.body
  const popupApp = document.createElement('div')
  popupApp.id = 'popup'
  popupBody.append(popupApp)

  // FIGURE OUT WHY?
  // store.ready()
    // .then(() => {
      console.log('store is now ready...')
      ReactDOM.render(
        <Provider store={ store }>
          <PopupMain />
        </Provider>,
        document.getElementById('popup')
      )
    // })
}

switch (document.readyState) {
  case "loading":
    console.log('loading DOM...')
    break
  case "interactive":
    initPopup(event)
    break
  case "complete":
    document.addEventListener("DOMContentLoaded", initPopup(event))
    break
}
