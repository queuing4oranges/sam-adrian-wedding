import './App.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './components/navbar/Navbar';
import Welcome from './components/welcome/Welcome';
import Details from './components/details/Details';
import Itinerary from './components/itinerary/Itinerary';

function App() {

	return (
		<>
			<Navbar />
			<Welcome />
			<Details />
			<Itinerary />
		</>
	)
}

export default App
