import { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from '../../../public/styles/drawer.scss';
import animate from '../../../public/styles/animate.css';

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.onAnimationEnded = this.onAnimationEnded.bind(this);
  }

  componentWillMount() {
    this.state = {
      open: this.props.open,
      hiddenOverlay: true,
      hiddenDrawer: true
    };
  }

  componentDidMount() {
    this.drawer.addEventListener('webkitAnimationEnd', this.onAnimationEnded);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      nextProps.open ? this.openDrawer() : this.closeDrawer();
    }
  }

  componentWillUnmount() {
    this.drawer.removeEventListener('webkitAnimationEnd', this.onAnimationEnded);
  }

  onAnimationEnded() {
    if (!this.state.open) {
      this.setState({
        hiddenOverlay: true,
        hiddenDrawer: true
      });
    }
  }

  getOverlayClassName(style, animate) {
    return classNames(
      'drawer-overlay',
      style.overlay,
      animate.animated,
      {
        [`${animate.fadeIn}`]: this.state.open,
        [`${animate.fadeOut}`]: !this.state.open,
        [`${style.hidden}`]: this.state.hiddenOverlay
      }
    );
  }

  getDrawerClassName(style, animate) {
    const position = this.props.position || 'right';
    const themeAttr = `drawer-${position}`;
    const drawerTheme = style[themeAttr];
    let direction, start;
    if (this.state.open) {
      direction = 'In';
      switch (position) {
        case 'top':
          start = 'Down'; break;
        case 'bottom':
          start = 'Up'; break;
        case 'left':
          start = 'Left'; break;
        case 'right':
          start = 'Right'; break;
      }
    } else {
      direction = 'Out';
      switch (position) {
        case 'top':
          start = 'Up'; break;
        case 'bottom':
          start = 'Down'; break;
        case 'left':
          start = 'Left'; break;
        case 'right':
          start = 'Right'; break;
      }
    }
    const fade = animate[`fade${direction}${start}`];
    return classNames(
      'drawer-drawer',
      style.drawer,
      drawerTheme,
      animate.animated,
      fade,
      {
        [`${style.hidden}`]: this.state.hiddenDrawer
      }
    );
  }

  openDrawer() {
    this.setState({
      hiddenOverlay: false,
      hiddenDrawer: false,
      open: true
    });
  }

  closeDrawer() {
    this.setState({
      open: false
    });
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  render() {
    const overlayClass = this.getOverlayClassName(style, animate);
    const drawerClass = this.getDrawerClassName(style, animate);

    return (
      <div>
        {!this.props.noOverlay ? <div
          ref={(c) => this.overlay = c}
          className={overlayClass}
          onClick={this.closeDrawer}>
        </div> : null}
        <div
          className={drawerClass}
          ref={(c) => this.drawer = c}>
          {this.props.children}
        </div>
      </div>
    );
  }

}

Drawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  position: PropTypes.oneOf(['top', 'bottom', 'right', 'left']),
  noOverlay: PropTypes.bool
};

// Drawer.defaultProps = {
//   open: false, // default status of the drawer
//   transform: 0 // 0: inital close, 1: from open to close, 2: from close to open
// };

export default Drawer;
