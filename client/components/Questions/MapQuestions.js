'use strict'

import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import history from '../history'


class MapQuestions extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div>
        Map Questions
      </div>
    )
  }

}

const mapStateToProps = state => ({
  questions: state.questions
})

export default connect(mapStateToProps, mapoDispatchToProps)(MapQuestions)
