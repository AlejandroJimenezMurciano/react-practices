import SayHello from "./components/sayHello/SayHello";
import CalculateSquareArea from "./components/calculateSquareArea/CalculateSquareArea";
import CalculateTriangleArea from "./components/calculateTriangleArea/CalculateTriangleArea";

const App = () => {
	return (
	<>
	<SayHello name='Tu nombre'/>
	<CalculateSquareArea lado='2'/>
	<CalculateTriangleArea base='10' altura='20'/>
	</>
	)
};

export default App;
