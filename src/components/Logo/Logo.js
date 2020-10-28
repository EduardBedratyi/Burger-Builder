import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';
import PropTypes from 'prop-types';

const Logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="MyBurger"/>
    </div>
);

Logo.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
}

export { Logo };