'use strict'

import React from 'react'
import { connect } from 'react-redux'
import DeleteButton from './DeleteButton'
import EditButton from './EditButton'
import { fetchQuestion } from '../../store'


const ReadQuestion = () => ( // if questions dont exist do something
  <div>
    Read Only View of Question
    <EditButton questionId={ this.props.question.id } /> {/* if admin is true */}
    <DeleteButton questionId={ this.props.question } /> {/* if admin is true */}
  </div>
)

const mapStateToProps = state => ({
  question: state.question
})

const mapDispatchToProps = dispatch => ({
  fetchQuestion: id => dispatch(fetchQuestion(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(ReadQuestion)
