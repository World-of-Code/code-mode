'use strict'

import axios from 'axios'


/**
 * ACTION TYPES
 */
const GET_INPUT = 'GET_INPUT'
const CREATE_INPUT = 'CREATE_INPUT'
const CHANGE_INPUT = 'CHANGE_INPUT'

/**
 * ACTION CREATORS
 */
const getInput = input => ({ type: GET_INPUT, input })
const createInput = input => ({ type: POST_INPUT, input})
const changeInput = input => ({ type: CHANGE_INPUT, input})

/**
 * THUNK CREATORS
 */
export const fetchInput = (questionId, userId) =>
  dispatch =>
    axios.get(`/api/questions/${questionId}/users/${userId}`)
      .then(res => dispatch(getInput(res.data)))
      .catch(err => console.log(err))

export const addInput = (questionId, input) =>
  dispatch =>
    axios.post(`/api/questions/${questionId}`, input)
      .then(res => dispatch(createInput(res.data)))
      .catch(err => console.log(err))

export const editInput = (questionId, userId, input) =>
  dispatch =>
    axios.post(`/api/questions/${questionId}/users/${userId}`, input)
      .then(res => dispatch(changeInput(res.data)))
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {

    case GET_INPUT:
    case CREATE_INPUT:
    case CHANGE_INPUT:
      return action.input

    default:
      return state
  }
}
