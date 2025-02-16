import { useState } from 'react';

import { Container } from 'reactstrap';

import { itineraryData } from './itineraryData';
import SingleDayInfo from './SingleDayInfo';
import ScheduleInfo from './ScheduleInfo';

import './itinerary.scss';

export default function Itinerary() {
	const [schedule] = useState(itineraryData);
	const [showMore, setShowMore] = useState(false);
	const [selectedDay, setSelectedDay] = useState(null);

	return (
		<Container
			fluid
			id='itinerary'
			className='iti-container w-100 min-vh-100 p-3 p-md-4 p-lg-5 d-flex align-items-center justify-content-center'
		>
			{showMore ?
				<SingleDayInfo
					setShowMore={setShowMore}
					schedule={schedule}
					selectedDay={selectedDay}
				/>
			:
				<ScheduleInfo
					setShowMore={setShowMore}
					schedule={schedule}
					setSelectedDay={setSelectedDay}
				/>
			}
		</Container>
	)
}
