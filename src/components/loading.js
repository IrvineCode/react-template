import React from 'react';

const Loading = () => {
	return (
		<div
			style={{
				position: 'absolute',
				left: 0,
				top: 0,
				width: '100%',
				height: '100vh',
				background: 'black',
				color: 'white',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				fontSize: '20px',
				flexDirection: 'column',
                opacity: 0.7,
                zIndex: 10
			}}
		>
			<p>
				<i className="fas fa-spinner fa-spin" />
			</p>
			<p>Just a moment...</p>
		</div>
	);
};

export { Loading };
