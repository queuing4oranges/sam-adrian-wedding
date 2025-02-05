import { Container, Row, Col, Card } from 'reactstrap';

import Akkordeon from './Akkordeon';
import LayingDoodle from '../../assets/svgs/LayingDoodle';

import './faq.scss';

export default function faq() {
	const rainbowColors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8B00FF'];

	return (
		<Container
			fluid
			id='faq'
			className='faq-container w-100 p-5'
		>
			<Row className='pt-5 px-5'>
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
			<Row className='px-5'>
				<Card id='rsvp'>
					<Row>
						<span className='doodle-span d-flex justify-content-center'>
							<LayingDoodle />
						</span>
					</Row>
					<Row>
						<Col md='4' className='p-5'>
							<p>
								Please feel free to contact us if you have additional questions.
							</p>
							<div className="btn-wrapper">
								<span className='span-container'>
									<span>
										<i className='pe-2 bi bi-envelope-heart' />
										Email us!
									</span>
								</span>
							</div>
						</Col>
						<Col md='4' className='p-5'>
							<p>
								Please RSVP by August, 10 to help us finalize arrangements. <br /> Incase you missed it above here, again, the RSVP form:
							</p>
						</Col>
						<Col md='4' className='p-5 text-end'>
							<p>
								Join us in celebrating! Save the date to your calendar.
							</p>
							<div className="btn-wrapper d-flex justify-content-end">
								<span className='span-container'>
									<span>
										<i className='pe-2 bi bi-envelope-heart' />
										Email us!
									</span>
								</span>
							</div>
						</Col>
					</Row>
					<div className='d-flex justify-content-center pb-5'>
						{/* Flickering chevrons */}
						<div className='d-flex align-items-center gap-1 chevron-container'>
							{rainbowColors.map((color, idx) => (
								<span key={idx} className='pe-2'>
									<i
										className='bi bi-chevron-right chevron'
										style={{ color, animationDelay: `${idx * 0.1}s` }}
									/>
								</span>
							))}

							<button className='rsvp-btn'>
								<a href='https://docs.google.com/forms/d/e/1FAIpQLSeb96PN2yCs9EsAPzcfAT0wC8Y9TrquhyJWD7JDcFU-VWp8bw/viewform' target='_blank' className='text-decoration-none'>
									<i className='bi bi-chevron-double-right me-2' />
									RSVP
								</a>
							</button>
							{rainbowColors.map((color, idx) => (
								<span key={idx} className='ps-2'>
									<i
										className='bi bi-chevron-left chevron'
										style={{ color, animationDelay: `${idx * 0.1}s` }}
									/>
								</span>
							))}
						</div>
					</div>
				</Card>
			</Row>
		</Container>
	)
}
