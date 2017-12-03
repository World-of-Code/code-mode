'use strict'

import React from 'react'


const ReadQuestion = props => (
  <div className="question-display question-container">
    { props.question && props.question.content }
  </div>
)


export default ReadQuestion
