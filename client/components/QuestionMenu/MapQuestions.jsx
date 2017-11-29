'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { setQuestion } from '../../store'
//import react-semantic-ui?


<<<<<<< HEAD
const MapQuestions = props => {
  const sortedQuestions = props.questions && props.questions.sort((q1, q2) => q1.id - q2.id)

  return (
    props.questions &&
      sortedQuestions.map(question => (
        <div key={ question.id }>
          <button onClick={ () => props.setQuestion(question) }>
              <div className="content">{ question.description }</div>
=======
class MapQuestions extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount () {
    this.props.fetchQuestions() // whatever the url is here

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
>>>>>>> master
              <div className="metadata">
                {/* <Rating
                      icon="star"
                      defaultRating={ question.rating }
                      maxRating={ 5 }
                      disabled
                /> */}
              </div>
<<<<<<< HEAD
          </button>
        </div>
    ))
  )
=======
              <div className="text">{ /* virtual field for snippet */ }</div>
            </div>
          </div>
        ))
      }
      </div>

    )
  }

>>>>>>> master
}

const mapDispatch = dispatch => ({
  setQuestion: question => dispatch(setQuestion(question))
})


export default connect(null, mapDispatch)(MapQuestions)
