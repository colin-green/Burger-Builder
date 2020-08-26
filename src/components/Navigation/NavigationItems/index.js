import React from 'react';
import classes from './style.module.css';
import NavigationItem from './NavigationItem';

const naviationItems = props => (
	<ul className={classes.NavigationItems}>
		<NavigationItem link='/' active>
			Burger Builder
		</NavigationItem>
		<NavigationItem link='/'>Checkout</NavigationItem>
	</ul>
);

export default naviationItems;
