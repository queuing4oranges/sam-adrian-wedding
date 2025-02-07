import { Container, Row, Col } from 'reactstrap';

import './welcome.scss';
import '../../components/button55.scss';

export default function Welcome() {

	return (
		<Container fluid id='welcome' className='welcome-container w-100 h-100 px-0 position-relative'>
			<Row className='pt-5 w-75 mx-auto'>
				<span className='sam-adrian text-center'>Sam & Adrian</span>
			</Row>
			<Row className='w-100 d-flex' style={{ margin: 'auto'}}>
				<Col className='mx-auto p-4'>
					<h1 className='text-center'>Join Us for an Unforgettable Wedding Celebration in Prague!</h1>
					<br />
					<h2 className='text-center'>You are formally invited to join us in a celebration of love, laughter, and adventure.</h2>
				</Col>
			</Row>
			<Row className='w-50 mx-auto'>
				<span className='text-center mt-5'>
					<button className='button-55 welcome-rsvp-btn' role='button' title='Let&apos;s go!'>
						<a href='https://docs.google.com/forms/d/e/1FAIpQLSeb96PN2yCs9EsAPzcfAT0wC8Y9TrquhyJWD7JDcFU-VWp8bw/viewform' target='_blank' className='text-decoration-none text-dark'>
							RSVP
						</a>
					</button>
				</span>
			</Row>
		</Container>
	)
}
