import React, { Component } from 'react';
import Drawer from './Drawer';

export default class DrawerWrapper extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      position: 'bottom',
      noOverlay: true
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.setPosition = this.setPosition.bind(this);
    this.setNoOverlay = this.setNoOverlay.bind(this);
  }

  setPosition(e) {
    this.setState({ position: e.target.value });
  }

  setNoOverlay(e) {
    this.setState({ noOverlay: e.target.checked });
  }

  toggleDrawer() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div>
        <div style={{ margin: 200 }}>
          <h1>CodeMode</h1>
          <div style={{ margin: 20 }}>
            <label>Position</label>
            <select value={this.state.position} onChange={this.setPosition}>
              <option value="top">top</option>
              <option value="bottom">bottom</option>
              <option value="left">left</option>
              <option value="right">right</option>
            </select>
          </div>
          <div style={{ margin: 20 }}>
            <input type="checkbox"
              checked={this.state.noOverlay}
              onChange={this.setNoOverlay}
            />
            <label>No overlay</label>
            <small>(The overlay lets you close the drawer on click)</small>
          </div>
          <button
            style={{ margin: 20 }}
            onClick={this.toggleDrawer}
            disabled={this.state.open && !this.state.noOverlay}
          >
            {!this.state.open ? <span>show drawer</span> : <span>close drawer</span>}
          </button>
        </div>
        <Drawer
          open={this.state.open}
          position={this.state.position}
          onClose={this.closeDrawer}
          noOverlay={this.state.noOverlay}>
          <i onClick={this.closeDrawer} className="icono-cross"></i>
          <h2>This is where the repl will go</h2>
        </Drawer>
      </div>
    );
  }
}
