'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReadQuestion from './ReadQuestion'
import QuestionForm from './QuestionForm'
import { fetchQuestion, addQuestion, editQuestion } from '../../store'


// ContentManagementButton should choose view here
class QuestionDisplay extends Component {
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
          action={ this.props.addQuestion }
        />

        {/* Edit Question */}
        <QuestionForm
          question={ this.props.question }
          action={ this.props.editQuestion }
        />

      </div>
    )
  }

}

const mapDispatchToProps = dispatch => ({
  fetchQuestion: id => dispatch(fetchQuestion(id)),
  addQuestion: question => dispatch(addQuestion(question)),
  editQuestion: question => dispatch(editQuestion(question))
})

export default connect(null, mapDispatchToProps)(QuestionDisplay)



// if (this.props.whatever) {
//   <QuestionForm props={props.somekindofprops} />
// }
