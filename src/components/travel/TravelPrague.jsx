import { useState, useEffect, useRef } from 'react';
import { Card, CardBody } from 'reactstrap';

import './travel.scss';
import Neighborhoods from './Neighborhoods.jsx';
import PublicTransport from './PublicTransport.jsx';
import PragueMap from './PragueMap.jsx';

import './travelprague_animations.scss';

export default function TravelPrague({ activeView, setActiveView }) {
	const [isVisible, setIsVisible] = useState(false);
	const buttonRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) =>{
				const entry = entries[0];
				setIsVisible(entry.isIntersecting);
			},
			{ threshold: 0.3}
		);

		if (buttonRef.current) {
			observer.observe(buttonRef.current);
		}

		return () => {
			if (buttonRef.current) {
				observer.unobserve(buttonRef.current)
			}
		};
	}, []);

	const handleCloseView = () => {
		setActiveView(null);
	};

	return (
		<div ref={buttonRef}>
			<Card className='border-0 p-2 h-100'>
				{!activeView ? (
					<CardBody className='travel-button-container'>
						<button
							onClick={() => setActiveView('prague')}
							className={`button-1 ${isVisible ? 'slide-in-left' : '' }`}
						>
							Exploring Prague
						</button>
						<button
							onClick={() => setActiveView('hoods')}
							className={`button-2 ${isVisible ? 'slide-in-top' : '' }`}
						>
							Check out the neighborhoods
						</button>
						<button
							onClick={() => setActiveView('transport')}
							className={`button-3 ${isVisible ? 'slide-in-right' : '' }`}
						>
							Prague Public Transport
						</button>
					</CardBody>
				) : null}
				{activeView === 'hoods' && <Neighborhoods setShowHoods={handleCloseView} />}
				{activeView === 'transport' && <PublicTransport setShowMhd={handleCloseView} />}
				{activeView === 'prague' && <PragueMap setShowPrague={handleCloseView} />}
			</Card>
		</div>
	);
}
