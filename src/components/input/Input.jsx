import { useState } from 'react';

const Input = () => {
	const [something, setSomething] = useState('');
	return (
		<>
			<input onSubmit={() => write(something, setSomething)}></input>
			<h2></h2>
		</>
	);
};

let setSomething = '';

const write = setSomething => {};

export default Input;
