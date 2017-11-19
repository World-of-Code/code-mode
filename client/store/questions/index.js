'use strict'

import axios from 'axios'


/**
 * ACTION TYPES
 */
const GET_QUESTIONS = 'GET_QUESTIONS'

/**
 * ACTION CREATORS
 */
export const getQuestions = questions => ({ type: GET_QUESTIONS, questions })

/**
 * THUNK CREATORS
 */
export const fetchQuestions = url =>
  dispatch =>
    axios.get('/api/questions/', url)
      .then(res => dispatch(getQuestions(res.data)))
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function(state = [], action) {
  switch (action.type) {

    case GET_QUESTIONS:
      return action.questions

    default:
      return state
  }

}
