'use strict'

import axios from 'axios'
import { BACK_END } from '../../store'
import history from '../../history'


/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const SET_USER = 'SET_USER'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
export const getUser = user => ({ type: GET_USER, user })
const removeUser = () => ({ type: REMOVE_USER })
export const setUser = user => ({ type: SET_USER, user })

/**
 * THUNK CREATORS
 */
export const me = () =>
  dispatch =>
    axios.get(`${BACK_END}/auth/me`)
      .then(res => dispatch(getUser(res.data || defaultUser)))
      .catch(err => console.log(err))

export const auth = (email, password, method) =>
  dispatch =>
    axios.post(`${BACK_END}/auth/${method}`, { email, password })
      .then(res => dispatch(getUser(res.data)))
      .then(user => chrome.storage.local.set({ user: user.user }))
      .catch(console.error)

export const logout = () =>
  dispatch =>
    axios.post(`${BACK_END}/auth/logout`)
      .then(_ => {
        dispatch(removeUser())
        history.push('/login')
      })
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = {}, action) {
  switch (action.type) {

    case GET_USER:
    case SET_USER:
      return action.user

    case REMOVE_USER:
      return defaultUser

    default:
      return state
  }
}
