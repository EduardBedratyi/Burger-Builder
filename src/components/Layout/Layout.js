import React, { Component } from 'react';
import { Aux } from '../../hoc/Auxiliary';
import classes from './Layout.css';
import { Toolbar } from '../Navigation/Toolbar/Toolbar';
import { SideDrawer } from '../Navigation/SideDrawer/SideDrawer';

// turning layout component into class allow us listening both 
//components: SideDrawer closing itself by clicking on the backdrop 
//as well as Toolbar opening the SideDrawer by clicking on the toggle button
class Layout extends Component {
  state = {
    showSideDrawer: true
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false})
  }
  render () {
    return (
      <Aux>
        <Toolbar />
        <SideDrawer 
        open={this.state.showSideDrawer} 
        closed={this.sideDrawerClosedHandler} />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    )
  }
}

export { Layout };
