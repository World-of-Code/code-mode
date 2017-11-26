'use strict'

import React from 'react'
import MapQuestions from './MapQuestions'


const QuestionMenu = props => {
  return (
    <div>
      {/* container to format mapped questions */}
      <MapQuestions location={ props.location } />
    </div>
  )
}


export default QuestionMenu
