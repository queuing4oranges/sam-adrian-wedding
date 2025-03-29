import { Card, CardBody, Button } from 'reactstrap';

import './scheduleinfo.scss';

export default function ScheduleInfo({ setShowMore, schedule, setSelectedDay }) {

	return (
	<div className='card-container-grid'>
		{schedule && schedule.map((info) => (
			<Card
				title='Click for more info'
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
					<p className='position-absolute bottom-0 start-0 ps-1 ps-md-4 ps-lg-5'>{info.date}</p>
					<Button
						className='more-info-btn position-absolute top-0 end-0 mt-4'
						onClick={() => {
							setSelectedDay(info.day)
							setShowMore(true);
						}}
					>
						<i className='bi bi-chevron-double-right me-2' />
						<strong>Details</strong>
						<i className='bi bi-chevron-double-right ms-2' />
					</Button>
				</CardBody>
			</Card>
		))}
	</div>
	)
}
