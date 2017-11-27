'use strict'

import React from 'react'
import App from './example'

const Repl = (props) => (
  <div>
    {console.log('container render')}
    <App question={props.question} boilerplate={props.boilerplate} />
  </div>
)
export default Repl
