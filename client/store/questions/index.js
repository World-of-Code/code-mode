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


export const fetchQuestions = () => 
  dispatch => 
    axios.get('http://localhost:8080/api/questions')
      .then(res => dispatch(getQuestions(res.data)))
      .catch(err => console.log(err))

// fetch questions by url  -- incorporate later 

// export const fetchQuestions = url =>
//   dispatch =>
//     axios.get('/api/questions/', url)
//       .then(res => dispatch(getQuestions(res.data.filter(question => question.url === url))))
//       .catch(err => console.log(err))

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
