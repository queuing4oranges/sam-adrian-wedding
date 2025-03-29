import { Card, CardBody } from 'reactstrap';

import './travel.scss';
import Neighborhoods from './Neighborhoods.jsx';
import PublicTransport from './PublicTransport.jsx';
import PragueMap from './PragueMap.jsx';

export default function TravelPrague({ activeView, setActiveView }) {
	const handleCloseView = () => {
		setActiveView(null);
	};

	return (
		<Card className='border-0 p-2 h-100'>
			{!activeView ? (
				<CardBody className='travel-button-container'>
					<button
						onClick={() => setActiveView('prague')}
						className='button-1'
					>
						Exploring Prague
					</button>
					<button
						onClick={() => setActiveView('hoods')}
						className='button-2'
					>
						Check out the neighborhoods
					</button>
					<button
						onClick={() => setActiveView('transport')}
						className='button-3'
					>
						Public Transport
					</button>
				</CardBody>
			) : null}
			{activeView === 'hoods' && <Neighborhoods setShowHoods={handleCloseView} />}
			{activeView === 'transport' && <PublicTransport setShowMhd={handleCloseView} />}
			{activeView === 'prague' && <PragueMap setShowPrague={handleCloseView} />}
		</Card>
	);
}
