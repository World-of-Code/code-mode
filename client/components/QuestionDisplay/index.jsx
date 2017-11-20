'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReadQuestion from './ReadQuestion'
import { fetchQuestion, makeQuestion, changeQuestion } from '../../store'


// ContentManagementButton should choose view here
class QuestionDisplay extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.fetchQuestion(this.props.question.id)
  }

  render () {
    return (
      <div>
        {/* configure layout */}

        {/* Read Question */}
        <ReadQuestion
          question={ props.question }
        />

        {/* Add Question */}
        <QuestionForm
          action={ props.makeQuestion }
        />

        {/* Edit Question */}
        <QuestionForm
          question={ props.question }
          action={ changeQuestion }
        />

      </div>
    )
  }

}

const mapStateToProps = state => ({
  question: state.question
})

const mapDispatchToProps = dispatch => ({
  fetchQuestion: id => dispatch(fetchQuestion(id)),
  makeQuestion: question => dispatch(makeQuestion(question)),
  changeQuestion: question => dispatch(changeQuestion(question))
})


export default connect(mapStateToProps, mapDispatchToProps)(QuestionDisplay)
