import { Card, CardBody, Row, Button } from 'reactstrap';

import './scheduleinfo.scss';

export default function ScheduleInfo({ setShowMore, schedule, setSelectedDay }) {

	return (
	<Row className='card-container'>
		{schedule && schedule.map((info) => (
			<Card
				key={info.day}
				className='itinerary-card p-5 position-relative'
			>	
				<CardBody>
					<p>Day {info.day}</p>
					<h4 className='fw-bold'>{info.title}</h4>
					<p className='position-absolute bottom-0 start-0 ps-5'>{info.date}</p>
					<Button
						className='more-info-btn position-absolute top-0 end-0 mt-4'
						onClick={() => {
							setSelectedDay(info.day)
							setShowMore(true);
						}}
					>
						<i className='bi bi-chevron-double-right me-2' />
						<strong>Details</strong>
						<i className='bi bi-chevron-double-right me-2' />
						
					</Button>
				</CardBody>
			</Card>
		))}
	</Row>
	)
}
