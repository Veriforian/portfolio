import { makeStyles } from '@material-ui/core/styles';

const aboutStyles = makeStyles(theme => ({
	container: { height: '100%' },
	content: {
		backgroundColor: '#212121',
		border: '1px solid #f5f5f5',
		padding: '3rem',
		margin: '3rem'
	},
	text: { color: '#f5f5f5' },
	divider: { backgroundColor: '#f5f5f5', width: '14rem' },
	button: { margin: '1rem', border: '1px solid #f5f5f5', color: '#f5f5f5' },
	icon: { marginRight: '.5rem' }
}));

export default aboutStyles;
