'use strict'

import axios from 'axios'


/**
 * ACTION TYPES
 */
const SET_QUESTION = 'SET_QUESTION'
const GET_QUESTION = 'GET_QUESTION'
const NEW_QUESTION = 'NEW_QUESTION'
const CHANGE_QUESTION = 'CHANGE_QUESTION'
const CLEAR_QUESTION = 'CLEAR_QUESTION'
const CREATE_QUESTION = 'CREATE_QUESTION'

/**
 * ACTION CREATORS
 */
export const setQuestion = question => ({ type: SET_QUESTION, question })
const getQuestion = question => ({ type: GET_QUESTION, question })
const newQuestion = () => ({ type: NEW_QUESTION })
const changeQuestion = question => ({ type: CHANGE_QUESTION, question })
export const clearQuestion = () => ({ type: CLEAR_QUESTION })
const createQuestion = question => ({ type: CREATE_QUESTION, question })

/**
 * THUNK CREATORS
 */
export const fetchQuestion = question =>
  dispatch =>
    axios.get(`/api/questions/${question.id}`)
      .then(res => dispatch(getQuestion(res.data)))
      .catch(err => console.log(err))

export const addQuestion = () =>
  dispatch => dispatch(newQuestion())// ???

export const editQuestion = question =>
  dispatch =>
    axios.put(`/api/questions/${question.id}`, question)
      .then(res => dispatch(changeQuestion(res.data)))
      .catch(err => console.log(err))

// find next question, delete previous, switch the state to the next
export const deleteQuestion = question =>
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

export const cancelQuestion = question =>
  dispatch =>
    axios.get(`/api/questions/${question.id}`)
      .then(res => dispatch(getQuestion(res.data)))
      .catch(err => console.log(err))

export const submitQuestion = question =>
  dispatch =>
    axios.post('/api/questions/', question)
      .then(res => dispatch(createQuestion(res.data)))
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default (state = {}, action) => {
  switch (action.type) {

    case SET_QUESTION:
    case GET_QUESTION:
    case CREATE_QUESTION:
    case EDIT_QUESTION:
      return action.question

    case CLEAR_QUESTION:
    default:
      return state
  }

}
