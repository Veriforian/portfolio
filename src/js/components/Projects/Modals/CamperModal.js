import React from 'react';
import { connect } from 'react-redux';
import {
	Grid,
	IconButton,
	List,
	ListItem,
	ListItemText,
	Typography,
	Divider,
	Backdrop,
	Modal
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Carousel from 'react-material-ui-carousel';

import modalStyles from '../../../themes/modalTheme';
import * as actions from '../../../actions';
import '../../../../assets/css/Modal.css';

import '../../../../assets/images/Camper.JPG';
import '../../../../assets/images/campError.JPG';
import '../../../../assets/images/campLogin.JPG';
import '../../../../assets/images/campNew.JPG';
import '../../../../assets/images/campREST.JPG';
import '../../../../assets/images/campShow.JPG';

function CamperModal(props) {
	const classes = modalStyles();

	const handleClose = () => {
		props.closeModal();
	};

	return (
		<>
			<Modal
				className={classes.root}
				open={props.modal.one}
				onClose={() => handleClose()}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{ timeout: 500 }}>
				<div className={classes.content}>
					<IconButton onClick={handleClose} className={classes.closeIcon}>
						<CloseIcon />
					</IconButton>
					<div className={classes.title}>
						<Typography variant="h2">Title</Typography>
					</div>
					<Divider className={classes.divider} />
					<Grid alignItems="center" justify="center" container>
						<Grid item lg={4}>
							<Carousel>
								<img
									className={(classes.image, 'imageFix')}
									src={'images/Camper.JPG' || 'src/assets/images/Camper.JPG'}
									alt="Camper landing page"
								/>
								<img
									className={(classes.image, 'imageFix')}
									src={
										'images/campLogin.JPG' || 'src/assets/images/campLogin.JPG'
									}
									alt="Camper login modal"
								/>
								<img
									className={(classes.image, 'imageFix')}
									src={
										'images/campError.JPG' || 'src/assets/images/campError.JPG'
									}
									alt="Camper error handling"
								/>
								<img
									className={(classes.image, 'imageFix')}
									src={
										'images/campShow.JPG' || 'src/assets/images/campShow.JPG'
									}
									alt="Camper show page"
								/>
								<img
									className={(classes.image, 'imageFix')}
									src={'images/campNew.JPG' || 'src/assets/images/campNew.JPG'}
									alt="Camper new pgge"
								/>
								<img
									className={(classes.image, 'imageFix')}
									src={
										'images/campREST.JPG' || 'src/assets/images/campREST.JPG'
									}
									alt="Camper CRUD example"
								/>
							</Carousel>
						</Grid>
						<Grid item lg={8}>
							<Grid container>
								<Grid item lg={6}>
									<div className={classes.list}>
										<Typography variant="h4">Features</Typography>
										<Divider className={classes.listDivider} />
										<List>
											<ListItem alignItems="flex-start">
												<ListItemText
													primary={
														<>
															<Typography
																className={classes.listHeader}
																display="inline"
																variant="h6">
																CRUD -{' '}
															</Typography>
															<Typography display="inline" variant="subtitle1">
																Has advanced Create, Read, Update, and Destroy
																functionality in both campground, and comment
																models
															</Typography>
														</>
													}
												/>
											</ListItem>
											<Divider
												variant="inset"
												component="li"
												className={classes.listDivider}
											/>
											<ListItem alignItems="flex-start">
												<ListItemText
													primary={
														<>
															<Typography
																className={classes.listHeader}
																display="inline"
																variant="h6">
																CRUD -{' '}
															</Typography>
															<Typography display="inline" variant="subtitle1">
																Has advanced Create, Read, Update, and Destroy
																functionality in both campground, and comment
																models
															</Typography>
														</>
													}
												/>
											</ListItem>
											<Divider
												variant="inset"
												component="li"
												className={classes.listDivider}
											/>
											<ListItem alignItems="flex-start">
												<ListItemText
													primary={
														<>
															<Typography
																className={classes.listHeader}
																display="inline"
																variant="h6">
																CRUD -{' '}
															</Typography>
															<Typography display="inline" variant="subtitle1">
																Has advanced Create, Read, Update, and Destroy
																functionality in both campground, and comment
																models
															</Typography>
														</>
													}
												/>
											</ListItem>
										</List>
									</div>
								</Grid>
								<Grid item lg={6}>
									<div className={classes.list}>
										<Typography variant="h4">Challenges</Typography>
										<Divider className={classes.listDivider} />
										<List>
											<ListItem alignItems="flex-start">
												<ListItemText
													primary={
														<>
															<Typography
																className={classes.listHeader}
																display="inline"
																variant="h6">
																CRUD -{' '}
															</Typography>
															<Typography display="inline" variant="subtitle1">
																Has advanced Create, Read, Update, and Destroy
																functionality in both campground, and comment
																models
															</Typography>
														</>
													}
												/>
											</ListItem>
											<Divider
												variant="inset"
												component="li"
												className={classes.listDivider}
											/>
											<ListItem alignItems="flex-start">
												<ListItemText
													primary={
														<>
															<Typography
																className={classes.listHeader}
																display="inline"
																variant="h6">
																CRUD -{' '}
															</Typography>
															<Typography display="inline" variant="subtitle1">
																Has advanced Create, Read, Update, and Destroy
																functionality in both campground, and comment
																models
															</Typography>
														</>
													}
												/>
											</ListItem>
											<Divider
												variant="inset"
												component="li"
												className={classes.listDivider}
											/>
											<ListItem alignItems="flex-start">
												<ListItemText
													primary={
														<>
															<Typography
																className={classes.listHeader}
																display="inline"
																variant="h6">
																CRUD -{' '}
															</Typography>
															<Typography display="inline" variant="subtitle1">
																Has advanced Create, Read, Update, and Destroy
																functionality in both campground, and comment
																models
															</Typography>
														</>
													}
												/>
											</ListItem>
										</List>
									</div>
								</Grid>
							</Grid>
						</Grid>
						<Grid item lg={12}>
							<Typography variant="h4">Description</Typography>
							<Divider
								className={classes.listDivider}
								style={{ width: '20rem', marginBottom: '1rem' }}
							/>
							<Typography variant="subtitle1">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Phasellus tortor ante, euismod ut sodales eget, laoreet sit amet
								neque. Nam condimentum mi orci, et pulvinar leo finibus eu.
								Donec at risus justo. Maecenas posuere porta dui, ut mattis diam
								laoreet maximus. Donec sed tortor lectus. Nam urna augue,
								pretium quis nunc in, maximus aliquam erat. Vivamus risus enim,
								placerat ut tellus ac, placerat euismod augue. Duis quis dolor
								justo. Morbi bibendum, felis eget tristique tempus, augue neque
								ultricies nibh, in pharetra nisi orci id lorem. Class aptent
								taciti sociosqu ad litora torquent per conubia nostra, per
								inceptos himenaeos. Sed maximus consectetur tempor. Ut
								ultricies, lectus ac vestibulum lobortis, dolor nisi euismod
								lectus, vel semper nisl justo sit amet velit. Praesent risus
								purus, euismod convallis eros eget, sagittis accumsan lorem.
								Nullam dolor urna, porttitor ut turpis eu, semper lacinia lorem.
								Maecenas sit amet tellus eget sapien mollis vehicula.
							</Typography>
						</Grid>
					</Grid>
				</div>
			</Modal>
		</>
	);
}

const mapStateToProps = state => {
	return { modal: state.modal };
};

export default connect(mapStateToProps, actions)(CamperModal);
