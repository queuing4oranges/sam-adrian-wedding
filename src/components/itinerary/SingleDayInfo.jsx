import { useState, useEffect } from 'react';
import {
	Row, Col, Card, CardBody, Button,
	Modal, ModalBody, ModalFooter
} from 'reactstrap'

import Xicon from '../../assets/svgs/Xicon.jsx';

import './singledayinfo.scss';

export default function SingleDayInfo({ setShowMore, schedule, selectedDay, setSelectedDay }) {
	const [modal, setModal] = useState(false);
	const [currentDay, setCurrentDay] = useState(null);
	const [showArrow, setShowArrow] = useState({ left: null, right: null })
	const { day, date, title, description, note, imageUrl, inspirationUrl } = currentDay || {};

	const toggle = () => setModal(!modal);

	// Ensure selectedDay is within the valid range and update currentDay accordingly
	useEffect(() => {
		// If selectedDay is out of bounds, reset it to the first valid day
		const validDay = Math.max(1, Math.min(selectedDay, schedule.length));
		setSelectedDay(validDay);
	}, [selectedDay, schedule.length, setSelectedDay]);

	useEffect(() => {
		const current = schedule[selectedDay - 1];
		setCurrentDay(current);

		// Show left arrow only from Day2, show right arrow only up to Day4
		setShowArrow((prev) => ({
			...prev,
			right: selectedDay !== schedule.length,
			left: selectedDay > 1,
		}));

	},[selectedDay, schedule]);

	const handleNextDay = () => {
		if (selectedDay < schedule.length) {
			setSelectedDay(selectedDay + 1);
		} else {
			return null;
		}
	}

	const handlePrevDay = () => {
		if (selectedDay > 1) {
			setSelectedDay(selectedDay - 1);
		}
	}

	return (
		<Row className='card-container w-100'>
			<Col xs={12} lg={6} className='w-100 d-flex flex-column justify-content-center align-items-center'>
				{!modal ?
				<div className='d-flex'>
					<span className={`prev-span ${!showArrow.left ? 'hidden' : ''}`} onClick={handlePrevDay}>
						<i className='bi bi-caret-left'/>
						<span className='me-3'>PREV</span>
					</span>
					<Card className='single-day-info-card p-2 p-md-4 p-lg-5 position-relative'>
						<span
							onClick={() => setShowMore(false)}
							className='close-x d-flex justify-content-end'
							title='Close'
						>
							<Xicon
								width={30}
								height={30}
								color='#164443'
								className='xicon'
							/>
						</span>
						<div
							className='show-bg'
							style={{ backgroundImage: `url(${imageUrl})`}}>
						</div>
						<CardBody className='p-3 p-md-5'>
							<p className='single-day-date mb-3 mb-md-5 fw-semibold'>Day {day} - {date}</p>
							<h3 className='mb-3 mb-md-5'>{title}</h3>
							<p className='single-day-description mb-2 mb-md-3'>{description}</p>
							<p className='single-day-note'>{note}</p>
							{inspirationUrl &&
								<Button color='info' onClick={toggle} className='d-flex'>
									<i className='bi bi-card-image me-2' />
									<p className='m-0'>Photos for inspiration</p>
								</Button>
							}
						</CardBody>
					</Card>
						<span className={`next-span ${!showArrow.right ? 'hidden' : ''}`} onClick={handleNextDay}>
							<span className='ms-3'>NEXT</span>
							<i className='bi bi-caret-right'/>
						</span>
					</div>
				: <FotoModal inspirationUrl={inspirationUrl} toggle={toggle} modal={modal} />
				}
			</Col>
		</Row>
	)
}

function FotoModal ({ inspirationUrl, toggle, modal }) {
	return (
		<Modal
			isOpen={modal}
			toggle={toggle}
			size='lg'
			scrollable={true}
			className='d-flex justify-content-center'
		>
			<ModalBody className='m-auto'>
				<div className='text-center'>
					{inspirationUrl && inspirationUrl.map((image, idx) => (
						<img
							key={idx}
							src={image}
							alt={`Inspiration photo ${idx +1}`}
							className='img-fluid m-md-3'
						/>
					))}
				</div>
			</ModalBody>
			<ModalFooter>
				<Button color='info' onClick={toggle}>
					Close
				</Button>
			</ModalFooter>
		</Modal>
	);
}
