'use strict'

import React from 'react'
import { fetchQuestion } from '../../store'


const ReadQuestion = props => (
  <div>
    {props.question && props.question.content}
    {/* configure layout */}
    {/* if questions dont exist do something */}

    { /*{ props.content }*/}
  </div>
)

export default ReadQuestion
