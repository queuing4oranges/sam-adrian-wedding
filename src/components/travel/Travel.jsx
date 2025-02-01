import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

import './travel.scss';
import TravelPrague from './TravelPrague';
import TravelCottage from './TravelCottage';

export default function Travel() {
	const [showPrague, setShowPrague] = useState(false);
	const [showCottage, setShowCottage] = useState(false);
	const [showHoods, setShowHoods] = useState(false);

	return (
		<Container
			fluid
			id='travel'
			className='travel-container w-100 h-100 pb-5 px-5 mb-5'
		>
			<Row className='pt-5'>
				<h1 className='pt-5 px-5 text-center'>Travel and Accomodation</h1>
			</Row>
			<Row className='h-100 pt-5'>
				<Col md='1' className='d-flex flex-column justify-content-start align-items-center h-100'>
					<button
						className={`round-title d-flex justify-content-center align-items-center mb-2 ${showPrague ? 'active-btn' : 'inactive-btn'}`}
						onClick={() => {
							setShowCottage(false);
							setShowPrague(true);
							setShowHoods(false);
						}}
					>
						<h3>Prague</h3>
					</button>
					<button
						className={`round-title d-flex justify-content-center align-items-center mt-2 ${showCottage ? 'active-btn' : 'inactive-btn'}`}
						onClick={() => {
							setShowPrague(false);
							setShowCottage(true);
							setShowHoods(false);
						}}
					>
						<h3>Cottage</h3>
					</button>
				</Col>
				<Col md='11'>
				{/* TODO show prague as default */}
					{showPrague
						? <TravelPrague showHoods={showHoods} setShowHoods={setShowHoods} />
						: showCottage
							? <TravelCottage />
							: null
					}
				</Col>
			</Row>
		</Container>
	)
}
