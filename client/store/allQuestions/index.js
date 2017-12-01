'use strict'

import axios from 'axios'
import { BACK_END } from '../../store'


/**
 * ACTION TYPES
 */
const SET_ALL_QUESTIONS = 'SET_ALL_QUESTIONS'

/**
 * ACTION CREATORS
 */
const setAllQuestions = questions => ({ type: SET_ALL_QUESTIONS, questions })

/**
 * THUNK CREATORS
 */
export const fetchAllQuestions = urlId =>
  dispatch =>
    axios.get(`${BACK_END}/api/questions/locations/${urlId}`)
      .then(res => dispatch(setAllQuestions(res.data)))
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function(state = [], action) {
  switch (action.type) {

    case SET_ALL_QUESTIONS:
      return action.questions

    default:
      return state
  }

}
