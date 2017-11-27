import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchInput, postInput, fetchQuestions } from '../../../store'
import { render } from 'react-dom';
import AceEditor from '../src/ace.jsx';
import 'brace/mode/jsx';

const languages=['javascript']
const themes = ['monokai']
languages.forEach((lang) => {
  require(`brace/mode/${lang}`)
  require(`brace/snippets/${lang}`)
})

themes.forEach((theme) => {
  require(`brace/theme/${theme}`)
})
/*eslint-disable no-alert, no-console */
import 'brace/ext/language_tools';
import 'brace/ext/searchbox';

class AppClass extends Component {
  onLoad() {
    console.log('i\'ve loaded');
  }
  onChange(newValue) {
    //console.log('change', newValue);
    this.setState({
      value: newValue
    })
  }

  onSelectionChange(newValue, event) {
    //console.log('select-change', newValue);
    //console.log('select-change-event', event);
  }

  onCursorChange(newValue, event) {
    // console.log('cursor-change', newValue);
    // console.log('cursor-change-event', event);
  }

  onValidate(annotations) {
    //console.log('onValidate', annotations);
  }

  setTheme(e) {
    this.setState({
      theme: e.target.value
    })
  }
  setMode(e) {
    this.setState({
      mode: e.target.value
    })
  }
  setBoolean(name, value) {
    this.setState({
      [name]: value
    })
  }
  setFontSize(e) {
    this.setState({
      fontSize: parseInt(e.target.value,10)
    })
  }
  
  constructor(props) {
    super(props);
    // Maybe useful for later 
    // const defaultValue = props.questions && 
    //                      props.questions.filter(question => question.url === props.match.pathname)[0].boilerplate
    // const defaultValue = 
    // `function onLoad(editor) {
    //   console.log(\"i\'ve loaded\");
    // }`;
    //const inputValue = props.input[0] ? props.input[0].text : ''
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
    };
    this.setTheme = this.setTheme.bind(this);
    this.setMode = this.setMode.bind(this);
    this.onChange = this.onChange.bind(this);
    this.setFontSize = this.setFontSize.bind(this);
    this.setBoolean = this.setBoolean.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handlePopulate = this.handlePopulate.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleClear = this.handleClear.bind(this)
  }
  handleClick(event){
    event.preventDefault()
    let value = this.state.value 
    this.setState({result: !eval(value) ? "undefined" : eval(value).toString()})
    if (this.state.value.includes('console.log')) {
      let newValue = this.state.value.replace(/console.log/g, 'return')
      let value = newValue
      this.setState({result: !eval(value) ? "undefined" : eval(value).toString()})
  }
}
  handlePopulate(event){
    event.preventDefault()
    this.setState({
      value: this.props.input[0].text
    })
  }
  handleSave(event){
    event.preventDefault()
    this.props.saveInput(this.state.value)
    this.setState({
      value: ''
    })
  }
  handleClear(event){
    event.preventDefault()
    this.setState({
      value: ''
    })
  }
  componentDidMount () {
    this.props.getQuestions()
    this.props.handleInputFetch()
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.boilerplate !== nextProps.boilerplate) this.setState({value: nextProps.boilerplate})
  }
  render() {
    return (
      <div className="columns">
 
        <div className="examples column">
          <button onClick={this.handleClick}>Run</button>
          <button onClick={this.handlePopulate}>Populate</button>
          <button onClick={this.handleSave}>Save</button>
          <button onClick={this.handleClear}>Clear</button>
          <h2>Editor</h2>
          <AceEditor 
          mode={this.state.mode}
          theme={this.state.theme}
          name="blah2"
          onLoad={this.onLoad}
          onChange={this.onChange}
          onSelectionChange={this.onSelectionChange}
          onCursorChange={this.onCursorChange}
          onValidate={this.onValidate}
          value={this.state.value}
          fontSize={this.state.fontSize}
          showPrintMargin={this.state.showPrintMargin}
          showGutter={this.state.showGutter}
          highlightActiveLine={this.state.highlightActiveLine}
          setOptions={{
            enableBasicAutocompletion: this.state.enableBasicAutocompletion,
            enableLiveAutocompletion: this.state.enableLiveAutocompletion,
            enableSnippets: this.state.enableSnippets,
            showLineNumbers: this.state.showLineNumbers,
            tabSize: 2,
          }}/>
      </div>
      <div className="column">
          <h2>Code</h2>
          <AceEditor
            mode="jsx"
            theme="monokai"
            readOnly={true}
            value = {this.state.result}
          />
      </div>
      <div className="column">
      <h2>Tests</h2>
      <AceEditor
        mode="jsx"
        theme="monokai"
        readOnly={true}
        value = {this.state.result}
      />
  </div>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  input: state.input,
  questions: state.questions,
  users: state.users
})
const mapDispatchToProps = dispatch => ({
  handleInputFetch () {
    dispatch(fetchInput())
  }, 
  saveInput (text) {
    dispatch(postInput({text}))
  },
  getQuestions () {
    dispatch(fetchQuestions())
  }
})
const App = connect(mapStateToProps, mapDispatchToProps)(AppClass)
export default App


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