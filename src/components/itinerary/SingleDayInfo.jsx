import { useState } from 'react';
import {
	Row, Col, Card, CardBody, Button,
	Modal, ModalBody, ModalFooter
} from 'reactstrap'

import Xicon from '../../assets/svgs/Xicon.jsx';

import './singledayinfo.scss';

export default function SingleDayInfo({ setShowMore, schedule, selectedDay }) {
	const { day, date, title, description, note, imageUrl, inspirationUrl } = schedule[selectedDay - 1];
	const [modal, setModal] = useState(false);
	
	const toggle = () => setModal(!modal);

	return (
		<Row className='w-100 w-lg-50 card-container'>
			<Col xs={12} lg={6} className='d-flex flex-column justify-content-center'>
				<span
					onClick={() => setShowMore(false)}
					className='close-x d-flex justify-content-end pb-3'
					title='Close'
				>
					<Xicon
						width={30}
						height={30}
						color='#164443'
						className='xicon'
					/>
				</span>
				{!modal ?
				<Card>
					<div
						className='show-bg'
						style={{ backgroundImage: `url(${imageUrl})`}}>
					</div>
					<CardBody>
						<h3 className='mb-5'>Day {day} - {date}</h3>
						<h1 className='mb-5'>{title}</h1>
						<p className='fw-bold mb-3'>{description}</p>
						<p>{note}</p>
						{inspirationUrl &&
							<Button color='info' onClick={toggle} className='d-flex'>
								<i className='bi bi-card-image me-2' />
								<p className='m-0'>Photos for inspiration</p>
							</Button>
						}
					</CardBody>
				</Card>
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
			size='sm'
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
							className='m-3'
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