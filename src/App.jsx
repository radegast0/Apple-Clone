import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Navbar from './components/Navbar';
import Model from './components/Model';
import './styles/index.css';

const App = () => {
	return (
		<main className='bg-black'>
			<Navbar />
			<Hero />
			<Model />
			<Highlights />
		</main>
	);
};

export default App;
