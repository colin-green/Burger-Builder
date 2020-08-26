import React from 'react';
import BurgerLogo from '../../assets/images/burger-logo.png';
import classes from './style.module.css';

const logo = props => (
	<div className={classes.Logo}>
		<img src={BurgerLogo} alt='Burger Logo' />
	</div>
);

export default logo;
