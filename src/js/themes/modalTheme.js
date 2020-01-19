import { makeStyles } from '@material-ui/core/styles';

const modalStyles = makeStyles(theme => ({
	root: {
		overflowY: 'scroll',
		position: 'fixed',
		top: '50%',
		left: '50%'
	},
	closeIcon: { float: 'right', color: '#f50057' },
	title: { display: 'flex', justifyContent: 'center' },
	divider: { marginBottom: '2rem', backgroundColor: '#f5f5f5' },
	listDivider: { backgroundColor: '#f5f5f5' },
	content: {
		padding: '1rem',
		outline: 'none',
		backgroundColor: '#212121',
		border: '1px solid #f5f5f5',
		color: '#f5f5f5',
		borderRadius: '2%'
	},
	list: {
		color: '#f5f5f5 !important',
		marginLeft: '1rem',
		marginRight: '1rem'
	},
	listHeader: { color: '#f50057' },
	image: {
		height: '15rem',
		width: 'auto',
		border: '1px solid #f50057',
		borderRadius: '5%',
		marginRight: '2rem'
	}
}));

export default modalStyles;
