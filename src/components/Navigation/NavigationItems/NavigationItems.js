import React from "react";
import classes from "./NavigationItems.css";
import { NavigationItem } from "./NavigationItem/NavigationItem";
import PropTypes from "prop-types";

const NavigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>
      Burger Builder
    </NavigationItem>
    {props.isAuthenticatedUser ? (
      <NavigationItem link="/orders">Orders</NavigationItem>
    ) : null}
    {!props.isAuthenticatedUser ? (
      <NavigationItem link="/auth">Authenticate</NavigationItem>
    ) : (
      <NavigationItem link="/logout">Logout</NavigationItem>
    )}
  </ul>
);

NavigationItems.propTypes = {
  link: PropTypes.string,
};

export { NavigationItems };
