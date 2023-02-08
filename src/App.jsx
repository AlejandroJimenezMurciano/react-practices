import SayHello from './components/sayHello/SayHello';
import CalculateSquareArea from './components/calculateSquareArea/CalculateSquareArea';
import CalculateTriangleArea from './components/calculateTriangleArea/CalculateTriangleArea';
import Counter from './components/counter/Counter';
import Counter2 from './components/counter2/Counter2';
import Input from './components/input/Input';
import TextSlide from './components/textSlide/TextSlide';

const App = () => {
	return (
		<>
			<SayHello name='Tu nombre' />
			<CalculateSquareArea lado='2' />
			<CalculateTriangleArea base='10' altura='20' />
			<Counter />
			<Counter2 />
			<Input />
			<TextSlide />
		</>
	);
};

export default App;
