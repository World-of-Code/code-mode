import Drawer from 'rc-drawer';
import React, { Component } from 'react';
import '../../../chrome/style/drawer.less';
import ReactDOM from 'react-dom';
import DrawerContents from '../DrawerContents'

class DrawerWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      docked: false,
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
  handleClick = event => {
    this.setState({ open: !this.state.open });
    console.log('hi')
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
    );
  }
}


export default DrawerWrapper;
