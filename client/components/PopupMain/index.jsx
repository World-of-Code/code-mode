import { UserHome, Login, Signup } from '../'
import { me } from '../../store'
import React, { Component } from 'react'
import { connect } from 'react-redux'

/**
 * COMPONENT
 */
class PopupMain extends Component {
  componentDidMount () {
    this.props.loadInitialData()
  }

  render () {
    const { isLoggedIn } = this.props
    return (
        <div>
        {
            isLoggedIn ? <UserHome /> : 
            <div>
                <Login />
                <Signup />
            </div>
        }
        </div>
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

export default connect(mapState, mapDispatch)(PopupMain)
