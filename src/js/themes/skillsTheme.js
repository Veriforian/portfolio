import { makeStyles } from '@material-ui/core/styles';

const skillsStyles = makeStyles(theme => ({
	root: { flexGrow: '1', margin: '2rem' },
	list: {
		color: '#f5f5f5',
		backgroundColor: '#212121',
		width: 'auto',
		padding: '2rem'
	},
	divider: { backgroundColor: '#f5f5f5' },
	listDivider: { backgroundColor: 'rgba(245, 245, 245, 0.5)' },
	logo: { width: '3rem', height: '3rem', marginRight: '1rem' }
}));

export default skillsStyles;
