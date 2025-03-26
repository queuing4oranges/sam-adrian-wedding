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
			className='itinerary-container p-3 p-md-4 p-lg-5 py-5 d-flex justify-content-center'
		>
			{showMore ?
				<SingleDayInfo
					setShowMore={setShowMore}
					schedule={schedule}
					selectedDay={selectedDay}
					setSelectedDay={setSelectedDay}
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
