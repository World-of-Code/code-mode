'use strict'

import axios from 'axios'


/**
 * ACTION TYPES
 */
const GET_QUESTION = 'GET_QUESTION'
const CREATE_QUESTION = 'CREATE_QUESTION'
const EDIT_QUESTION = 'EDIT_QUESTION'
const DELETE_QUESTION = 'DELETE_QUESTION'

/**
 * ACTION CREATORS
 */
const getQuestion = question => ({ type: GET_QUESTION, question })
const createQuestion = question => ({ type: CREATE_QUESTION, question })
const editQuestion = question => ({ type: EDIT_QUESTION, question })
const deleteQuestion = question => ({ type: DELETE_QUESTION, question })

/**
 * THUNK CREATORS
 */
export const fetchQuestion = questionId =>
  dispatch =>
    axios.get(`/api/questions/${questionId}`)
      .then(res => dispatch(getQuestion(res.data)))
      .catch(err => console.log(err))

export const makeQuestion = question =>
  dispatch =>
    axios.post('/api/questions/', question)
      .then(res => dispatch(createQuestion(res.data)))
      .catch(err => console.log(err))

export const changeQuestion = question =>
  dispatch => {
    axios.put(`/api/questions/${question.id}`, question)
      .then(res => dispatch(editQuestion(res.data)))
      .catch(err => console.log(err)) }

export const removeQuestion = questionId =>
  dispatch =>
    axios.delete(`/api/questions/${questionId}`)
      .then(res => dispatch(deleteQuestion(res.data)))
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default (state = {}, action) => {
  switch (action.type) {

    case GET_QUESTION:
    case CREATE_QUESTION:
    case EDIT_QUESTION:
      return action.question

    case DELETE_QUESTION:
    default:
      return state
  }

}
