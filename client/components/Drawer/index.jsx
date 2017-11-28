import Drawer from 'rc-drawer';
import React, { Component } from 'react';
import '../../../chrome/style/drawer.less';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import DrawerContents from '../DrawerContents'
 import $ from 'jquery'

class DrawerWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      docked: false,
      display: false,
      open: false,
      transitions: true,
      touch: true,
      enableDragHandle: true,
      position: 'bottom',
      dragToggleDistance: 100,
    };
  }
  onOpenChange = (open) => {
    console.log('onOpenChange', open);
    this.setState({ open });
  }
  onDock = () => {
    const docked = !this.state.docked;
    this.setState({
      docked,
    });
    if (!docked) {
      this.onOpenChange(false);
    }
  }
  componentDidMount () {
    chrome.storage.onChanged.addListener((changes) =>{
      let action = changes['action'];
      if(action.newValue === "hide") {
        this.setState({display: false})
     //   console.log("hide statew", this.state.display)
         $( "#app" ).hide();
      }
      if(action.newValue === 'show') {
        this.setState({display: true})
     //   console.log("show statew", this.state.display)
         $( "#app" ).show();
      } 
  });

  chrome.storage.local.get("action",(obj)=>{
    let foo = obj.userInput
    console.log("foo", foo)
    if(foo === 'hide')
     this.setState({
       display: false
   })
   if(foo === 'show')
   this.setState({
     display: true
 })
   });
  }
  handleClick = event => {
    this.setState({ open: !this.state.open });

  }
  render() {

    const drawer = (
      <div>
        <h3>
          CodeMode Drawer
          <button onClick={this.onDock}>
            {this.state.docked ? 'unpin' : 'pin'}
          </button>
        </h3>
        <DrawerContents />
      </div>
    );
    //<p>this is where the repl will go!</p>
    const drawerProps = {
      docked: this.state.docked,
      open: this.state.open,
      touch: this.state.touch,
      enableDragHandle: this.state.enableDragHandle,
      position: this.state.position,
      dragToggleDistance: this.state.dragToggleDistance,
      transitions: this.state.transitions,
      onOpenChange: this.onOpenChange,
    };

    return ( 
      <div>
      {this.state.display  ?
      <div className="drawer-container">
        
        <Drawer sidebar={drawer} {...drawerProps}>
        <div className="main">
        <button onClick={this.handleClick}>
            switch-open
          </button>
             <p>

              {['left', 'right', 'top', 'bottom'].map((i, index) => (<span
                 key={index} style={{ marginRight: 10 }}
               >
                 <input type="radio" value={i} id={`pos-${index}`}
                   checked={this.state.position === i}
                   onChange={elem => { this.setState({ position: elem.target.value }); }}
                 /> <label htmlFor={`pos-${index}`}>{i}</label>
               </span>))}
             </p>
           </div>
         </Drawer>
         </div>
       : <div /> 
       }
      </div>
    );
  }
}


export default DrawerWrapper
