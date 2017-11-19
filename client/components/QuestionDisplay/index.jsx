'use strict'

import React from 'react'
import ReadQuestion from './ReadQuestion'
import AddQuestion from './AddQuestion'
import EditQuestion from './EditQuestion'


const QuestionDisplay = props => (
  <div>
    {/* conditionally render question, edit form, or clean form */}
  </div>
)


export default QuestionDisplay


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
