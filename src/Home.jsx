import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import NavbarContainer from './components/navbar/Navbar';
import Welcome from './components/welcome/Welcome';
import Details from './components/details/Details';
import Itinerary from './components/itinerary/Itinerary';
import Faq from './components/faq/Faq';
import Travel from './components/travel/Travel';

export default function Home() {
	const location = useLocation();

	useEffect(() => {
	if (location.hash) {
		const sectionId = location.hash.replace('#', ''); // Remove '#' to match ID
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	}
	}, [location]);

	return (
		<div>
			<NavbarContainer />
			<section id='welcome'><Welcome /></section>
			<section id='details'><Details /></section>
			<section id='itinerary'><Itinerary /></section>
			<section id='travel'><Travel /></section>
			<section id='faq'><Faq /></section>
		</div>
	);
}
