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

  handleChange (event) {
    this.setState({ content: event.target.value })
  }

  render () {
    return (
      <form className="ui reply form">
        <textarea
          type="text"
          className="field"
          value={ this.state.content }
          name="content"
          onChange={ this.handleChange }
        />
      </form>
    )
  }

}


export default QuestionForm
