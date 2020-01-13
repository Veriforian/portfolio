import { makeStyles } from '@material-ui/core/styles';

const skillsStyles = makeStyles(theme => ({
	root: {
		marginTop: '6%',
		flexGrow: '1',
		display: 'flex',
		alignItems: 'center'
	},
	list: {
		color: '#f5f5f5',
		backgroundColor: '#212121',
		border: '1px solid #f5f5f5',
		width: 'auto',
		padding: '2rem',
		margin: 'auto 3%'
	},
	container: { maxWidth: '25rem' },
	divider: { backgroundColor: '#f5f5f5' },
	listDivider: { backgroundColor: 'rgba(245, 245, 245, 0.5)' },
	logo: { width: '3rem', height: '3rem', marginRight: '1rem' }
}));

export default skillsStyles;
