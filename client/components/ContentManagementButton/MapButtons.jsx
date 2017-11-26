'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMode, addQuestion, editQuestion, clearQuestion } from '../../store'
//import react-semantic-ui?


class MapQuestions extends Component {
  componentDidMount () {
    this.props.getMode()
  }

  handleClick (type) {
    const action = `${type}Question`

    this.props.setMode(type)
    // trigger view to start
    this.props.action(this.props.question)

    // when everything is rendered, use readMode by default
    // based on button clicked use different thunk
      // setQuestion, getQuestion, addQuestion, editQuestion, clearQuestion
      //addQuestion vs submitQuestion

      // AddButton = addQuestion ***SWAP WITH SUBMIT***
      // CancelButton = cancelQuestion
      // ClearButton = clearQuestion
      // DeleteButton = deleteQuestion
      // EditButton = editQuestion
      // SubmitButton = submitQuestion ***SWAP WITH ADD***
  }

  render () {
    return (
      this.props.mode &&
        this.props.mode.buttons.map(button => (
          <div key={ button.name }>
            <button
              type="submit"
              className={`mini ui button ${button.name}`}
              style={ { margin: '0 0 0.5em 0' } }
              onClick={ () => this.handleClick(button.name) }
            >
              { button.name }
            </button>
          </div>
        ))
    )
  }

}

const mapStateToProps = state => ({
  mode: state.mode,
  question: state.question
})

const mapDispatchToProps = dispatch => ({
  setMode: () => dispatch(setmode())
})


export default connect(mapStateToProps, mapDispatchToProps)(MapQuestions)
