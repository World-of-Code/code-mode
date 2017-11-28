import { UserHome, Login, Signup } from '../'
import { me } from '../../store'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import $ from 'jquery'

/**
 * COMPONENT
 */
class PopupMain extends Component {
constructor(){
  super()
  this.state = {
    toggle: true
  }

  this.handleClick = this.handleClick.bind(this)
}

  componentDidMount () {
    this.props.loadInitialData()
  }

 handleClick () {
   console.log("toggle state", this.state.toggle)
  if(this.state.toggle === true){
    this.setState({toggle: false})
   chrome.storage.local.set({ action: 'hide' }); 
    //console.log("toggle state", this.state.toggle)
  //  chrome.management.setEnabled("fbmlhcnipimamepnadolaoblelnadblo", false)
  }
  else{
    this.setState({toggle: true})
    chrome.storage.local.set({ action: 'show' }); 
   //  console.log("toggle state", this.state.toggle)
    //chrome.management.setEnabled("fbmlhcnipimamepnadolaoblelnadblo", true);
  }
    
}

  render () {
    const { isLoggedIn } = this.props
    return (
        <div>
          <button id = "toggle" type="button" onClick={this.handleClick}>toggle popup</button>
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
