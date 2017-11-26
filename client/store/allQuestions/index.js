'use strict'

import axios from 'axios'


/**
 * ACTION TYPES
 */
const GET_ALL_QUESTIONS = 'GET_ALL_QUESTIONS'

/**
 * ACTION CREATORS
 */
export const getAllQuestions = questions => ({ type: GET_QUESTIONS, questions })

/**
 * THUNK CREATORS
 */
export const fetchAllQuestions = url =>
  dispatch =>
    axios.get('/api/questions/', url)
      .then(res => dispatch(getAllQuestions(res.data.filter(question => question.url === url))))
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function(state = [], action) {
  switch (action.type) {

    case GET_ALL_QUESTIONS:
      return action.questions

    default:
      return state
  }

}
