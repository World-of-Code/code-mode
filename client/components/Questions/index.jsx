'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'

import ReadQuestion from './ReadQuestion'
import AddQuestion from './AddQuestion'
import EditQuestion from './EditQuestion'
import { fetchQuestions } from '../../store'


class Questions extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        Container for Questions
      </div>
    )
  }

}

const mapStateToProps = state => ({
  questions: state.questions
})

const mapDispatchToProps = dispatch => ({
  fetchQuestions: url => dispatch(fetchQuestions(url))
})   // this.props.match.params.url ?????


export default connect(mapStateToProps, mapDispatchToProps)(Questions)
