'use strict'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { wrapStore, alias } from 'react-chrome-redux'

import user from './user'
import input from './input'
import question from './question'
import questions from './questions'
import location from './location'
import storage from '../utils/storage'

//import aliases from './aliases'

const reducer = combineReducers({
  input,
  user,
  question,
  questions,
  location
})

const middleware = composeWithDevTools(applyMiddleware(
  //alias(aliases),
  thunkMiddleware,
  createLogger({ collapsed: true })
))

const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './input'
export * from './question'
export * from './questions'
export * from './location'
