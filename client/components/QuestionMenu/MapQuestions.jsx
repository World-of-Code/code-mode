'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { setQuestion } from '../../store'
//import react-semantic-ui?


const MapQuestions = props => {
  const sortedQuestions = props.questions && props.questions.sort((q1, q2) => q1.id - q2.id)

  return (
    <div className="columns">
    {
      props.questions &&
      sortedQuestions.map(question => (
        <div key={ question.id } className="column">
          <button onClick={ () => props.setQuestion(question) }>
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
