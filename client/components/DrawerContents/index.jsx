'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Repl, QuestionDisplay, QuestionMenu } from '../'

class DrawerContents extends Component{
    constructor(props){
        super(props)
        this.state = {
            question: {},
            boilerplate: ''
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick (question, boilerplate) {
        this.setState({ question, boilerplate })
    }

    render () {
        return (
            <div>
                <QuestionMenu handleClick={this.handleClick} />
                <QuestionDisplay question={this.state.question} />
                <Repl question={this.state.question} boilerplate={this.state.boilerplate} />
            </div>
        )
    }
}
export default DrawerContents



