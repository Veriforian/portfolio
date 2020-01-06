import React from 'react';
import {
	Grid,
	Typography,
	Divider,
	List,
	ListItem,
	ListItemText
} from '@material-ui/core';

import changeNav from './changeNav';
import skillsStyles from '../themes/skillsTheme';

function Skills() {
	const classes = skillsStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={3} justify="center" alignItems="center">
				<Grid item xs={12} sm={6} lg={4}>
					<div className={classes.list}>
						<Typography variant="h3">Front End</Typography>
						<Divider className={classes.divider} />
						<List>
							<ListItem>
								<img
									className={classes.logo}
									src="/src/assets/images/react.png"
									alt="react logo"
								/>
								<ListItemText primary="React" />
							</ListItem>
							<Divider className={classes.listDivider} />
							<ListItem>
								<img
									className={classes.logo}
									src="/src/assets/images/redux.svg"
									alt="redux logo"
								/>
								<ListItemText primary="Redux" />
							</ListItem>
							<Divider className={classes.listDivider} />
							<ListItem>
								<img
									className={classes.logo}
									src="/src/assets/images/html.png"
									alt="html logo"
								/>
								<ListItemText primary="Html" />
							</ListItem>
							<Divider className={classes.listDivider} />
							<ListItem>
								<img
									className={classes.logo}
									src="/src/assets/images/css.png"
									alt="css logo"
								/>
								<ListItemText primary="Css/Scss" />
							</ListItem>
							<Divider className={classes.listDivider} />
							<ListItem>
								<img
									className={classes.logo}
									src="/src/assets/images/js.svg"
									alt="javascript logo"
								/>
								<ListItemText primary="Javascript" />
							</ListItem>
						</List>
					</div>
				</Grid>
				<Grid item xs={12} sm={6} lg={4}>
					<div className={classes.list}>
						<Typography variant="h3">Front End</Typography>
						<Divider className={classes.divider} />
						<List>
							<ListItem>
								<img
									className={classes.logo}
									src="/src/assets/images/react.png"
									alt="react logo"
								/>
								<ListItemText primary="React" />
							</ListItem>
							<Divider className={classes.listDivider} />
							<ListItem>
								<img
									className={classes.logo}
									src="/src/assets/images/redux.svg"
									alt="redux logo"
								/>
								<ListItemText primary="Redux" />
							</ListItem>
							<Divider className={classes.listDivider} />
							<ListItem>
								<img
									className={classes.logo}
									src="/src/assets/images/html.png"
									alt="html logo"
								/>
								<ListItemText primary="Html" />
							</ListItem>
							<Divider className={classes.listDivider} />
							<ListItem>
								<img
									className={classes.logo}
									src="/src/assets/images/css.png"
									alt="css logo"
								/>
								<ListItemText primary="Css/Scss" />
							</ListItem>
							<Divider className={classes.listDivider} />
							<ListItem>
								<img
									className={classes.logo}
									src="/src/assets/images/js.svg"
									alt="javascript logo"
								/>
								<ListItemText primary="Javascript" />
							</ListItem>
						</List>
					</div>
				</Grid>
				<Grid item xs={12} sm={6} lg={4}>
					<div className={classes.list}>
						<Typography variant="h3">Front End</Typography>
						<Divider className={classes.divider} />
						<List>
							<ListItem>
								<img
									className={classes.logo}
									src="/src/assets/images/react.png"
									alt="react logo"
								/>
								<ListItemText primary="React" />
							</ListItem>
							<Divider className={classes.listDivider} />
							<ListItem>
								<img
									className={classes.logo}
									src="/src/assets/images/redux.svg"
									alt="redux logo"
								/>
								<ListItemText primary="Redux" />
							</ListItem>
							<Divider className={classes.listDivider} />
							<ListItem>
								<img
									className={classes.logo}
									src="/src/assets/images/html.png"
									alt="html logo"
								/>
								<ListItemText primary="Html" />
							</ListItem>
							<Divider className={classes.listDivider} />
							<ListItem>
								<img
									className={classes.logo}
									src="/src/assets/images/css.png"
									alt="css logo"
								/>
								<ListItemText primary="Css/Scss" />
							</ListItem>
							<Divider className={classes.listDivider} />
							<ListItem>
								<img
									className={classes.logo}
									src="/src/assets/images/js.svg"
									alt="javascript logo"
								/>
								<ListItemText primary="Javascript" />
							</ListItem>
						</List>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}

export default changeNav(Skills, 2);
