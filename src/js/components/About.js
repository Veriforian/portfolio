import React, { useEffect } from 'react';
import { Grid, Typography, Divider, Button } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import DescriptionIcon from '@material-ui/icons/Description';

import changeNav from './changeNav';
import aboutStyles from '../themes/aboutTheme';
import '../../assets/css/About.css'

function About() {
	const classes = aboutStyles();

	return (
		<div className="mediaFix" style={{height: '100%'}}>
			<Grid
				className={classes.container}
				container
				spacing={6}
				direction="column"
				justify="center"
				alignItems="center">
				<div className={classes.content}>
					<Grid
						container
						spacing={2}
						direction="column"
						justify="center"
						alignItems="center">
						<Grid item>
							<Typography className={classes.text} variant="h3">
								About Me
							</Typography>
						</Grid>
						<Grid item>
							<Divider className={classes.divider} />
						</Grid>
						<Grid item>
							<Typography className={classes.text} variant="h5">
								I'm a front end developer with backend experience. I'm highly
								motivated to improve in every aspect, and passionate about all
								aspects of web development.
							</Typography>
						</Grid>
						<Grid item>
							<Button
								href="mailto:benjones14480@gmail.com"
								className={classes.button}>
								<ContactMailIcon className={classes.icon} />
								Contact Me
							</Button>
							<Button className={classes.button}>
								<DescriptionIcon className={classes.icon} />
								Resume
							</Button>
						</Grid>
					</Grid>
				</div>
			</Grid>
		</div>
	);
}

export default changeNav(About, 1);
