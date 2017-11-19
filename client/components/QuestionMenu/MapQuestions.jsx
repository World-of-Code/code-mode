'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import history from '../history'
//import react-semantic-ui?


class MapQuestions extends Component { // is class necessary?
  render() {
    const sortedQuestions = this.props.questions.sort((q1, q2) => q1.id - q2.id)

    return (
      <div>
        { this.props.questions &&
          sortedQuestions.map(question => (
            <div key={ question.id }>
              <div className="content">
                <div className="metadata">
                  <Rating
                    icon="star"
                    defaultRating={ question.rating }
                    maxRating={ 5 }
                    disabled
                  />
                </div>
                <div className="text">{ /* virtual field for snippet */ }</div>
              </div>
            </div>
          ))
        }
      </div>
    )
  }

}

const mapStateToProps = state => ({
  questions: state.questions
})

export default connect(mapStateToProps, mapoDispatchToProps)(MapQuestions)
