import { link } from 'fs-extra';
import React from 'react';
import classes from './NavigationItems';
import { NavigationItem } from './NavigationItem/NavigationItem';

const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem />
    </ul>
);

export { NavigationItems };