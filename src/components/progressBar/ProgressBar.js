import React from "react";

const ProgressBar = ({ completed, bgcolor }) => {
	if (completed > 1000) {
		completed = completed / 90;
	}
	if (completed > 100) {
		completed = completed / 10;
	}
	const containerStyles = {
		height: 5,
		width: "100%",
		backgroundColor: "#e0e0de",
		borderRadius: 50,
	};

	const fillerStyles = {
		height: "100%",
		width: `${completed}%`,
		backgroundColor: bgcolor,
		borderRadius: "inherit",
		textAlign: "right",
	};

	const labelStyles = {
		padding: 5,
		color: "white",
		fontWeight: "bold",
	};
	return (
		<div style={containerStyles}>
			<div style={fillerStyles}>
				<span style={labelStyles}></span>
			</div>
		</div>
	);
};

export default ProgressBar;
