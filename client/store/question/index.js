'use strict'

import axios from 'axios'
import { BACK_END, setModeRead, setModeAdd, setModeEdit } from '../../store'


/**
 * ACTION TYPES
 */
const SET_QUESTION = 'SET_QUESTION'
const GET_QUESTION = 'GET_QUESTION'
const NEW_QUESTION = 'NEW_QUESTION'
const CHANGE_QUESTION = 'CHANGE_QUESTION'
const CREATE_QUESTION = 'CREATE_QUESTION'

/**
 * ACTION CREATORS
 */
export const setQuestion = question => ({ type: SET_QUESTION, question })
export const getQuestion = () => ({ type: GET_QUESTION })
const newQuestion = () => ({ type: NEW_QUESTION })
const changeQuestion = question => ({ type: CHANGE_QUESTION, question })
const createQuestion = question => ({ type: CREATE_QUESTION, question })

/**
 * THUNK CREATORS
 */
export const addQuestion = () =>
  dispatch => {
    dispatch(newQuestion())
    dispatch(setModeAdd())
  }

export const editQuestion = question =>
  dispatch => {
    dispatch(changeQuestion(question))
    dispatch(setModeEdit())
  }

export const cancelQuestion = question =>
  dispatch => {
    dispatch(getQuestion(question))
    dispatch(setModeRead())
  }

export const saveQuestion = question =>
  dispatch =>
    axios.put(`${BACK_END}/api/questions/${question.id}`, question)
      .then(res => dispatch(editQuestion(res.data)))
      .then(() => dispatch(setModeRead()))
      .catch(err => console.log(err))

// ready next question, delete previous, switch the state to the next
export const deleteQuestion = (question, questions) =>
  dispatch => {
    const sortedQuestions = questions.sort((q1, q2) => q1.id - q2.id)
    const questionIndex = sortedQuestions.indexOf(question)
    const nextQuestion = sortedQuestions[questionIndex + 1]
                       ? sortedQuestions[questionIndex + 1]
                       : sortedQuestions[questionIndex - 1]
    console.log('sorted', sortedQuestions, 'index', questionIndex, 'next', nextQuestion)
    axios.delete(`${BACK_END}/api/questions/${question.id}`)
      .then(() => nextQuestion ? dispatch(setQuestion(nextQuestion)) : dispatch(setQuestion({}))
    )
      .then(() => dispatch(setModeRead()))
      .catch(err => console.log(err))
  }

export const clearQuestion = question =>
  dispatch =>
    axios.get(`${BACK_END}/api/questions/${question.id}`)
      .then(res => dispatch(getQuestion(res.data)))
      .then(() => dispatch(setModeRead()))
      .catch(err => console.log(err))

export const submitQuestion = question =>
  dispatch =>
    axios.post(`${BACK_END}/api/questions/`, question)
      .then(res => dispatch(createQuestion(res.data)))
      .then(() => dispatch(setModeRead()))
      .catch(err => console.log(err))

export const sendQuestion = question =>
  dispatch //=>
    // send to content creator

/**
 * REDUCER
 */
export default (state = {}, action) => {
  switch (action.type) {

    case SET_QUESTION:
    case CREATE_QUESTION:
    case CHANGE_QUESTION:
      return action.question

    case NEW_QUESTION:
      return {}

    case GET_QUESTION:
      return state

    default:
      return state
  }

}
