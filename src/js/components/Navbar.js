import React from 'react';
import navStyles from '../themes/navTheme';
import { AppBar, Toolbar, Tabs, Tab, Paper } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import theme from '../themes/colorTheme';

const Navbar = props => {
	const classes = navStyles();

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Paper elevation={3}>
				<Tabs id="nav" className={classes.tabs} value={props.nav} centered>
					<Tab
						classes={{ textColorInherit: classes.tab }}
						component={Link}
						to="/"
						label="Projects"
					/>
					<Tab
						classes={{ textColorInherit: classes.tab }}
						component={Link}
						to="/about"
						label="About"
					/>
					<Tab
						classes={{ textColorInherit: classes.tab }}
						component={Link}
						to="/skills"
						label="Skills/Tech"
					/>
				</Tabs>
			</Paper>
		</ThemeProvider>
	);
};

const mapStateToProps = state => {
	return { nav: state.nav };
};

export default connect(mapStateToProps)(Navbar);
