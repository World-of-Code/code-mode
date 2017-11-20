'use strict'

import React, { Component } from 'react'
//import react-semantic-ui?


class QuestionForm extends Component {
  constructor (props) {
    super(props)
    this.state = this.props.content ? { content: this.props.content } : {}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ content: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.action(this.state.content)
  }

  render () {
    return (
      <form onSubmit={ this.handleSubmit } className="ui reply form">
        <textarea
          type="text"
          className="field"
          value={ this.state.content }
          name="content"
          onChange={ this.handleChange }
        />
        <button
          type="submit"
          className="ui blue labeled submit icon button"
          style={{ margin: '0.5em' }}
        >
          Edit Review
        </button>
      </form>
    )
  }

}


export default QuestionForm
