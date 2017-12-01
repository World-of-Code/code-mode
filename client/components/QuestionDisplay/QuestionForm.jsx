'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveQuestion, submitQuestion } from '../../store'


class QuestionForm extends Component {
  constructor (props) {
    super(props)
    this.state = this.props.content ? {
      description: this.props.question.description,
      content: this.props.question.content,
      answer: this.props.question.answer,
      boilerplate: this.props.question.boilerplate,
      userId: this.props.user.id,
      locationId: this.props.location.id
    } : {
      description: ``,
      content: ``,
      boilerplate: ``,
      answer: ``,
      userId: this.props.user.id,
      locationId: this.props.location.id
    }
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleContentChange = this.handleContentChange.bind(this)
    this.handleBoilerplateChange = this.handleBoilerplateChange.bind(this)
    this.handleAnswerChange = this.handleAnswerChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleDescriptionChange (event) {
    this.setState({ description: event.target.value })
  }

  handleContentChange (event) {
    this.setState({ content: event.target.value })
  }

  handleBoilerplateChange (event) {
    this.setState({ boilerplate: event.target.value })
  }

  handleAnswerChange (event) {
    this.setState({ answer: event.target.value })
  }

  render () {
    const { action } = this.props
    const { description, content, boilerplate, answer } = this.state

    action && action(this.state)

    console.log('QUESTION FORM ACTION: ', action)
    console.log('QUESTION FORM STATE: ', this.state, ' USERID: ', this.props.user.id, ' LOCATIONID: ', location.id)

    return (
      <form>
        Question Name: <input
          type="text"
          value={ description }
          name="description"
          onChange={ this.handleDescriptionChange }
        />
        Question Content: <textarea
          type="text"
          value={ content }
          name="content"
          onChange={ this.handleContentChange }
        />
        Boilerplate: <textarea
          type="text"
          value={ boilerplate }
          name="content"
          onChange={ this.handleBoilerplateChange }
        />
        Question Answer: <textarea
          type="text"
          value={ answer }
          name="content"
          onChange={ this.handleAnswerChange }
        />
      </form>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  location: state.location
})

const mapDispatchToProps = dispatch => ({
  saveQuestion: question => dispatch(saveQuestion(question)),
  submitQuestion: question => dispatch(submitQuestion(question))
})


export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm)
