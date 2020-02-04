import React, { useState } from 'react';
import './App.css';
import Input from './modules/Input';
import Outputs from './modules/Outputs';

function App() {
	let [number, setNumber] = useState(0);

	const updateNumber = function (n) {
		setNumber(n);
	}

	return (
		<div className="App">
			<h1>Number converter</h1>
			<Input cb={updateNumber} />
			<Outputs number={number} />
		</div>
	);
}

export default App;
