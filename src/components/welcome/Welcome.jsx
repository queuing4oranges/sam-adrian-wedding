import { Container, Row, Col } from 'reactstrap';

import './welcome.scss';
import '../../components/button55.scss';

export default function Welcome() {

	return (
		<Container fluid className='welcome-container w-100 min-vh-100 px-0 position-relative d-flex flex-column align-items-center justify-content-center'>
			<Row className='pt-5 w-100 d-flex justify-content-center'>
				<Col xs={12} md={8} className='text-center'>
					<span className='sam-adrian d-flex justify-content-center fw-semibold'>Sam & Adrian</span>
				</Col>
			</Row>
			<Row className='w-100 d-flex justify-content-center'>
				<Col xs={12} md={10} lg={8} className='mx-auto p-4'>
					<h1 className='text-center fs-1 fw-bold'>Join Us for an Unforgettable Wedding Celebration in Prague!</h1>
					<br />
					<h2 className='text-center fs-3 fw-bold mt-3'>You are formally invited to join us in a celebration of love, laughter, and adventure.</h2>
				</Col>
			</Row>
			<Row className='d-flex justify-content-center'>
				<Col xs={12} md={12} className='text-center'>
					<a href='https://docs.google.com/forms/d/e/1FAIpQLSeb96PN2yCs9EsAPzcfAT0wC8Y9TrquhyJWD7JDcFU-VWp8bw/viewform' target='_blank' className='text-decoration-none text-dark'>
						<button className='button-55 welcome-rsvp-btn' role='button' title='Let&apos;s go!'>
							RSVP
						</button>
					</a>
				</Col>
			</Row>
		</Container>
	)
}
