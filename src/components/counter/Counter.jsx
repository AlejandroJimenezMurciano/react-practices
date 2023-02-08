//hacer que al pasarse de 10 vuelva a 0 y si baja de 0 vaya a 10
import { useState } from 'react';

const Counter = () => {
	const [count, setCount] = useState(0); //esta linea se encarga de guardar el valor actual del estado (cuanto vale y cuanto quiero que valga)
	return (
		<>
			<button onClick={() => decrement(count, setCount)}>Decrement</button>
			<h2>{count}</h2>
			<button onClick={() => increment(count, setCount)}>Increment</button>
		</>
	);
};

const increment = (count, setCount) => {
	setCount(count + 1); //Aquí en este increment esta lo que vale count y cambiamos lo que es setCount + 1 para que vaya incrementando de 1 en 1
};

const decrement = (count, setCount) => {
	setCount(count - 1);
};

export default Counter;
