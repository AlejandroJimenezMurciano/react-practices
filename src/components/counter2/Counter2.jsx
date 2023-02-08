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
	if (count > 10) setCount(0);
	else setCount + 1; //Aquí en este increment esta lo que vale count y cambiamos lo que es setCount + 1 para que vaya incrementando de 1 en 1
};

const decrement = (count, setCount) => {
	if (count < 0) setCount(10);
	else setCount - 1;
};

export default Counter;

/*
Poner lo de 'const [count, setCount] = useState(2)' es lo mismo que:
let count = 2
const setCount = newValue => {
    count = newValue
}
*/
