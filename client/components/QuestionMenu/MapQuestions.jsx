'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { setQuestion } from '../../store'


const MapQuestions = props => {
  const sortedQuestions = props.questions && props.questions.sort((q1, q2) => q1.id - q2.id)

  return (
    <div className="row pad-left">
    {
      props.questions &&
      sortedQuestions.map(question => (
        <div className="pad-sides" key={ question.id } >
          <button
            onClick={ () => props.setQuestion(question) }
            className="question-display question-border"
          >
            <div>{ question.description }</div>
          </button>
        </div>
      ))
    }
    </div>
  )
}

const mapDispatch = dispatch => ({
  setQuestion: question => dispatch(setQuestion(question))
})


export default connect(null, mapDispatch)(MapQuestions)
