import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchInput, postInput, fetchQuestions } from '../../../store'
import { render } from 'react-dom';
import AceEditor from '../src/ace.jsx';
import 'brace/mode/jsx';

const languages = [
  'javascript',
  'java',
  'python',
  'xml',
  'ruby',
  'sass',
  'markdown',
  'mysql',
  'json',
  'html',
  'handlebars',
  'golang',
  'csharp',
  'elixir',
  'typescript',
  'css'
]

const themes = [
  'monokai',
  'github',
  'tomorrow',
  'kuroir',
  'twilight',
  'xcode',
  'textmate',
  'solarized_dark',
  'solarized_light',
  'terminal',
]

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
//import { JSDOM } from '../../../../../Library/Caches/typescript/2.6/node_modules/@types/jsdom';



class AppClass extends Component {
  onLoad() {
    console.log('i\'ve loaded');
  }
  onChange(newValue) {
    console.log('change', newValue);
    this.setState({
      value: newValue
    })
  }

  onSelectionChange(newValue, event) {
    console.log('select-change', newValue);
    console.log('select-change-event', event);
  }

  onCursorChange(newValue, event) {
    console.log('cursor-change', newValue);
    console.log('cursor-change-event', event);
  }

  onValidate(annotations) {
    console.log('onValidate', annotations);
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


// Potentially useful for later styling

// `<AceEditor
// mode="${this.state.mode}"
// theme="${this.state.theme}"
// name="blah2"
// onLoad={this.onLoad}
// onChange={this.onChange}
// fontSize={${this.state.fontSize}}
// showPrintMargin={${this.state.showPrintMargin}}
// showGutter={${this.state.showGutter}}
// highlightActiveLine={${this.state.highlightActiveLine}}
// value={\`${this.state.value}\`}
// setOptions={{
// enableBasicAutocompletion: ${this.state.enableBasicAutocompletion},
// enableLiveAutocompletion: ${this.state.enableLiveAutocompletion},
// enableSnippets: ${this.state.enableSnippets},
// showLineNumbers: ${this.state.showLineNumbers},
// tabSize: 2,
// }}/>
//           `


// <div className="column">
// <div className="field">
//   <label>
//     Mode:
//   </label>
//     <p className="control">
//       <span className="select">
//         <select name="mode" onChange={this.setMode} value={this.state.mode}>
//           {languages.map((lang) => <option  key={lang} value={lang}>{lang}</option>)}
//         </select>
//        </span>
//     </p>
// </div>

// <div className="field">
//   <label>
//     Theme:
//   </label>
//     <p className="control">
//       <span  className="select">
//         <select name="Theme" onChange={this.setTheme} value={this.state.theme}>
//          {themes.map((lang) => <option key={lang} value={lang}>{lang}</option>)}
//         </select></span>
//     </p>
// </div>

// <div className="field">
//   <label>
//     Font Size:
//   </label>
//     <p className="control">
//       <span  className="select">
//         <select name="Font Size" onChange={this.setFontSize} value={this.state.fontSize}>
//          {[14,16,18,20,24,28,32,40].map((lang) => <option  key={lang} value={lang}>{lang}</option>)}
//         </select></span>
//     </p>
// </div>
// <div className="field">
//  <p className="control">
//    <label className="checkbox">
//      <input type="checkbox" checked={this.state.enableBasicAutocompletion} onChange={(e) => this.setBoolean('enableBasicAutocompletion', e.target.checked)} />
//       Enable Basic Autocomplete
//    </label>
//  </p>
// </div>
// <div className="field">
//  <p className="control">
//    <label className="checkbox">
//      <input type="checkbox" checked={this.state.enableLiveAutocompletion} onChange={(e) => this.setBoolean('enableLiveAutocompletion', e.target.checked)} />
//       Enable Live Autocomplete
//    </label>
//  </p>
// </div>
// <div className="field">
//  <p className="control">
//    <label className="checkbox">
//      <input type="checkbox" checked={this.state.showGutter} onChange={(e) => this.setBoolean('showGutter', e.target.checked)} />
//       Show Gutter
//    </label>
//  </p>
// </div>
// <div className="field">
//  <p className="control">
//    <label className="checkbox">
//      <input type="checkbox" checked={this.state.showPrintMargin} onChange={(e) => this.setBoolean('showPrintMargin', e.target.checked)} />
//       Show Print Margin
//    </label>
//  </p>
// </div>
// <div className="field">
//  <p className="control">
//    <label className="checkbox">
//      <input type="checkbox" checked={this.state.highlightActiveLine} onChange={(e) => this.setBoolean('highlightActiveLine', e.target.checked)} />
//       Highlight Active Line
//    </label>
//  </p>
// </div>
// <div className="field">
//  <p className="control">
//    <label className="checkbox">
//      <input type="checkbox" checked={this.state.enableSnippets} onChange={(e) => this.setBoolean('enableSnippets', e.target.checked)} />
//       Enable Snippets
//    </label>
//  </p>
// </div>
// <div className="field">
//  <p className="control">
//    <label className="checkbox">
//      <input type="checkbox" checked={this.state.showLineNumbers} onChange={(e) => this.setBoolean('showLineNumbers', e.target.checked)} />
//       Show Line Numbers
//    </label>
//  </p>
// </div>


// </div>







//////////////////////////////////// ORIGINAL ////////////////////////////////////

// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import AceEditor from '../src/ace.js';
// import 'brace/mode/jsx';

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

// languages.forEach((lang) => {
//   require(`brace/mode/${lang}`)
//   require(`brace/snippets/${lang}`)
// })

// themes.forEach((theme) => {
//   require(`brace/theme/${theme}`)
// })
// /*eslint-disable no-alert, no-console */
// import 'brace/ext/language_tools';
// import 'brace/ext/searchbox';
// //import { JSDOM } from '../../../../../Library/Caches/typescript/2.6/node_modules/@types/jsdom';


// const defaultValue =''
// // `function onLoad(editor) {
// //   console.log(\"i\'ve loaded\");
// // }`;
// class App extends Component {
//   onLoad() {
//     console.log('i\'ve loaded');
//   }
//   onChange(newValue) {
//     console.log('change', newValue);
//     this.setState({
//       value: newValue
//     })
//   }

//   onSelectionChange(newValue, event) {
//     console.log('select-change', newValue);
//     console.log('select-change-event', event);
//   }

//   onCursorChange(newValue, event) {
//     console.log('cursor-change', newValue);
//     console.log('cursor-change-event', event);
//   }

//   onValidate(annotations) {
//     console.log('onValidate', annotations);
//   }

//   setTheme(e) {
//     this.setState({
//       theme: e.target.value
//     })
//   }
//   setMode(e) {
//     this.setState({
//       mode: e.target.value
//     })
//   }
//   setBoolean(name, value) {
//     this.setState({
//       [name]: value
//     })
//   }
//   setFontSize(e) {
//     this.setState({
//       fontSize: parseInt(e.target.value,10)
//     })
//   }

//   constructor(props) {
//     super(props);
//     this.state = {
//       value: defaultValue,
//       theme: 'monokai',
//       mode: 'javascript',
//       enableBasicAutocompletion: false,
//       enableLiveAutocompletion: false,
//       fontSize: 14,
//       showGutter: true,
//       showPrintMargin: true,
//       highlightActiveLine: true,
//       enableSnippets: false,
//       showLineNumbers: true,
//       result: ''
//     };
//     this.setTheme = this.setTheme.bind(this);
//     this.setMode = this.setMode.bind(this);
//     this.onChange = this.onChange.bind(this);
//     this.setFontSize = this.setFontSize.bind(this);
//     this.setBoolean = this.setBoolean.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick(event){
//     event.preventDefault()
//     let value = this.state.value
//     this.setState({result: eval(value).toString()})
//   }
//   render() {
//     // let old = console.log;
//     // let logger;
//     //   console.log = ()=>{
//     //     for(let i =0; i<arguments.length; i++){
//     //       if(typeof arguments[i] === 'object'){
//     //         logger += JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i] + '<br />';
//     //       }else{
//     //         logger += arguments[i] + '<br />'
//     //       }
//     //     }
//     //   }
//     return (
//       <div className="columns">
//         <div className="column">
//            <div className="field">
//              <label>
//                Mode:
//              </label>
//                <p className="control">
//                  <span className="select">
//                    <select name="mode" onChange={this.setMode} value={this.state.mode}>
//                      {languages.map((lang) => <option  key={lang} value={lang}>{lang}</option>)}
//                    </select>
//                   </span>
//                </p>
//            </div>

//            <div className="field">
//              <label>
//                Theme:
//              </label>
//                <p className="control">
//                  <span  className="select">
//                    <select name="Theme" onChange={this.setTheme} value={this.state.theme}>
//                     {themes.map((lang) => <option key={lang} value={lang}>{lang}</option>)}
//                    </select></span>
//                </p>
//            </div>

//            <div className="field">
//              <label>
//                Font Size:
//              </label>
//                <p className="control">
//                  <span  className="select">
//                    <select name="Font Size" onChange={this.setFontSize} value={this.state.fontSize}>
//                     {[14,16,18,20,24,28,32,40].map((lang) => <option  key={lang} value={lang}>{lang}</option>)}
//                    </select></span>
//                </p>
//            </div>
//           <div className="field">
//             <p className="control">
//               <label className="checkbox">
//                 <input type="checkbox" checked={this.state.enableBasicAutocompletion} onChange={(e) => this.setBoolean('enableBasicAutocompletion', e.target.checked)} />
//                  Enable Basic Autocomplete
//               </label>
//             </p>
//           </div>
//            <div className="field">
//             <p className="control">
//               <label className="checkbox">
//                 <input type="checkbox" checked={this.state.enableLiveAutocompletion} onChange={(e) => this.setBoolean('enableLiveAutocompletion', e.target.checked)} />
//                  Enable Live Autocomplete
//               </label>
//             </p>
//           </div>
//            <div className="field">
//             <p className="control">
//               <label className="checkbox">
//                 <input type="checkbox" checked={this.state.showGutter} onChange={(e) => this.setBoolean('showGutter', e.target.checked)} />
//                  Show Gutter
//               </label>
//             </p>
//           </div>
//            <div className="field">
//             <p className="control">
//               <label className="checkbox">
//                 <input type="checkbox" checked={this.state.showPrintMargin} onChange={(e) => this.setBoolean('showPrintMargin', e.target.checked)} />
//                  Show Print Margin
//               </label>
//             </p>
//           </div>
//            <div className="field">
//             <p className="control">
//               <label className="checkbox">
//                 <input type="checkbox" checked={this.state.highlightActiveLine} onChange={(e) => this.setBoolean('highlightActiveLine', e.target.checked)} />
//                  Highlight Active Line
//               </label>
//             </p>
//           </div>
//           <div className="field">
//             <p className="control">
//               <label className="checkbox">
//                 <input type="checkbox" checked={this.state.enableSnippets} onChange={(e) => this.setBoolean('enableSnippets', e.target.checked)} />
//                  Enable Snippets
//               </label>
//             </p>
//           </div>
//           <div className="field">
//             <p className="control">
//               <label className="checkbox">
//                 <input type="checkbox" checked={this.state.showLineNumbers} onChange={(e) => this.setBoolean('showLineNumbers', e.target.checked)} />
//                  Show Line Numbers
//               </label>
//             </p>
//           </div>


//       </div>
//         <div className="examples column">
//           <button onClick={this.handleClick}>Run</button>
//           <h2>Editor</h2>
//           <AceEditor
//           mode={this.state.mode}
//           theme={this.state.theme}
//           name="blah2"
//           onLoad={this.onLoad}
//           onChange={this.onChange}
//           onSelectionChange={this.onSelectionChange}
//           //onCursorChange={this.onCursorChange}
//           onValidate={this.onValidate}
//           value={this.state.value}
//           fontSize={this.state.fontSize}
//           showPrintMargin={this.state.showPrintMargin}
//           showGutter={this.state.showGutter}
//           highlightActiveLine={this.state.highlightActiveLine}
//           setOptions={{
//             enableBasicAutocompletion: this.state.enableBasicAutocompletion,
//             enableLiveAutocompletion: this.state.enableLiveAutocompletion,
//             enableSnippets: this.state.enableSnippets,
//             showLineNumbers: this.state.showLineNumbers,
//             tabSize: 2,
//           }}/>
//       </div>
//       <div className="column">
//           <h2>Code</h2>
//           <AceEditor
//            mode="jsx"
// theme="monokai"
// readOnly={true}

// value = {this.state.result}

//             />
//       </div>
//     </div>
//     );
//   }
// }

// //value={`${this.state.result}`}

// // render(
// //  <App />,
// //   document.getElementById('example')
// // );
// export default App



// // `<AceEditor
// // mode="${this.state.mode}"
// // theme="${this.state.theme}"
// // name="blah2"
// // onLoad={this.onLoad}
// // onChange={this.onChange}
// // fontSize={${this.state.fontSize}}
// // showPrintMargin={${this.state.showPrintMargin}}
// // showGutter={${this.state.showGutter}}
// // highlightActiveLine={${this.state.highlightActiveLine}}
// // value={\`${this.state.value}\`}
// // setOptions={{
// // enableBasicAutocompletion: ${this.state.enableBasicAutocompletion},
// // enableLiveAutocompletion: ${this.state.enableLiveAutocompletion},
// // enableSnippets: ${this.state.enableSnippets},
// // showLineNumbers: ${this.state.showLineNumbers},
// // tabSize: 2,
// // }}/>
// //           `

