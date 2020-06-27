import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>דף ראשי</NavigationItem>
        <NavigationItem link="/">דף אישי</NavigationItem>
    </ul>
);

export default navigationItems;