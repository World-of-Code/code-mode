'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import '../public/style/index.scss'
import './socket'
import {Login, Signup} from './components/auth-form.jsx'
import { Provider } from 'react-redux'
import store from './store'
console.log('hi ', Login)
ReactDOM.render(
    <Provider store={store}>
        <div>
            <Login />
            <Signup />
        </div>
    </Provider>,
document.getElementById('popup')
)