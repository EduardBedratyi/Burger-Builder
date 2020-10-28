import React from 'react';
import classes from './NavigationItems.css';
import { NavigationItem } from './NavigationItem/NavigationItem';
import PropTypes from 'prop-types';

const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

NavigationItems.propTypes = {
    link: PropTypes.string,
}

export { NavigationItems };