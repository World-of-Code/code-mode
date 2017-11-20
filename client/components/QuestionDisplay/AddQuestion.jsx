'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionForm from './QuestionForm'
import { makeQuestion } from '../../store'


const AddQuestion = props => (
  <QuestionForm action={ props.makeQuestion } />
)

const mapDispatchToProps = dispatch => ({
  makeQuestion: question => dispatch(makeQuestion(question))
})


export default connect(null, mapDispatchToProps)(AddQuestion)
