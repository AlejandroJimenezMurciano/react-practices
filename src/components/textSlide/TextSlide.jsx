const TextSlide = () => {
	const [count, setCount] = useState(INFO[0]);
	return (
		<>
			<button onClick={() => previous(count, setCount)}>Previous</button>
			<h1>a</h1>
			<p>a</p>
			<button onClick={() => next(count, setCount)}>Next</button>
		</>
	);
};

const next = (count, setCount) => {
	setCount(count + 1);
};

const previous = (count, setCount) => {
	setCount(count - 1);
};

const show = (next, previous) => {};

const INFO = [
	{
		title: 'Title 1',
		description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. '
	},
	{
		title: 'Title 2',
		description: 'Cumque libero quos accusantium deleniti vitae odio. '
	},
	{
		title: 'Title 3',
		description: 'doloribus voluptatibus in ducimus ad qui. '
	},
	{
		title: 'Title 4',
		description: 'eius nobis delectus dolorum. '
	},
	{
		title: 'Title 5',
		description: 'quas explicabo inventore! Minima, iure. '
	}
];

export default TextSlide;
