import { makeStyles } from '@material-ui/core/styles';

const projectStyles = makeStyles(theme => ({
	media: {
		height: 0,
		paddingTop: '56.25%' // 16:9
	},
	content: {
		margin: '3rem'
	},
	card: {
		backgroundColor: '#212121',
		color: '#f5f5f5',
		border: '1px solid #f5f5f5'
	},
	divider: {
		backgroundColor: '#f5f5f5',
		marginBottom: '1rem'
	},
	icon: { marginRight: '.5rem' },
	gitButton: { color: '#f5f5f5', border: '1px solid #f5f5f5', flexGrow: '1' },
	urlButton: { color: '#00bcd4', border: '1px solid #00bcd4', flexGrow: '1' },
	moreButton: {
		display: 'block',
		color: '#f50057',
		border: '1px solid #f50057',
		flexGrow: '1'
	}
}));

export default projectStyles;
