import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import PropTypes from 'prop-types';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems isAuthenticated={this.props.isAuth}/>
        </nav>
    </header>
);

toolbar.propTypes = {
    drawerToggleClicked: PropTypes.func.isRequired,
    isAuth: PropTypes.bool.isRequired
}

export default toolbar;
