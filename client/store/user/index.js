'use strict'

import axios from 'axios'
import history from '../../history'


/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const ADD_USER = 'ADD_USER'
/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUser = user => ({ type: GET_USER, user })
const addUser = user => ({ type: ADD_USER, user})
const removeUser = () => ({ type: REMOVE_USER })

/**
 * THUNK CREATORS
 */
export const me = () =>
  dispatch =>
    axios.get('/auth/me')
      .then(res => dispatch(getUser(res.data || defaultUser)))
      .catch(err => console.log(err))

export const auth = (email, password, method) =>
  dispatch =>
    axios.post(`https://code-mode.herokuapp.com/auth${method}`, { email, password })
      .then(res => {
        dispatch(getUser(res.data))
        history.push('/home')
      })
      .catch(error => dispatch(getUser({error})))

export const logout = () =>
  dispatch =>
    axios.post('https://code-mode.herokuapp.com/auth/logout')
      .then(_ => {
        dispatch(removeUser())
        history.push('/login')
      })
      .catch(err => console.log(err))

// export const signup = () =>
//     dispatch =>
//       axios.post(`https://code-mode.herokuapp.com/auth/signup`, req.body)
//       .then(_ =>{
//         dispatch(addUser(res.data))

//       })

/**
 * REDUCER
 */
export default function (state = {}, action) {
  switch (action.type) {

    case GET_USER:
      return action.user

    case REMOVE_USER:
      return defaultUser

    default:
      return state
  }
}
