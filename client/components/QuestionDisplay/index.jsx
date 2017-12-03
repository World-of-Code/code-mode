'use strict'

import React from 'react'
import { connect } from 'react-redux'
import ReadQuestion from './ReadQuestion'
import QuestionForm from './QuestionForm'


// Mapped Button should choose view here
const QuestionDisplay = props => {
  const { mode } = props
  const questionContainer = mode && mode.type === 'Read' ? 'question-container' : ''

  return (
    <div className={ `pad ${questionContainer}` }>
      {
        mode && mode.type === 'Read' &&
        <ReadQuestion question={ props.question } />
      } {
        mode && mode.type === 'Add' &&
        <QuestionForm
          action={ props.action }
          clearStateInDrawer={ props.clearStateInDrawer }
        />
      } {
        mode && mode.type === 'Edit' &&
        <QuestionForm
          question={ props.question }
          action={ props.action }
          clearStateInDrawer={ props.clearStateInDrawer }
        />
      }
    </div>
  )
}

const mapStateToProps = state => ({
  mode: state.mode
})


export default connect(mapStateToProps)(QuestionDisplay)
