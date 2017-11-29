'use strict'

import React, { Component } from 'react'
import ReadQuestion from './ReadQuestion'
import QuestionForm from './QuestionForm'


// Mapped Button should choose view here
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

export default QuestionDisplay



// if (this.props.whatever) {
//   <QuestionForm props={props.somekindofprops} />
// }
