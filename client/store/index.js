'use strict'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import user from './user'
import input from './input'

const reducer = combineReducers({ user, input })
import question from './question'
import questions from './questions'
import location from './location'


const reducer = combineReducers({
  user,
  question,
  questions,
  location
})

const middleware = composeWithDevTools(applyMiddleware(
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
