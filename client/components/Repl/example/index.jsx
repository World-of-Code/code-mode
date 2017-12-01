'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { render } from 'react-dom'
import AceEditor from '../src/ace.jsx'
import 'brace/mode/jsx'
import { fetchInput, postInput, getQuestion } from '../../../store'

const debounce = require('lodash.debounce')
const languages= ['javascript']
const themes = ['monokai']

import '../../../../public/style/bulma.css';
import '../../../../public/style/drawer-contents.css';

languages.forEach(lang => {
  require(`brace/mode/${lang}`)
  require(`brace/snippets/${lang}`)
})

themes.forEach(theme => require(`brace/theme/${theme}`))

/*eslint-disable no-alert, no-console */
import 'brace/ext/language_tools'
import 'brace/ext/searchbox'


class App extends Component {
  onChange (newValue) {
    this.setState({ value: newValue })
    //this.setChromeStorage()
    debounce(this.setChromeStorage,1000)() // 1sec
  }

  setFontSize (e) {
    this.setState({ fontSize: parseInt(e.target.value,10) })
  }

  setFontSize (e) {
    this.setState({ fontSize: parseInt(e.target.value,10) })
  }

  constructor(props) {
    super(props)
    this.state = {
      value: '',
      theme: 'monokai',
      mode: 'javascript',
      enableBasicAutocompletion: false,
      enableLiveAutocompletion: false,
      fontSize: 14,
      showGutter: true,
      showPrintMargin: true,
      highlightActiveLine: true,
      enableSnippets: false,
      showLineNumbers: true,
      result: ''
    }
    this.onChange = this.onChange.bind(this)
    this.setFontSize = this.setFontSize.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.setChromeStorage = this.setChromeStorage.bind(this)
    this.getChromeStorage = this.getChromeStorage.bind(this)
  }

  handleClick (event) {
    event.preventDefault()
    let value = this.state.value
    this.setState({ result: !eval(value) ? 'undefined' : eval(value).toString() })
    if (this.state.value.includes('console.log')) {
      let newValue = this.state.value.replace(/console.log/g, 'return')
      let value = newValue
      this.setState({ result: !eval(value) ? 'undefined' : eval(value).toString() })
    }
  }

  handleClear (event) {
    event.preventDefault()
    this.setState({
      value: '',
      result: ''
    })
  }

  getChromeStorage () {
    chrome.storage.local.get('userInput', obj => {
      this.setState({ value: obj.userInput })
    })
  }

  getChromeStorage () {
    chrome.storage.local.get('userInput', obj => {
      this.setState({ value: obj.userInput })
    })
  }

  setChromeStorage(){
    chrome.storage.local.set({ 'userInput': this.state.value })
  }

  componentDidMount () {
    this.props.getQuestion()
    this.getChromeStorage()
  }

  componentWillReceiveProps (nextProps) {
    let question = this.props.question
    if (question && question.boilerplate !== nextProps.question.boilerplate) {
      this.setState({ value: nextProps.question.boilerplate })
    }
  }

  render() {
    return (
      <div className="repl">
        <div className="buttons-section">
          <button onClick={ this.handleClick }>Run</button>
          <button onClick={this.handleClear}>Clear</button>
        </div>
        <div className="columns">
          <div className="column">
            <h2 className="drawer-subheaders">Editor</h2>
            <AceEditor
              mode={ this.state.mode }
              theme={ this.state.theme }
              name="editor"
              onChange={ this.onChange }
              value = { this.state.value }
              fontSize={ this.state.fontSize }
              showPrintMargin={ this.state.showPrintMargin }
              showGutter={ this.state.showGutter }
              highlightActiveLine={ this.state.highlightActiveLine }
              setOptions={{
                enableBasicAutocompletion: this.state.enableBasicAutocompletion,
                enableLiveAutocompletion: this.state.enableLiveAutocompletion,
                enableSnippets: this.state.enableSnippets,
                showLineNumbers: this.state.showLineNumbers,
                tabSize: 2,
              }}
            />
          </div>
          <div className="column">
          <h2 className="drawer-subheaders">Code</h2>
          <AceEditor
            mode={this.state.mode}
            theme={this.state.theme}
            name="code"
            readOnly={ true }
            value={this.state.result}
            fontSize={this.state.fontSize}
            showPrintMargin={this.state.showPrintMargin}
            // showGutter={this.state.showGutter}
            />
          </div>
        { // temporarily hide this for F&F demo night
          // <div className="column">
          //   <h2 className="drawer-subheaders">Tests</h2>
          //   <AceEditor
          //     mode="jsx"
          //     theme="monokai"
          //     readOnly={true}
          //     value={this.state.result}
          //   />
          // </div>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  question: state.question,
  users: state.users
})

const mapDispatchToProps = dispatch => ({
  getQuestion: () => dispatch(getQuestion())
})


export default connect(mapStateToProps, mapDispatchToProps)(App)


// const languages = [
//   'javascript',
//   'java',
//   'python',
//   'xml',
//   'ruby',
//   'sass',
//   'markdown',
//   'mysql',
//   'json',
//   'html',
//   'handlebars',
//   'golang',
//   'csharp',
//   'elixir',
//   'typescript',
//   'css'
// ]

// const themes = [
//   'monokai',
//   'github',
//   'tomorrow',
//   'kuroir',
//   'twilight',
//   'xcode',
//   'textmate',
//   'solarized_dark',
//   'solarized_light',
//   'terminal',
// ]
