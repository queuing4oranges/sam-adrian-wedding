import { useState } from 'react';
import { Container, Row, Col, Card } from 'reactstrap';

import './travel.scss';

export default function Travel() {
	const [showPrague, setShowPrague] = useState(false);
	const [showCottage, setShowCottage] = useState(false);

	return (
		<Container
			fluid
			id='travel'
			className='travel-container w-100 h-100 pb-5 px-5'
		>
			<Row className='pt-5'>
				<h1 className='pt-5 px-5 text-center'>Travel and Accomodation</h1>
			</Row>
			<Row className='h-100 pt-5'>
				<Col md='2' className='d-flex flex-column justify-content-start align-items-center h-100'>
					<button
						className='round-title d-flex justify-content-center align-items-center mb-2'
						onClick={() => {
							setShowCottage(false);
							setShowPrague(true);
						}}
					>
						<h3>Prague</h3>
					</button>
					<button
						className='round-title d-flex justify-content-center align-items-center mt-2'
						onClick={() => {
							setShowPrague(false);
							setShowCottage(true);
						}}
					>
						<h3>Cottage</h3>
					</button>
				</Col>
				<Col md='10'>
					{showPrague &&
						<Card className='prague-info-card'>
							This is the info about Praha.
						</Card>
					}
					{showCottage &&
						<Card className='cottage-info-card'>
							This is the info about the cottage.
						</Card>
					}
				</Col>
			</Row>
		</Container>
	)
}
