'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


/**
 * COMPONENT
 */
export const UserHome = props => {
  const { email } = props

  return (
    <div>
      <h3>Welcome, { email }</h3>
    </div>
  )

}

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
