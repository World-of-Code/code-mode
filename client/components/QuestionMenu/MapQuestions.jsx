'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import history from '../../history'
import { fetchQuestions } from '../../store'
//import react-semantic-ui?


class MapQuestions extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount () {
    this.props.fetchQuestions(this.props.location[0]) // whatever the url is here
  }

  render() {
    const sortedQuestions = this.props.questions.sort((q1, q2) => q1.id - q2.id)
    return (
      <div>
      { this.props.questions &&
        sortedQuestions.map(question => (
          <div key={ question.id }>
          <button onClick={() => this.props.handleClick(question, question.boilerplate)}>Question { question.id }</button>
            <div className="content">
              <div className="metadata">
                 {/* <Rating
                  icon="star"
                  defaultRating={ question.rating }
                  maxRating={ 5 }
                  disabled
                 /> */}
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
  questions: state.questions,
  location: state.location
})

const mapDispatchToProps = dispatch => ({
  fetchQuestions: url => dispatch(fetchQuestions(url))
})


export default connect(mapStateToProps, mapDispatchToProps)(MapQuestions)

//

