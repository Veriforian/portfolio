import React from 'react';
import {
	Typography,
	Divider,
	CssBaseline,
	Button,
	IconButton
} from '@material-ui/core';
import {
	GitHub as GithubIcon,
	Email as EmailIcon,
	Description as DescriptionIcon,
	ArrowDownward as ArrowDownwardIcon,
	LinkedIn as LinkedInIcon
} from '@material-ui/icons';

import { landingStyles } from '../themes/landingTheme';
import '../../assets/css/Landing.css';

const Landing = () => {
	const classes = landingStyles();

	return (
		<div className={classes.intro}>
			<div className={classes.links}>
				<Button
					href="mailto:benjones14480@gmail.com"
					className={classes.text}
					size="large">
					<EmailIcon style={{ marginRight: '1rem' }} />
					Email
				</Button>
				<Divider
					component="div"
					style={{
						width: '9rem',
						zIndex: 2,
						backgroundColor: 'rgba(0, 0, 0, 0.5)',
						height: '1px'
					}}
				/>
				<Button
					href="https://www.linkedin.com/in/ben-jones-8b640319a/"
					target="_blank"
					className={classes.text}
					size="large">
					<LinkedInIcon style={{ marginRight: '1rem' }} />
					Linked In
				</Button>
			</div>
			<div className={classes.center}>
				<div className={classes.header}>
					<CssBaseline />
					<Typography className={classes.text} variant="h1" component="h2">
						Ben Jones
					</Typography>
					<Divider
						component="div"
						style={{
							zIndex: 2,
							backgroundColor: 'rgba(0, 0, 0, 0.5)',
							height: '2px'
						}}
					/>
					<div className={classes.flex}>
						<Button
							href="https://github.com/Veriforian"
							target="_blank"
							className={classes.text}
							size="large">
							<GithubIcon style={{ marginRight: '1rem' }} />
							Github
						</Button>
						<Button className={classes.text} size="large">
							<DescriptionIcon style={{ marginRight: '1rem' }} />
							Resume
						</Button>
					</div>
				</div>
			</div>
			<div className="arrow bounce">
				<IconButton href="#nav">
					<ArrowDownwardIcon size="large" style={{ color: 'white' }} />
				</IconButton>
			</div>
		</div>
	);
};

export default Landing;
