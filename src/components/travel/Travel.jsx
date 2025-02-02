import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

import './travel.scss';
import TravelPrague from './TravelPrague';
import TravelCottage from './TravelCottage';

export default function Travel() {
	const [activeSection, setActiveSection] = useState('showPrague'); // Show Prague as default on first render
	const [showHoods, setShowHoods] = useState(false);
	const [showMhd, setShowMhd] = useState(false);

	// Define array of buttons with labels and associated state keys
	const buttons = [
		{ label: 'Prague', state: 'showPrague'},
		{ label: 'Cottage', state: 'showCottage'}
	]

	// Function to handle button
	const handleClick = (stateKey) => {
		setActiveSection(stateKey);
		setShowHoods(false);
		setShowMhd(false);
	}

	return (
		<Container
			fluid
			id='travel'
			className='travel-container w-100 pb-5 px-5 mb-5'
		>
			<Row className='pt-5'>
				<h1 className='pt-5 px-5 text-center'>Travel and Accomodation</h1>
			</Row>
			<Row className='h-100 pt-5'>
				<Col md='1' className='d-flex flex-column justify-content-start align-items-center h-100'>
					{buttons.map(({label, state}) => (
						<button
							key={state}
							className={`round-title d-flex justify-content-center align-items-center my-2 ${ (activeSection === state) ? 'active-btn' : 'inactive-btn'}`}
							onClick={() => {handleClick(state)}}
						>
							<p className='m-0 fw-bolder'>{label}</p>
						</button>
					))}
				</Col>
				<Col md='11'>
					{(activeSection === 'showPrague')
						? <TravelPrague
							showHoods={showHoods}
							setShowHoods={setShowHoods}
							showMhd={showMhd}
							setShowMhd={setShowMhd}
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
