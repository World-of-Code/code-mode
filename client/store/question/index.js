'use strict'

import axios from 'axios'


/**
 * ACTION TYPES
 */
const GET_QUESTION = 'GET_QUESTION'
const CREATE_QUESTION = 'CREATE_QUESTION'
const EDIT_QUESTION = 'EDIT_QUESTION'
const CLEAR_QUESTION = 'CLEAR_QUESTION'

/**
 * ACTION CREATORS
 */
const getQuestion = question => ({ type: GET_QUESTION, question })
const createQuestion = question => ({ type: CREATE_QUESTION, question })
const editQuestion = question => ({ type: EDIT_QUESTION, question })
const clearQuestion = () => ({ type: CLEAR_QUESTION })

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

// find next question, delete previous, switch the state to the next
export const removeQuestion = question =>
  dispatch =>
    axios.get('/api/questions/')
      .then(questions => {
        const sortedQuestions = questions.sort((q1, q2) => q1.id - q2.id)
        const questionIndex = sortedQuestions[sortedQuestions.indexOf(question.id)]
        return sortedQuestions[questionIndex + 1]
             ? sortedQuestions[questionIndex + 1]
             : sortedQuestions[questionIndex - 1]
      })
      .then(nextQuestionId => {
        axios.delete(`/api/questions/${question.id}`)
        return nextQuestionId ? fetchQuestion(nextQuestionId) : null
      })
      .catch(err => console.log(err))

export const eraseQuestion = () =>
  dispatch => {
      dispatch(clearQuestion())
      .catch(err => console.log(err)) }

/**
 * REDUCER
 */
export default (state = {}, action) => {
  switch (action.type) {

    case GET_QUESTION:
    case CREATE_QUESTION:
    case EDIT_QUESTION:
      return action.question

    case CLEAR_QUESTION:
    default:
      return state
  }

}
