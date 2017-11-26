const QUESTIONS_ALIAS = 'QUESTIONS_ALIAS'

import { fetchQuestions } from './questions/'

const uggh = originalAction => {
    return (dispatch, getState) => {
        fetchQuestions(dispatch)
    }
}

export default {QUESTIONS_ALIAS: uggh}