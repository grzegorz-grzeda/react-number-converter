import React from 'react';
import './Output.css';

function Output({ number, radix }) {
	return (
		<div className="Output">
			<h2>Base{radix}</h2>
			<h3>{number.toString(radix)}</h3>
		</div>
	);
}

export default Output;