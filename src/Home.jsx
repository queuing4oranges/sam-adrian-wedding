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

	// Scroll to section based on hash on initial render
	useEffect(() => {
		if (location.hash) {
			const sectionId = location.hash.replace('#', ''); // Remove '#' to match ID
			const section = document.getElementById(sectionId);
			if (section) {
				section.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}, [location]);

	// Set up Intersection Observer to update hash on scroll
	useEffect(() => {
		const sections = document.querySelectorAll('section[id]'); // Get all sections with IDs

		const observerOptions = {
			root: null, // Use the viewport as the root
			rootMargin: '0px',
			threshold: 0.5, // Trigger when 50% of the section is visible
		};

		const observerCallback = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const sectionId = entry.target.id;
					// Update the hash without adding a new history entry
					window.history.replaceState(null, '', `#${sectionId}`);
				}
			});
		};

		const observer = new IntersectionObserver(observerCallback, observerOptions);

		// Observe each section
		sections.forEach((section) => {
			observer.observe(section);
		});

		// Cleanup observer on unmount
		return () => {
			sections.forEach((section) => {
				observer.unobserve(section);
			});
		};

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
