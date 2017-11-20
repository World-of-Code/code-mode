'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionForm from './QuestionForm'
import { changeQuestion } from '../../store'


const EditQuestion = props => (
  <QuestionForm
    content={ props.question.content }
    action={ props.changeQuestion }
  />
)


const mapStateToProps = state => ({
  question: state.question
})

const mapDispatchToProps = dispatch => ({
  changeQuestion: question => dispatch(changeQuestion(question))
})


export default connect(mapStateToProps, mapDispatchToProps)(EditQuestion)
