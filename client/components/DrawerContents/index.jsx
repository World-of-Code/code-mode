'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchLocation, fetchAllQuestions, setQuestion, getMode } from '../../store'
import { Repl, QuestionDisplay, QuestionMenu, ButtonContainer } from '../'


class DrawerContents extends Component{
  constructor(props){
    super(props)
    this.state={
      oldUrl: "",
      urlNew: true,
      questions: []
    }
  }

  componentDidMount () {
  
    chrome.storage.onChanged.addListener(changes => { 
      let url = changes['url']
      if (url && url.newValue !== this.state.oldUrl) {
        this.setState({oldUrl: url})
        window.location.reload();
      }
    })
  
    setInterval(()=>{
      chrome.storage.local.set({ url: window.location.href }) //add url ---- key: url and key's value: window.location.href
    },1000);
//______________________________________________________________________________________
    this.props.fetchLocation(window.location.href)
      .then(url => {
        if (url){
         // console.log("rufgthuefrgu",url.location.url)
          return this.props.fetchAllQuestions(url.location.id)
        }
      })
      .then(questions => {
        if (questions) {
          const sortedQuestions = questions.questions.slice().sort((q1, q2) => q1.id - q2.id)
          return this.props.setQuestion(sortedQuestions[0])
        }
      })
      .catch(err => console.log(err))
    this.props.getMode()
  }

  render () {
    return (
      <div>
      {
        this.props.location &&
        <ButtonContainer />
      }
      {
        this.props.allQuestions &&
        <div>
          <QuestionMenu questions={ this.props.allQuestions } />
          <QuestionDisplay question={ this.props.question } />
        </div>
      }
      <Repl />
    </div> 
    )
  }

}

const mapStateToProps = state => ({
  location: state.location,
  allQuestions: state.allQuestions,
  question: state.question,
  mode: state.mode
})

const mapDispatchToProps = dispatch => ({
  fetchLocation: url => dispatch(fetchLocation(url)),
  fetchAllQuestions: url => dispatch(fetchAllQuestions(url)),
  setQuestion: question => dispatch(setQuestion(question)),
  getMode: () => dispatch(getMode())
})


export default connect(mapStateToProps, mapDispatchToProps)(DrawerContents)
