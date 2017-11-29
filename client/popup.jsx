'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import PopupMain from './components/PopupMain'
import { Provider } from 'react-redux'
import store from './store'


const initPopup = event => {
  const popupBody = document.body
  const popupApp = document.createElement('div')
  popupApp.id = 'popup'
  popupBody.append(popupApp)

  ReactDOM.render(
    <Provider store={ store }>
      <PopupMain />
    </Provider>,
    document.getElementById('popup')
  )

}

switch (document.readyState) {
  case "loading":
  case "complete":
    document.addEventListener("DOMContentLoaded", initPopup(event))
    break

  case "interactive":
    initPopup(event)
    break
}

// ReactDOM.render(
//   <Provider store={ store }>
//     <PopupMain />
//   </Provider>,
//   document.getElementById('popup')
// )
