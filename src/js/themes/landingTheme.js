import { makeStyles } from '@material-ui/core/styles';

export const landingStyles = makeStyles(theme => ({
	intro: {
		height: '100%',
		paddingBottom: '16px',
		background:
			'url("../../assets/images/Webp.net-resizeimage-min.jpg") no-repeat center center fixed',
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
