import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Projects from './Projects';
import About from './About';
import Skills from './Skills';
import Navbar from './Navbar';
import Landing from './Landing';
import appStyles from '../themes/appTheme';

const App = () => {
	const classes = appStyles();

	return (
		<BrowserRouter>
			<Landing />
			<div className={classes.section}>
				<Navbar />
				<Switch>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/skills">
						<Skills />
					</Route>
					<Route path="/">
						<Projects />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default App;
