import { useEffect, useState } from 'react';
import { Row } from 'reactstrap';

import './animatedheading.scss';

export default function AnimatedHeading() {
	const [animationTriggered, setAnimationTriggered] = useState(false);

	useEffect(() => {
		const typewriterText = document.querySelector('.typewriter-text');

		const handleScrollAnimation = (entries, observer) => {
			entries.forEach(entry => {
				if(entry.isIntersecting && !animationTriggered) {
					// Add classes to trigger animation
					entry.target.classList.add('typewriter-animation');
					entry.target.classList.add('cursor');
					setAnimationTriggered(true);
					observer.unobserve(entry.target); // Stop observing after animation starts
				}
			});
		};

		// Create IntersectionObserver instance
		const observer = new IntersectionObserver(handleScrollAnimation, {
			root: null, // Viewport
			threshold: 0.2 // Trigger when 20% of element is in the view
		});

		if (typewriterText) {
			// Start observing the target element
			observer.observe(typewriterText);
		}

		return () =>{
			if (typewriterText) {
				observer.unobserve(typewriterText);
				setAnimationTriggered(false);
			}
		}		
	},[animationTriggered])

	return (
		<p className='typewriter-text mt-5 fw-bold'>
			Monday, September 8 - Friday, September 12
		</p>
	)
}
