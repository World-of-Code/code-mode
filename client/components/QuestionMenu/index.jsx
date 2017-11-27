'use strict'

import React from 'react'
import MapQuestions from './MapQuestions'


const QuestionMenu = props => {
  return (
    <div>
    <MapQuestions handleClick={props.handleClick} />
    </div>
  )
}
export default QuestionMenu

  
  
    