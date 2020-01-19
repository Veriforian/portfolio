// import React from 'react';
// import { useSpring, animated } from 'react-spring/web.cjs';
// import PropTypes from 'prop-types';

// const Fade = react.forwardRef(function Fade(props, ref) {
// 	const { in: open, children, onEnter, onExited, ...other } = props;
// 	const style = useSpring({
// 		from: { opacity: 0 },
// 		to: { opacity: open ? 1 : 0 },
// 		onStart: () => {
// 			if (open && onEnter) {
// 				onEnter();
// 			}
// 		},
// 		onRest: () => {
// 			if (!open && onExited) {
// 				onExited();
// 			}
// 		}
// 	});

// 	return (
// 		<animated.div ref={ref} style={style} {...other}>
// 			{children}
// 		</animated.div>
// 	);
// });

// export default Fade;