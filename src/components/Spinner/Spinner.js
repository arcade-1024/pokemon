import React from "react";
import "./Spinner.scss";
const Spinner = () => {
	return (
		<div className="Spinner">
			<div class="lds-ripple">
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Spinner;
