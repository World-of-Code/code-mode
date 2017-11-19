'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createQuestion } from '../../store'


class AddQuestion extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        Add Question Form
      </div>
    )
  }

}

const mapStateToProps = state => ({
  question: state.question
})

const mapDispatchToProps = dispatch => ({
  createQuestion: question => dispatch(createQuestion(question))
})


export default connect(mapStateToProps, mapDispatchToProps)(AddQuestion)
