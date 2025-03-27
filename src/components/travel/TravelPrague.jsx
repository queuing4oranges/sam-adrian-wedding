import { Card, Button } from 'reactstrap';

import './travel.scss';
import Neighborhoods from './Neighborhoods.jsx';
import PublicTransport from './PublicTransport.jsx';
import PragueMap from './PragueMap.jsx';

export default function TravelPrague({ activeView, setActiveView }) {
	const handleCloseView = () => {
		setActiveView(null);
	};

	return (
		<Card className='border-0 p-2 prague-info-card'>
			{!activeView ? (
			<div className='mb-3'>
				<Button onClick={() => setActiveView('prague')}>Exploring Prague</Button>
				<Button onClick={() => setActiveView('hoods')}>Check out the neighborhoods</Button>
				<Button onClick={() => setActiveView('transport')}>Public Transport</Button>
			</div>
			) : null}

			{activeView === 'hoods' && <Neighborhoods setShowHoods={handleCloseView} />}
			{activeView === 'transport' && <PublicTransport setShowMhd={handleCloseView} />}
			{activeView === 'prague' && <PragueMap setShowPrague={handleCloseView} />}
		</Card>
	);
}
