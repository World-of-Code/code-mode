'use strict'

import React from 'react'
import MapQuestions from './MapQuestions'


const QuestionMenu = props => {
  return (
    <div className="pad">
      <h3 className="drawer-subheaders">> Questions</h3>
      <MapQuestions questions={ props.questions } location={ props.location } />
    </div>
  )
}


export default QuestionMenu
