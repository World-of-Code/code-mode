'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Repl, QuestionMenu, DrawerContents } from '../'


/**
 * COMPONENT
 */
export const UserHome = props => {
  const { email } = props

  return (
    <div>
      <h3>Welcome, { email }</h3>
      <div>
        <DrawerContents />
      </div>
    </div>
  )

}

// <QuestionMenu />
// <Repl />
/**
 * CONTAINER
 */
const mapState = state => ({
  email: state.user.email
})

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}


export default connect(mapState)(UserHome)
