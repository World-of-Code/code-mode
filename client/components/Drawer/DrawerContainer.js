import Drawer from 'rc-drawer';
import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import ReactDOM from 'react-dom';
import DrawerContents from '../DrawerContents'
import DrawerBar from './DrawerBar'

import '../../../public/style/rc-drawer.css';
import '../../../public/style/drawer.css';

// export default class DrawerContainer extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       docked: false,
//       open: false,
//       transitions: true,
//       touch: true,
//       enableDragHandle: true,
//       position: 'left',
//       dragToggleDistance: 30,
//     };
//   }
//   onOpenChange = (open) => {
//     console.log('onOpenChange', open);
//     this.setState({ open });
//   }
//   onDock = () => {
//     const docked = !this.state.docked;
//     this.setState({
//       docked,
//     });
//     if (!docked) {
//       this.onOpenChange(false);
//     }
//   }
//   render() {
//     const sidebar = (<div>
//       <h3>
//         sidebar
//         <button onClick={this.onDock}>
//           {this.state.docked ? 'unpin' : 'pin'}
//         </button>
//       </h3>
//       <p>this is content!</p>
//     </div>);

//     const drawerProps = {
//       docked: this.state.docked,
//       open: this.state.open,
//       touch: this.state.touch,
//       enableDragHandle: this.state.enableDragHandle,
//       position: this.state.position,
//       dragToggleDistance: this.state.dragToggleDistance,
//       transitions: this.state.transitions,
//       onOpenChange: this.onOpenChange,
//     };
//     return (<div className="drawer-container">
//       <Drawer sidebar={sidebar} {...drawerProps} style={{ overflow: 'auto' }}>
//         <div className="main">
//           <p>React component</p>
//           <button onClick={() => { this.setState({ open: !this.state.open }); }}>
//             switch-open
//           </button>
//           <p>
//             {['left', 'right', 'top', 'bottom'].map((i, index) => (<span
//               key={index} style={{ marginRight: 10 }}
//             >
//               <input type="radio" value={i} id={`pos-${index}`}
//                 checked={this.state.position === i}
//                 onChange={(e) => { this.setState({ position: e.target.value }); }}
//               /> <label htmlFor={`pos-${index}`}>{i}</label>
//             </span>))}
//           </p>
//           <p style={{ float: 'right' }}>right content</p>
//           <p style={{ position: 'absolute', bottom: 10 }}>bottom content</p>
//         </div>
//       </Drawer>
//     </div>);
//   }
// }











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
      // delete
      open: true
    };

    // delete
    // this.handleClick = this.handleClick.bind(this);
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

  // delete
  // handleClick = event => {
  //   this.setState({ open: !this.state.open })
  // }

  render() {
    const sidebar = (
      <div className="contents">
        <DrawerContents />
      {/*
        <h3>
          CodeMode Drawer
          <button onClick={this.onDock}>
            {this.state.docked ? 'unpin' : 'pin'}
          </button>
        </h3>
      */}
      </div>
    );
    const drawerProps = {
      docked: this.state.docked,
      open: this.state.open, // this is it i think
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
        <Drawer sidebar={sidebar} {...drawerProps}> {/* style={{ overflow: 'auto' }} */}
          <div className="main"> {/*         // button
            <button onClick={this.handleClick}>
              switch-open
            </button>

            // change view
            <p>
              {['left', 'right', 'top', 'bottom'].map((i, index) => (<span
                key={index} style={{ marginRight: 10 }}
              >
                <input type="radio" value={i} id={`pos-${index}`}
                  checked={this.state.position === i}
                  onChange={elem => { this.setState({ position: elem.target.value }); }}
                /> <label htmlFor={`pos-${index}`}>{i}</label>
              </span>))}
            </p> */ }
          </div>
        </Drawer>
      </div>
    );
  }
}

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
