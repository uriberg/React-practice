import React from 'react';
import classes from './Backdrop.module.css';
import PropTypes from 'prop-types';

const backdrop = (props) => (
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
);

backdrop.propTypes = {
    clicked: PropTypes.func,
    show: PropTypes.bool
}
export default backdrop;
