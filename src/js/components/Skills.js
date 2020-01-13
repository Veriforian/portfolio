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
import '../../assets/images/css.png';
import '../../assets/images/html.png';
import '../../assets/images/js.svg';
import '../../assets/images/react.png';
import '../../assets/images/redux.svg';
import '../../assets/images/express.svg';
import '../../assets/images/mysql.svg';
import '../../assets/images/passport.png';
import '../../assets/images/mongodb.png';
import '../../assets/images/nodejs.svg';
import '../../assets/images/jest.svg';
import '../../assets/images/git.svg';
import '../../assets/images/circleci.png';
import '../../assets/images/scrum.png';
import '../../assets/images/typescript.svg';

function Skills() {
	const classes = skillsStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={5} justify="center" alignItems="center">
				<Grid className={classes.container} item xs={12} sm={6} lg={4}>
					<div className={classes.list}>
						<Typography variant="h3">Front End</Typography>
						<Divider className={classes.divider} />
						<List>
							<ListItem>
								<img
									className={classes.logo}
									src={'images/react.png' || 'src/assets/images/react.png'}
									alt="react logo"
								/>
								<ListItemText primary="React" />
							</ListItem>
							<Divider className={classes.listDivider} />
							<ListItem>
								<img
									className={classes.logo}
									src={'images/redux.svg' || 'src/assets/images/redux.svg'}
									alt="redux logo"
								/>
								<ListItemText primary="Redux" />
							</ListItem>
							<Divider className={classes.listDivider} />
							<ListItem>
								<img
									className={classes.logo}
									src={'images/html.png' || 'src/assets/images/html.png'}
									alt="html logo"
								/>
								<ListItemText primary="Html" />
							</ListItem>
							<Divider className={classes.listDivider} />
							<ListItem>
								<img
									className={classes.logo}
									src={'images/css.png' || 'src/assets/images/css.png'}
									alt="css logo"
								/>
								<ListItemText primary="Css/Scss" />
							</ListItem>
							<Divider className={classes.listDivider} />
							<ListItem>
								<img
									className={classes.logo}
									src={'images/js.svg' || 'src/assets/images/js.svg'}
									alt="javascript logo"
								/>
								<ListItemText primary="Javascript" />
							</ListItem>
						</List>
					</div>
				</Grid>
				<Grid className={classes.container} item xs={12} sm={6} lg={4}>
					<div className={classes.list}>
						<Typography variant="h3">Back End</Typography>
						<Divider className={classes.divider} />
						<List>
							<ListItem>
								<img
									className={classes.logo}
									src={'images/nodejs.svg' || 'src/assets/images/nodejs.svg'}
									alt="node.js logo"
								/>
								<ListItemText primary="Node.js" />
							</ListItem>
							<Divider className={classes.listDivider} />
							<ListItem>
								<img
									className={classes.logo}
									src={'images/mongodb.png' || 'src/assets/images/mongodb.png'}
									alt="mongo db logo"
								/>
								<ListItemText primary="MongoDB" />
							</ListItem>
							<Divider className={classes.listDivider} />
							<ListItem>
								<img
									className={classes.logo}
									src={'images/express.svg' || 'src/assets/images/express.svg'}
									alt="express logo"
								/>
								<ListItemText primary="Express" />
							</ListItem>
							<Divider className={classes.listDivider} />
							<ListItem>
								<img
									className={classes.logo}
									src={'images/mysql.svg' || 'src/assets/images/mysql.svg'}
									alt="mysql logo"
								/>
								<ListItemText primary="MySQL" />
							</ListItem>
							<Divider className={classes.listDivider} />
							<ListItem>
								<img
									className={classes.logo}
									src={
										'images/passport.png' || 'src/assets/images/passport.png'
									}
									alt="javascript logo"
								/>
								<ListItemText primary="Passport.js" />
							</ListItem>
						</List>
					</div>
				</Grid>
				<Grid className={classes.container} item xs={12} sm={6} lg={4}>
					<div className={classes.list}>
						<Typography variant="h3">Misc.</Typography>
						<Divider className={classes.divider} />
						<List>
							<ListItem>
								<img
									className={classes.logo}
									src={'images/jest.svg' || 'src/assets/images/jest.svg'}
									alt="jest logo"
								/>
								<ListItemText primary="Jest/Enzyme Unit/Integrated Testing" />
							</ListItem>
							<Divider className={classes.listDivider} />
							<ListItem>
								<img
									className={classes.logo}
									src={'images/git.svg' || 'src/assets/images/git.svg'}
									alt="git logo"
								/>
								<ListItemText primary="Git/Version Control" />
							</ListItem>
							<Divider className={classes.listDivider} />
							<ListItem>
								<img
									className={classes.logo}
									src={
										'images/circleci.png' || 'src/assets/images/circleci.png'
									}
									alt="circle ci logo"
								/>
								<ListItemText primary="CircleCI" />
							</ListItem>
							<Divider className={classes.listDivider} />
							<ListItem>
								<img
									className={classes.logo}
									src={'images/scrum.png' || 'src/assets/images/scrum.png'}
									alt="scrum logo"
								/>
								<ListItemText primary="Scrum/Agile Workflow" />
							</ListItem>
							<Divider className={classes.listDivider} />
							<ListItem>
								<img
									className={classes.logo}
									src={
										'images/typescript.svg' ||
										'src/assets/images/typescript.svg'
									}
									alt="typescript logo"
								/>
								<ListItemText primary="TypeScript" />
							</ListItem>
						</List>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}

export default changeNav(Skills, 2);
