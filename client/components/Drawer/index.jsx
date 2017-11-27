import Drawer from 'rc-drawer';
import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import ReactDOM from 'react-dom';
import DrawerContents from '../DrawerContents'
import DrawerBar from './DrawerBar'

import 'bootstrap/dist/css/bootstrap.css';
import '../../../public/style/drawer.css';

// delete
import { lorem } from './lorem.js'
// end delete

export default class DrawerContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="drawer-bar-all">
        { /* delete */
          lorem
        /* end delete */}
          <DrawerBar />
      </div>
    );
  }
}
