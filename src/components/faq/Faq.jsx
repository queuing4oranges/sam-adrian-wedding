import { Container, Row, Col, Card } from 'reactstrap';

import Akkordeon from './Akkordeon';
import LayingDoodle from '../../assets/svgs/LayingDoodle';

import './faq.scss';

export default function faq() {
	return (
		<Container
			fluid
			id='faq'
			className='faq-container w-100 p-5'
		>
			<Row className='pt-5'>
				<h1 className='px-5 text-center'>FAQ</h1>
			</Row>
			<Row className='py-5 w-50 mx-auto'>
				<Col>
					<Akkordeon />
				</Col>
			</Row>
			<Row className='py-5'>
				<h1 className='px-5 text-center'>RSVP</h1>
			</Row>
			<Row>
				<Card>
					<span style={{height: 'auto', width: '30rem'}}><LayingDoodle /></span>
					
					{/* rsvp button - link */}
					{/* email btn */}
					{/* add event to calendar */}
				</Card>
			</Row>
		</Container>
	)
}
