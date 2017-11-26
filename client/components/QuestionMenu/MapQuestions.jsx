'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllQuestions, setQuestion } from '../../store'
//import react-semantic-ui?


class MapQuestions extends Component {
  componentDidMount () {
    this.props.fetchAllQuestions(this.props.location)
  }

  render () {
    const sortedQuestions = this.props.questions.sort((q1, q2) => q1.id - q2.id)

    return (
      this.props.questions &&
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

}

const mapStateToProps = state => ({
  questions: state.questions
})

const mapDispatchToProps = dispatch => ({
  fetchAllQuestions: url => dispatch(fetchAllQuestions(url)),
  setQuestion: question => dispatch(setQuestion(question))
})


export default connect(mapStateToProps, mapDispatchToProps)(MapQuestions)
