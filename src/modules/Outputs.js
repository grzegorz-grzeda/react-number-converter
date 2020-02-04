import React from 'react';
import Output from './Output';
import './Outputs.css';

function Outputs({ number }) {
	const radixes = [2, 8, 10, 16];

	const parts = radixes.map((radix) =>
		<li key={radix}>
			<Output number={number} radix={radix} />
		</li>
	);

	return (
		<div className="Outputs">
			<ul>
				{parts}
			</ul>
		</div>
	);
}

export default Outputs;