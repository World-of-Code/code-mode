'use strict'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import user from './user'
import question from './question'
import allQuestions from './allQuestions'
import location from './location'
import mode from './mode'

const reducer = combineReducers({
  user,
  question,
  allQuestions,
  location,
  mode
})

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true })
))

const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './allQuestions'
export * from './question'
export * from './location'
export * from './mode'

// backend api route
export const BACK_END = 'https://code-mode.herokuapp.com' //'http://localhost:8080'
