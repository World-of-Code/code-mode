'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editQuestion } from '../../store'


class EditQuestion extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        Edit Question Form
      </div>
    )
  }

}

const mapStateToProps = state => ({
  question: state.question
})

const mapDispatchToProps = dispatch => ({
  editQuestion: question => dispatch(editQuestion(question))
})


export default connect(mapStateToProps, mapDispatchToProps)(EditQuestion)
