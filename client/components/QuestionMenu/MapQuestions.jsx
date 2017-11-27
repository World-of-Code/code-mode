'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setQuestion } from '../../store'
//import react-semantic-ui?


const MapQuestions = props => {
  const sortedQuestions = props.questions.sort((q1, q2) => q1.id - q2.id)

  return (
    props.questions &&
      sortedQuestions.map(question => (
        <div key={ question.id }>
          <button onClick={ () =>
            this.props.setQuestion(question)}>
              <div className="content" >{ question.description }</div>
              <div className="metadata">
                {/* <Rating
                      icon="star"
                      defaultRating={ question.rating }
                      maxRating={ 5 }
                      disabled
                /> */}
              </div>
          </button>
        </div>
    ))
  )
}

const mapDispatchToProps = dispatch => ({
  setQuestion: question => dispatch(setQuestion(question))
})


export default connect(null, mapDispatchToProps)(MapQuestions)
