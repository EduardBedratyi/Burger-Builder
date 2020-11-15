import React, { Component } from 'react';
import classes from './Modal.css';
import { Aux } from '../../../hoc/Auxiliary/Auxiliary';
import { Backdrop } from '../Backdrop/Backdrop';
//Of cause I could leave Modal as functional component
//and wrap and export with React.memo
//This would be alternative to using shouldComponentUpdate
// const Modal = (props) => (
//     <Aux>
//         <Backdrop show={props.show} clicked={props.modalClosed} />
//         <div
//         className={classes.Modal}
//         style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
//         opacity: props.show ? '1' : '0'}}>
//         {props.children}
//     </div>
//     </Aux>
// );

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  componentWillUpdate() {
    console.log('[Modal] WillUpdate');
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0',
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export { Modal };
