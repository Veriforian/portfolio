import { makeStyles } from '@material-ui/core/styles';

import landingImg from '../../assets/images/landing.jpg';

export const landingStyles = makeStyles(theme => ({
	intro: {
		height: '100%',
		paddingBottom: '16px',
		background: `url(${'images/landing.jpg' ||
			'src/assets/images/landing.jpg'}) no-repeat center center fixed`,
		webkitBackgroundSize: 'cover',
		mozBackgroundSize: 'cover',
		oBackgroundSize: 'cover',
		backgroundSize: 'cover'
	},
	links: { marginBottom: '-4rem' },
	text: { color: '#EEE', textShadow: '3px 3px 3px #3A3A38' },
	center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%'
	},
	header: {
		marginBottom: '2rem'
	},
	flex: { marginTop: '1rem', display: 'flex', justifyContent: 'space-around' }
}));
