import Navbar from './components/navbar/Navbar';
import Welcome from './components/welcome/Welcome';
import Details from './components/details/Details';
import Itinerary from './components/itinerary/Itinerary';
import Faq from './components/faq/Faq';
import Travel from './components/travel/Travel';

export default function Home() {
	return (
		<div>
			<Navbar />
			<section id='welcome'><Welcome /></section>
			<section id='details'><Details /></section>
			<section id='itinerary'><Itinerary /></section>
			<section id='travel'><Travel /></section>
			<section id='faq'><Faq /></section>
		</div>
	);
}
