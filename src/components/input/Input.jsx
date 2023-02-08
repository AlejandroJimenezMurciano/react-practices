import { useState } from 'react';

const Input = () => {
	const [something, setSomething] = useState('');
	return (
		<>
			<input value={something} onChange={(e)=> write(e.target.value,setSomething)}/>
			<h2>{something}</h2>
		</>
	);
};

const write = (something, setSomething) => {
	if(something === 'reset'){
		setSomething('')
	}
	else setSomething(something);
};

export default Input;
