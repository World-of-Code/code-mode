import Drawer from 'rc-drawer';
import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import ReactDOM from 'react-dom';
import DrawerContents from '../DrawerContents'
import DrawerBar from './DrawerBar'

import '../../../public/style/rc-drawer.css';
import '../../../public/style/drawer.css';

export default class DrawerContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      docked: false,
      transitions: true,
      touch: true,
      enableDragHandle: true,
      position: 'bottom',
      dragToggleDistance: 30,
      open: true
    };

  }

  onOpenChange = (open) => {
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
    const sidebar = (
      <div className="contents">
        <DrawerContents />
      </div>
    );

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

        <Drawer sidebar={sidebar} {...drawerProps}>
          <div className="main">
          </div>
        </Drawer>
      </div>
    );
  }
}
