import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import { Container, Row, Col } from 'reactstrap';

import './details.scss';
import CountdownTimer from './CountdownTimer';

export default function Details() {
	const AutoplaySlider = withAutoplay(AwesomeSlider);
	const targetDate = '2025-09-08T00:01:00';

	const slider = (
		<AutoplaySlider
			play={true} //TODO put back to true after the changes
			cancelOnInteraction={false}
			interval={3000}
			bullets={false}
			organicArrows={false}
			infinite={true}
		>
			<div data-src='../../src/assets/sam-and-adrian/1.png'/>
			<div data-src='../../src/assets/sam-and-adrian/2.png'/>
			<div data-src='../../src/assets/sam-and-adrian/3.png'/>
			<div data-src='../../src/assets/sam-and-adrian/4.png'/>
			<div data-src='../../src/assets/sam-and-adrian/5.png'/>
			<div data-src='../../src/assets/sam-and-adrian/6.png'/>
		</AutoplaySlider>
	)
	return (
		<Container fluid id='details' className='details-container w-100 pb-5 px-5'>
			<Row className='pt-5'>
				<h1 className='pt-5 px-5 text-center'>Monday, September 8 - Friday, September 12</h1>
				<p className='text-center pb-5'>
					(Monday mandatory for the friends flying in, for the Prague locals we will begin Tuesday.)
				</p>
			</Row>
			<Row className='w-100 mx-auto pb-5 px-5'>
				<Col md='6'>
					<Row className='w-75'>
						<p>Experience Prague, a cozy cottage in the woods, and themed parties with friends in...</p>
						<CountdownTimer targetDate={targetDate}/>
					</Row>
				</Col>
				<Col md='6'>
					<div className='w-100 h-100'>{slider}</div>
				</Col>
			</Row>
		</Container>
	)
}
