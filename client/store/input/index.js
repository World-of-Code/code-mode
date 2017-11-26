'use strict'

import axios from 'axios'
import history from '../../history'

/**
 * ACTION TYPES
 */
const GET_INPUT = 'GET_INPUT'
const POST_INPUT = 'POST_INPUT'

/**
 * ACTION CREATORS
 */
const getInput = input => ({ type: GET_INPUT, input })
const postNewInput = input => ({ type: POST_INPUT, input})
/**
 * THUNK CREATORS
 */
export const fetchInput = () =>
  dispatch => axios.get('/api/input')
    .then(res => dispatch(getInput(res.data)))
    .catch(err => console.log('Error getting input', err))

export const postInput = input => 
  dispatch => axios.post('/api/input', input)
    .then(res => dispatch(postNewInput(res.data)))
    .catch(err => console.log('Error saving input', err))
    /**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {

    case GET_INPUT:
    case POST_INPUT:
      return action.input

    default:
      return state
  }
}
