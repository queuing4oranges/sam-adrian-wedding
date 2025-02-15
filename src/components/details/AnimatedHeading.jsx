import { useEffect, useState } from 'react';

import './animatedheading.scss';

export default function AnimatedHeading() {
	const [animationTriggered, setAnimationTriggered] = useState(false);

	useEffect(() => {
		const animatedText = document.querySelector('.details-heading');

		const handleScrollAnimation = (entries, observer) => {
			entries.forEach(entry => {
				if(entry.isIntersecting && !animationTriggered) {
					// Add classes to trigger animation
					entry.target.classList.add('animated-text');
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

		if (animatedText) {
			// Start observing the target element
			observer.observe(animatedText);
		}

		return () =>{
			if (animatedText) {
				observer.unobserve(animatedText);
				setAnimationTriggered(false);
			}
		}		
	},[animationTriggered])

	return (
		<h1 className='details-heading fw-bold text-center'>
			Monday, September 8 - Friday, September 12
		</h1>
	);
}
