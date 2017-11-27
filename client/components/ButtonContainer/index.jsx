'use strict'

import React from 'react'

import MapButtons from './MapButtons'


// Renders different states based on button clicked
const ButtonContainer = props => (
  <div>
    {/* default: add, creator( edit, delete (only if exists) ) */}

    <MapButtons questions={ props.questions } />

  </div>
)


export default ButtonContainer
