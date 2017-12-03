'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import AceEditor from '../Repl/src/ace.jsx'
import 'brace/mode/jsx'
import 'brace/ext/language_tools'
import 'brace/ext/searchbox'
import { saveQuestion, submitQuestion } from '../../store'


const languages= ['javascript']
const themes = ['monokai']

languages.forEach(lang => {
  require(`brace/mode/${lang}`)
  require(`brace/snippets/${lang}`)
})

themes.forEach(theme => require(`brace/theme/${theme}`))


class QuestionForm extends Component {
  constructor (props) {
    super(props)
    this.state = this.props.question ? {
      description: this.props.question.description,
      content: this.props.question.content,
      answer: this.props.question.answer,
      boilerplate: this.props.question.boilerplate,
      userId: this.props.user.id,
      locationId: this.props.location.id,
      id: this.props.question.id,
      theme: 'monokai',
      mode: 'javascript'
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
  }

  handleDescriptionChange (event) {
    this.setState({ description: event.target.value })
  }

  handleContentChange (event) {
    this.setState({ content: event.target.value })
  }

  handleBoilerplateChange (value) {
    this.setState({ boilerplate: value })
  }

  handleAnswerChange (value) {
    this.setState({ answer: value })
  }

  render () {
    const { action, question, clearStateInDrawer } = this.props
    const { description, content, boilerplate, answer } = this.state

    action && (
      action(this.state),
      clearStateInDrawer()
    )

    return (
      <form>
        <div className="column">
          <div className="pad-left-more">
            <h4 className="drawer-subheaders">> Question Title</h4>
            <input
              type="text"
              value={ description }
              name="description"
              className="form-input"
              onChange={ this.handleDescriptionChange }
            />
          </div>
          <div className="pad-left-more">
            <h4 className="drawer-subheaders">> Question Body</h4>
            <textarea
              type="text"
              value={ content }
              name="content"
              className="form-text"
              onChange={ this.handleContentChange }
            />
          </div>
        </div>
        <div className='repl columns' >
          <div className='column'>
            <h2 className='drawer-subheaders'>> Boilerplate</h2>
            <AceEditor
              mode = {this.state.mode}
              theme = {this.state.theme}
              value={ boilerplate }
              name="content"
              onChange={ this.handleBoilerplateChange }
            />
          </div>
          <div className='column'>
            <h2 className='drawer-subheaders'>> Solution</h2>
            <AceEditor
              mode = {this.state.mode}
              theme = {this.state.theme}
              value={ answer }
              name="content"
              onChange={ this.handleAnswerChange }
            />
          </div>
        </div>
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
