'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'
import { Main, Login, Signup, UserHome, DrawerContainer } from './components'
import { me } from './store'


/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount () {
    this.props.loadInitialData()
  }

  render () {
    const { isLoggedIn } = this.props

    return (
      <Router history={ history }>
        <Main>
          <Switch>
            <Route path="/login" component={ Login } />
            <Route path="/signup" component={Signup} />
            <Route path="/drawer" component={DrawerContainer} />
            {
              isLoggedIn &&
                <Switch>
                  <Route path="/home" component={ UserHome } />
                </Switch>
            }
            <Route component={ Login } />
          </Switch>
        </Main>
      </Router>
    )
  }

}

/**
 * CONTAINER
 */
const mapState = (state) => ({
  isLoggedIn: !!state.user.id
})

const mapDispatch = dispatch => ({
  loadInitialData: () => dispatch(me())
})


/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}


export default connect(mapState, mapDispatch)(Routes)
