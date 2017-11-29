'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import '../chrome/style/index.scss'
import PopupMain from './components/PopupMain'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={ store }>
    <PopupMain />
  </Provider>,
  document.getElementById('popup')
)
