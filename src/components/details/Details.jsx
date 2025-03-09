import { Container, Row } from 'reactstrap';

import CountdownTimer from './components/CountdownTimer.jsx';
import AnimatedHeading from './components/AnimatedHeading.jsx';
import SlideShow from './components/SlideShow.jsx';

import './details.scss';

export default function Details() {
	const targetDate = '2025-09-08T00:01:00';

	return (
		<Container fluid className='details-container w-100 min-vh-100 p-5 p-sm-3 p-xs-2'>
			<Row className='m-0 p-0 text-wrap'>
				<AnimatedHeading />
			</Row>
			<Row className='d-flex justify-content-center' style={{height: '15rem'}}>
				<CountdownTimer targetDate={targetDate}/>
			</Row>
			<Row className='my-2 my-md-5'>
				<span className='details-text'>
					<p className='text-left text-center'>
						<i className='bi bi-airplane me-2'/>
						Monday mandatory for the friends flying in, for the Prague locals we will begin Tuesday.
					</p>
					<p className='text-right text-center'>
						Experience Prague, a cozy cottage in the woods, and themed parties with friends.
						<i className='bi bi-balloon-heart' />
					</p>
				</span>
			</Row>
			<Row className='d-flex align-items-center justify-content-center'>
				<SlideShow />
			</Row>
		</Container>
	)
}
