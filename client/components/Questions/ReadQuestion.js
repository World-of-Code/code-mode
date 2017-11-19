'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { fetchQuestion } from '../../store'


const ReadQuestion = () => (
  <div>
    Read Only View of Question
  </div>
)

const mapStateToProps = state => ({
  question: state.question
})

const mapDispatchToProps = dispatch => ({
  fetchQuestion: id => dispatch(fetchQuestion(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(ReadQuestion)
