import { Card, CardBody, Row } from 'reactstrap';

import './scheduleinfo.scss';

export default function ScheduleInfo({ setShowMore, schedule, setSelectedDay }) {

	return (
	<Row className='card-container grid'>
		{schedule && schedule.map((info) => (
			<Card
				key={info.day}
				className='itinerary-card p-5 position-relative'
				onClick={() => {
					setSelectedDay(info.day)
					setShowMore(true);
				}}
			>	
				<CardBody className='ps-0'>
					<p>Day {info.day}</p>
					<h5 className='fw-bold'>{info.title}</h5>
					<p className='position-absolute bottom-0 start-0 ps-5'>{info.date}</p>
				</CardBody>
			</Card>
		))}
	</Row>
	)
}
