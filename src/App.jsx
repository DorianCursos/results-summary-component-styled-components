import CardResults from './components/card-results/CardResults';
import CardSummary from './components/card-summary/CardSummary';
import Cards from './components/cards/Cards';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<div>
			<GlobalStyles />
			<h1>Curso de React</h1>
			<Cards>
				<CardResults />
				<CardSummary />
			</Cards>
		</div>
	);
};

export default App;
