import Drawer from 'rc-drawer';
import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import ReactDOM from 'react-dom';
import DrawerContents from '../DrawerContents'
import DrawerBar from './DrawerBar'

import '../../../public/style/rc-drawer.css';

class DrawerContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      docked: false,
      open: false,
      transitions: true,
      touch: true,
      enableDragHandle: true,
      position: 'left',
      dragToggleDistance: 30,
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
    const drawerProps = {
      docked: this.state.docked,
      touch: this.state.touch,
      enableDragHandle: this.state.enableDragHandle,
      position: this.state.position,
      dragToggleDistance: this.state.dragToggleDistance,
      transitions: this.state.transitions,
      onOpenChange: this.onOpenChange,
    };

    return (
      <div className="drawer-container">
        { // not sure why the close button doesn't show up
          // <Drawer
          //   sidebar={drawer} {...drawerProps}
          //   style={{ overflow: 'auto' }}>
          //   <div className="main">
          //     <button onClick={() => { this.setState({ open: !this.state.open }); }}>
          //       switch-open
          //     </button>
          //     <button onClick={() => { this.setState({ open: this.state.open }); }}>
          //       switch-closed
          //     </button>
          //     <p>
        }
        <Drawer sidebar={drawer} {...drawerProps}>
          <div className="main">
            {/*
            <button onClick={this.handleClick}>
              switch-open
        </button>
*/ }
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

export default DrawerContainer;

// sidebar={drawer} {...drawerProps}
// style={{ overflow: 'auto' }}>
// <div className="main">
//   <button onClick={() => { this.setState({ open: !this.state.open }); }}>
//     switch-open
//   </button>
//   <p>
//     {['left', 'right', 'top', 'bottom'].map((i, index) => (<span
//       key={index} style={{ marginRight: 10 }}
//     >
//       <input type="radio" value={i} id={`pos-${index}`}
//         checked={this.state.position === i}
//         onChange={elem => { this.setState({ position: elem.target.value }); }}
//       /> <label htmlFor={`pos-${index}`}>{i}</label>
//     </span>))}
//   </p>
// </div>
