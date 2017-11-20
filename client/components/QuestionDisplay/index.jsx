'use strict'

import React from 'react'
import ReadQuestion from './ReadQuestion'
import AddQuestion from './AddQuestion'
import EditQuestion from './EditQuestion'
import { fetchQuestion } from '../../store'


const QuestionDisplay = props => (
  <div>
    {/* conditionally render question, edit form, or clean form */}
  </div>
)

const mapStateToProps = state => ({
  question: state.question
})

const mapDispatchToProps = dispatch => ({
  fetchQuestion: id => dispatch(fetchQuestion(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(QuestionDisplay)



{ review.user.id === this.props.user.id ? (
  <div className="ui buttons">
    <EditReviewButton
      review={ review }
      handleClick={ this.handleClick }
      editId={ this.editId }
    />
    <DeleteReviewButton reviewId={ review.id } />
  </div>
) : (
  ''
) }

) : (
  <div>
    <EditReviewForm review={ review } handleClick={ this.handleClick } />
  </div>
) }
