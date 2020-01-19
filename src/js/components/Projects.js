import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
	Grid,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Button,
	Typography,
	Divider,
	Backdrop,
	Modal
} from '@material-ui/core';
import {
	GitHub as GithubIcon,
	Language as LanguageIcon
} from '@material-ui/icons';

import CamperProject from './Projects/CamperProject';
import campImg from '../../assets/images/Camper.JPG';
import projectStyles from '../themes/projectTheme';
import changeNav from './changeNav';
import * as actions from '../actions';

function Projects(props) {
	const classes = projectStyles();

	return (
		<div className={classes.content}>
			<Grid container spacing={3} justify="center" alignItems="center">
				<Grid item xs={12} sm={6} md={4} lg={3}>
					<CamperProject />
				</Grid>
				<Grid item xs={12} sm={6} md={4} lg={3}>
					<Card className={classes.card} variant="outlined">
						<CardMedia
							className={classes.media}
							image="/src/assets/images/demo.jpg"
							title="Campi"
						/>
						<CardContent>
							<Typography variant="h4">Title</Typography>
							<Divider className={classes.divider} />
							lorem asdfasdfa atfsfasfefzs asera sdf aweasdf aerf sdafawef sdfa{' '}
						</CardContent>
						<CardActions>
							<Button target="_blank" className={classes.gitButton}>
								<GithubIcon className={classes.icon} />
								Github
							</Button>
							<Button target="_blank" className={classes.urlButton}>
								<LanguageIcon className={classes.icon} />
								View
							</Button>
						</CardActions>
						<CardActions>
							<Button className={classes.moreButton}>Learn More</Button>
						</CardActions>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} md={4} lg={3}>
					<Card className={classes.card}>
						<CardMedia
							className={classes.media}
							image="/src/assets/images/demo.jpg"
							title="Campi"
						/>
						<CardContent>
							<Typography variant="h4">Title</Typography>
							<Divider className={classes.divider} />
							lorem asdfasdfa atfsfasfefzs asera sdf aweasdf aerf sdafawef sdfa{' '}
						</CardContent>
						<CardActions>
							<Button target="_blank" className={classes.gitButton}>
								<GithubIcon className={classes.icon} />
								Github
							</Button>
							<Button target="_blank" className={classes.urlButton}>
								<LanguageIcon className={classes.icon} />
								View
							</Button>
						</CardActions>
						<CardActions>
							<Button className={classes.moreButton}>Learn More</Button>
						</CardActions>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} md={4} lg={3}>
					<Card className={classes.card}>
						<CardMedia
							className={classes.media}
							image="/src/assets/images/demo.jpg"
							title="Campi"
						/>
						<CardContent>
							<Typography variant="h4">Title</Typography>
							<Divider className={classes.divider} />
							lorem asdfasdfa atfsfasfefzs asera sdf aweasdf aerf sdafawef sdfa{' '}
						</CardContent>
						<CardActions>
							<Button target="_blank" className={classes.gitButton}>
								<GithubIcon className={classes.icon} />
								Github
							</Button>
							<Button target="_blank" className={classes.urlButton}>
								<LanguageIcon className={classes.icon} />
								View
							</Button>
						</CardActions>
						<CardActions>
							<Button className={classes.moreButton}>Learn More</Button>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
}

export default changeNav(Projects, 0);
