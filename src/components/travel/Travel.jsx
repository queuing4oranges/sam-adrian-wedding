import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

import './travel.scss';
import TravelPrague from './TravelPrague';
import TravelCottage from './TravelCottage';

export default function Travel() {
	const [activeSection, setActiveSection] = useState('showPrague');
	const [activePragueView, setActivePragueView] = useState(null);

	// Define array of buttons with labels and associated state keys
	const buttons = [
		{ label: 'Prague', state: 'showPrague'},
		{ label: 'Cottage', state: 'showCottage'}
	]

	// Function to handle button
	const handleClick = (stateKey) => {
		setActiveSection(stateKey);
		setActivePragueView(null); // Reset TravelPrague when switching sections
	}

	return (
		<Container
			fluid
			className='travel-container w-100 min-vh-100 pb-5 px-lg-5 mb-5'
		>
			<Row className='pt-5'>
				<h1 className='pt-5 px-5 text-center'>Travel and Accomodation</h1>
			</Row>
			<Row className='h-100 pt-5 d-flex justify-content-center'>
				<Col xl='1' className='h-100 d-flex flex-row flex-xl-column justify-content-center align-items-center mb-3'>
					{buttons.map(({label, state}) => (
						<button
							key={state}
							className={`round-title d-flex justify-content-center align-items-center m-2 ${ (activeSection === state) ? 'active-btn' : 'inactive-btn'}`}
							onClick={() => {handleClick(state)}}
						>
							<p className='m-0 fw-bolder'>{label}</p>
						</button>
					))}
				</Col>
				<Col md='11'>
					{(activeSection === 'showPrague')
						? <TravelPrague
							activeView={activePragueView}
                            setActiveView={setActivePragueView}
						/>
						: (activeSection === 'showCottage')
							? <TravelCottage />
							: null
					}
				</Col>
			</Row>
		</Container>
	);
}
