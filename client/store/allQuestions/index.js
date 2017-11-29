'use strict'

import axios from 'axios'
import { BACK_END } from '../../store'


/**
 * ACTION TYPES
 */
const GET_ALL_QUESTIONS = 'GET_ALL_QUESTIONS'

/**
 * ACTION CREATORS
 */
export const getAllQuestions = questions => ({ type: GET_ALL_QUESTIONS, questions })

/**
 * THUNK CREATORS
 */
export const fetchAllQuestions = urlId =>
  dispatch =>
    axios.get(`${BACK_END}/api/questions/locations/${urlId}`)
      .then(res => dispatch(getAllQuestions(res.data)))
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
