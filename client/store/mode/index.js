'use strict'

import axios from 'axios'
import { read, add, edit } from './modes'


/**
 * ACTION TYPES
 */
const SET_MODE_READ = 'SET_MODE_READ'
const SET_MODE_ADD = 'SET_MODE_ADD'
const SET_MODE_EDIT = 'SET_MODE_EDIT'
const GET_MODE = 'GET_MODE'

/**
 * ACTION CREATORS
 */
export const setModeRead = () => ({ type: SET_MODE_READ })
export const setModeAdd = () => ({ type: SET_MODE_ADD })
export const setModeEdit = () => ({ type: SET_MODE_EDIT })
export const getMode = () => ({ type: GET_MODE })

/**
 * REDUCER
 */
export default (state = read, action) => {
  switch (action.type) {

    case SET_MODE_READ:
      return read

    case SET_MODE_ADD:
      return add

    case SET_MODE_EDIT:
      return edit

    case GET_MODE:
    default:
      return state
  }

}
