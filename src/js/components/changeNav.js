import React from 'react';
import { connect } from 'react-redux';
import { changeNav } from '../actions';

export default (ChildComponent, place) => {
	class ComposedComponent extends React.Component {
		componentDidMount() {
			this.props.changeNav(place);
		}

		render() {
			return <ChildComponent {...this.props} />;
		}
	}

	const mapStateToProps = state => {
		return { nav: state.nav };
	};

	return connect(mapStateToProps, { changeNav })(ComposedComponent);
};
