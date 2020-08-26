import React from 'react';
import Logo from '../../Logo';
import NavigationItems from '../NavigationItems';
import classes from './style.module.css';
import Backdrop from '../../UI/Backdrop';
import Auxilary from '../../../hoc/Auxilary';

const sideDrawer = props => {
	let attachedClasses;
	if (props.open) {
		attachedClasses = [classes.SideDrawer, classes.Open];
	} else {
		attachedClasses = [classes.SideDrawer, classes.Close];
	}

	return (
		<Auxilary>
			<Backdrop show={props.open} clicked={props.closed} />
			<div className={attachedClasses.join(' ')}>
				<div className={classes.Logo}>
					<Logo />
				</div>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</Auxilary>
	);
};

export default sideDrawer;
