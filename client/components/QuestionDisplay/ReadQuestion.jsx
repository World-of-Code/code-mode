'use strict'

import React from 'react'
import { fetchQuestion } from '../../store'


const ReadQuestion = props => (
  <div>

    {/* configure layout */}
    {/* if questions dont exist do something */}

    { props.question.content }
  </div>
)


export default ReadQuestion
