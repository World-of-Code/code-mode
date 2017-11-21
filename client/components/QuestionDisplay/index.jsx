'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReadQuestion from './ReadQuestion'
import QuestionForm from './QuestionForm'
import { fetchQuestion, makeQuestion, changeQuestion } from '../../store'


// ContentManagementButton should choose view here
class QuestionDisplay extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        {/* configure layout */}

        {/* Read Question */}
        <ReadQuestion
          question={ this.props.question }
        />

        {/* Add Question */}
        <QuestionForm
          action={ this.props.makeQuestion }
        />

        {/* Edit Question */}
        <QuestionForm
          question={ this.props.question }
          action={ this.props.changeQuestion }
        />

      </div>
    )
  }

}


const mapDispatchToProps = dispatch => ({
  fetchQuestion: id => dispatch(fetchQuestion(id)),
  makeQuestion: question => dispatch(makeQuestion(question)),
  changeQuestion: question => dispatch(changeQuestion(question))
})


export default connect(null, mapDispatchToProps)(QuestionDisplay)
