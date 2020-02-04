import React from 'react';

function Input({ cb }) {
	const onChange = function (e) {
		cb(parseInt(e.target.value));
	}

	return (
		<div className="Input">
			<h2>Input</h2>
			<input onChange={onChange} type="number" min="0"></input>
		</div>
	);
}

export default Input;