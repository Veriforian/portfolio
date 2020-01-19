import React from 'react';
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

import CamperModal from './Modals/CamperModal';
import campImg from '../../../assets/images/Camper.JPG';
import projectStyles from '../../themes/projectTheme';
import changeNav from '../changeNav';
import * as actions from '../../actions';

function CamperProject(props) {
	const classes = projectStyles();

	const handleOpen = modalPlace => {
		props.openModal(modalPlace);
	};

	return (
		<>
			<Card className={classes.card} variant="outlined">
				<CardMedia
					className={classes.media}
					image={'images/Camper.JPG' || 'src/assets/images/Camper.JPG'}
					title="Camper"
				/>
				<CardContent>
					<Typography variant="h4">Camper app</Typography>
					<Divider className={classes.divider} />A fully fleshed out app
					demonstrating CRUD, and REST based design, made with Node, Express,
					MongoDB, and ejs
				</CardContent>
				<CardActions>
					<Button
						href="https://github.com/Veriforian/Camper"
						target="_blank"
						className={classes.gitButton}>
						<GithubIcon className={classes.icon} />
						Github
					</Button>
					<Button
						href="https://camperdev.herokuapp.com/"
						target="_blank"
						className={classes.urlButton}>
						<LanguageIcon className={classes.icon} />
						View
					</Button>
				</CardActions>
				<CardActions>
					<Button onClick={() => handleOpen(1)} className={classes.moreButton}>
						Learn More
					</Button>
				</CardActions>
				<CamperModal />
			</Card>
		</>
	);
}

export default connect(null, actions)(CamperProject);
