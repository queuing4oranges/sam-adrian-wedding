import { Container, Row, Col } from 'reactstrap';

import CountdownTimer from './components/CountdownTimer.jsx';
import SlideShow from './components/SlideShow.jsx';
import WavyHeading from './components/WavyHeading.jsx';

import './details.scss';

export default function Details() {
	const targetDate = '2025-09-08T00:01:00';

	return (
		<Container fluid className='details-container w-100 min-vh-100 py-5 px-0 d-flex align-items-center'>
			<Row className='details-row w-100 m-0 p-0'>
				<Col xs='12' lg='5' md='5' className='d-flex justify-content-center p-0'>
					<SlideShow />
				</Col>
				<Col xs='12' lg='7' md='7' className='h-100 p-3 d-flex flex-column justify-content-center'>
					<WavyHeading />
					<CountdownTimer targetDate={targetDate}/>
					<span>
						<p className='text-center m-0'>
							<i className='bi bi-airplane me-2'/>
							Monday mandatory for the friends flying in, for the Prague locals we will begin Tuesday.
						</p>
						<p className='text-center'>
							Experience Prague, a cozy cottage in the woods, and themed parties with friends.
							<i className='bi bi-balloon-heart' />
						</p>
					</span>
				</Col>
			</Row>
		</Container>
	)
}
