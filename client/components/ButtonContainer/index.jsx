'use strict'

import React from 'react'

import MapButtons from './MapButtons'


// Renders different states based on button clicked
const ButtonContainer = props => {
  console.log('BUTTON CONTAINER ACTION: ', props.action)

  return(
  <div>
    <MapButtons setStateInDrawer={ props.setStateInDrawer } />
  </div>
)}


export default ButtonContainer
