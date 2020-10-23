import React from 'react';
import classes from './NavigationItem.css';

const NavigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <a href="/" >A Link</a>
    </li>
);

export { NavigationItem };