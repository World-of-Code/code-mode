'use strict'

import axios from 'axios'


/**
 * ACTION TYPES
 */
const SET_MODE = 'SET_MODE'
const GET_MODE = 'GET_MODE'

/**
 * ACTION CREATORS
 */
export const setMode = mode => ({ type: SET_MODE, mode })
export const getMode = () => ({ type: GET_MODE })

/**
 * REDUCER
 */
export default (state = '', action) => {
  switch (action.type) {

    case SET_QUESTION:
      return action.mode

    case GET_QUESTION:
    default:
      return state
  }

}
